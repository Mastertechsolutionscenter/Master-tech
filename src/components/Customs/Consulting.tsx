'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Consultation() {
  const router = useRouter()
  return (
    <section
      id="consulting"
      className="bg-black text-white py-16 px-8 md:px-16 flex flex-col md:flex-row items-center gap-8"
    >
      {/* Left Image */}
      <div className="flex-1">
        <Image
          src="/Hero/Pics/consult.webp"
          alt="Handshake representing partnership With Master Tech Solutions Center for digital strategy consulting in Kenya"
          width={500}
          height={500}
          className="rounded-xl shadow-xl object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center gap-4">
        <h2 className="text-[#A67C00] text-3xl md:text-5xl font-bold leading-snug">
          Let &apos;s Talk About Your Digital Strategy
        </h2>
        <p className="text-lg text-gray-300 font-medium">Consulting & Digital Strategy</p>
        <p className="text-gray-200 text-base md:text-lg leading-relaxed text-justify">
          At Master Tech Solutions Center, we understand that every business in Kenya needs a
          tailored digital strategy to thrive in today&apos;s competitive market. Our consulting
          services are designed to help your brand increase online visibility, streamline
          operations, and drive meaningful growth. From social media campaigns to website
          optimization, we craft strategies that align with your business goals and target audience.
          Partnering with us means leveraging expert insights, innovative solutions, and hands-on
          support to ensure your digital presence is strong, measurable, and impactful. Whether you
          are a startup or an established company, our proven strategies will help you attract more
          customers, enhance brand credibility, and maximize ROI. Don&apos;t wait—come consult with
          us today and unlock the full potential of your digital growth in Kenya and beyond.
        </p>

        <button
          onClick={() => router.push('/contact')}
          className="mt-6 w-fit bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition-colors"
        >
          Schedule a Consultation
        </button>
      </div>
    </section>
  )
}
