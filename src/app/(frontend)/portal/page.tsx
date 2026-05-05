import React from 'react'
import { getMeUser } from '@/utilities/getMeUser'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { redirect } from 'next/navigation'
import { Logo } from '@/components/Logo/Logo'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaProjectDiagram, FaCheckCircle, FaClock, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { logoutAction } from './actions'

export default async function PortalDashboardPage() {
  // Check auth and get user
  let userData;
  try {
    const { user } = await getMeUser({
      nullUserRedirect: '/portal/login',
    })
    userData = user;
  } catch (error) {
    redirect('/portal/login')
  }

  const payload = await getPayload({ config: configPromise })

  // Fetch projects for this client
  const projects = await payload.find({
    collection: 'projects',
    where: {
      client: {
        equals: userData.id,
      },
    },
    depth: 1,
  })

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white flex items-center gap-3">
              Welcome back, <span className="text-[#A67C00]">{userData.name}</span>
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1">
              Your digital transformation progress at a glance.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <FaUser className="text-[#A67C00] size-3" />
              <span className="text-sm font-medium">{userData.email}</span>
            </div>
            <form action={logoutAction}>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-full transition-all border border-transparent hover:border-red-100 dark:hover:border-red-900/30">
                <FaSignOutAlt />
                Sign Out
              </button>
            </form>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard 
            title="Active Projects" 
            value={projects.totalDocs.toString()} 
            icon={<FaProjectDiagram className="text-[#A67C00]" />} 
          />
          <StatCard 
            title="Completed Milestones" 
            value={projects.docs.reduce((acc, p) => acc + (p.milestones?.filter(m => m.completed).length || 0), 0).toString()} 
            icon={<FaCheckCircle className="text-green-500" />} 
          />
          <StatCard 
            title="Next Milestone" 
            value="Pending Review" 
            icon={<FaClock className="text-amber-500" />} 
          />
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Active Roadmap</h2>
          
          {projects.docs.length === 0 ? (
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-12 text-center border border-neutral-200 dark:border-neutral-800 shadow-xl">
              <div className="max-w-md mx-auto">
                <FaProjectDiagram className="size-12 text-neutral-300 dark:text-neutral-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No projects found</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Your project data is currently being prepared. Check back soon for your roadmap!
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8">
              {projects.docs.map((project) => (
                <div key={project.id} className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <FaProjectDiagram className="size-32" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-[#A67C00]/10 text-[#A67C00] text-xs font-bold uppercase tracking-wider mb-2">
                          {project.status?.replace(/-/g, ' ')}
                        </span>
                        <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">{project.projectName}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-bold text-[#A67C00]">{project.progress}%</div>
                        <div className="text-xs text-neutral-500 uppercase font-bold tracking-widest mt-1 text-right">Completion</div>
                      </div>
                    </div>

                    {project.portalMessage && (
                      <div className="mb-10 p-6 bg-neutral-50 dark:bg-black/40 rounded-2xl border-l-4 border-[#A67C00] italic text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        "{project.portalMessage}"
                      </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {/* Milestones */}
                      <div>
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                          <FaCheckCircle className="text-[#A67C00]" />
                          Project Milestones
                        </h4>
                        <div className="space-y-6">
                          {project.milestones?.map((m, idx) => (
                            <div key={idx} className="flex gap-4 group">
                              <div className="flex flex-col items-center">
                                <div className={`size-6 rounded-full border-2 flex items-center justify-center transition-colors ${m.completed ? 'bg-[#A67C00] border-[#A67C00]' : 'border-neutral-300 dark:border-neutral-700'}`}>
                                  {m.completed && <FaCheckCircle className="size-3 text-white" />}
                                </div>
                                {idx !== (project.milestones?.length || 0) - 1 && (
                                  <div className="w-0.5 h-full bg-neutral-200 dark:bg-neutral-800 my-1" />
                                )}
                              </div>
                              <div className="pb-4">
                                <div className={`font-bold ${m.completed ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-500'}`}>
                                  {m.title}
                                </div>
                                {m.description && <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{m.description}</p>}
                                {m.date && <p className="text-xs text-[#A67C00] font-bold mt-2 uppercase">{new Date(m.date).toLocaleDateString()}</p>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Services */}
                      <div>
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                          <FaProjectDiagram className="text-[#A67C00]" />
                          Active Services
                        </h4>
                        <div className="grid grid-cols-1 gap-4">
                          {(project.services || []).map((service: any) => (
                            <div key={service.id} className="p-4 rounded-xl bg-neutral-50 dark:bg-black/20 border border-neutral-100 dark:border-neutral-800 hover:border-[#A67C00]/30 transition-all group">
                              <div className="font-bold text-neutral-900 dark:text-white group-hover:text-[#A67C00] transition-colors">{service.title}</div>
                              <p className="text-xs text-neutral-500 mt-1 line-clamp-1">{service.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-lg flex items-center gap-6">
      <div className="size-14 rounded-2xl bg-neutral-50 dark:bg-black flex items-center justify-center text-xl shadow-inner border border-neutral-100 dark:border-neutral-800">
        {icon}
      </div>
      <div>
        <div className="text-sm font-bold text-neutral-500 uppercase tracking-widest">{title}</div>
        <div className="text-2xl font-black text-neutral-900 dark:text-white">{value}</div>
      </div>
    </div>
  )
}
