'use client'
import { ThreeDMarquee } from '@/components/ui/3d-marquee'
import { useRouter } from 'next/navigation'

export default function CallToAction() {
  const router = useRouter()
  const images = [
    '/Hero/HeroPics/1.webp',
    '/Hero/HeroPics/2.webp',
    '/Hero/HeroPics/3.webp',
    '/Hero/HeroPics/4.webp',
    '/Hero/HeroPics/5.webp',
    '/Hero/HeroPics/6.webp',
    '/Hero/HeroPics/7.webp',
    '/Hero/HeroPics/8.webp',
    '/Hero/HeroPics/9.webp',
    '/Hero/HeroPics/10.webp',
    '/Hero/HeroPics/11.webp',
    '/Hero/HeroPics/12.webp',
    '/Hero/HeroPics/13.webp',
    '/Hero/HeroPics/14.webp',
    '/Hero/HeroPics/15.webp',
    '/Hero/HeroPics/1.webp',
    '/Hero/HeroPics/11.webp',
    '/Hero/HeroPics/12.webp',
    '/Hero/HeroPics/13.webp',
    '/Hero/HeroPics/14.webp',
    '/Hero/HeroPics/15.webp',
  ]
  return (
    <div className="relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
        Transform your business into a
        <span className="relative z-20 inline-block rounded-xl bg-[#a67d0093] px-4 py-1 text-white underline decoration-[#A67C00] decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          powerhouse of success
        </span>{' '}
        Today with our digital expertise.
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        Welcome Go Getter. Your ambition brought you here; Our Expertise will take you further.
        Together we&apos;ll shape a Brand and Platform that Customers choose and Competitors
        respect. Master Tech Solutions Center Is Your Trusted Partner in Digital Transformation.
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <button
          onClick={() => router.push('/contact')}
          className="rounded-md bg-[#A67C00] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#e6ac01] focus:ring-2 focus:ring-[#7c5d00] focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
        >
          Join the club
        </button>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  )
}
