'use client'

import { HiShieldCheck, HiLockClosed, HiFingerPrint, HiEye, HiDocumentText } from 'react-icons/hi'
import { TitleText } from '@/components/Basic/CustomText'

import { GlowingEffect } from '@/components/ui/glowing-effect'

export default function CyberSec() {
  return (
    <section id="cybersecurity" className="w-11/12 lg:w-4/5 mx-auto my-20">
      <TitleText title={<>Cybersecurity & Compliance</>} textStyles="text-center" />
      <div className="w-full flex items-center text-center justify-center">
        <h2 className="exterior text-lg md:text-4xl mb-4 text-center dark:text-white max-w-4xl">
          Get the best cybersecurity solutions, compliance strategies, and risk management to
          protect your data, secure your systems, and ensure regulatory adherence.
        </h2>
      </div>
      <ul className="w-4/5 mx-auto grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<HiShieldCheck className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Network Security"
          description="Protect your business from cyber threats with robust firewalls, intrusion detection, and secure network architecture."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<HiLockClosed className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Endpoint Protection"
          description="Ensure all devices and endpoints in your organization are secure with advanced anti-malware and monitoring tools."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<HiFingerPrint className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Identity & Access Management"
          description="Control who can access your systems with secure authentication, role-based access, and password management solutions."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<HiEye className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Threat Monitoring & Detection"
          description="Continuous monitoring, real-time alerts, and proactive threat detection to keep your systems safe 24/7."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<HiDocumentText className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Compliance & Risk Management"
          description="Ensure your business meets regulatory standards and reduces risk with audits, reporting, and governance best practices."
        />
      </ul>
    </section>
  )
}

interface GridItemProps {
  area: string
  icon: React.ReactNode
  title: string
  description: React.ReactNode
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
