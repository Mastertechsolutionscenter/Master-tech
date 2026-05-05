'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaFacebook, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa6'

export default function Footer() {
  const pathname = usePathname()
  const isPortal = pathname.startsWith('/portal')

  if (isPortal) return null

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-black">
      <div className="mx-auto w-11/12 lg:w-4/5 py-16 space-y-12">

        {/* BRAND SUMMARY */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* ABOUT SECTION */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#A67C00]">
              Master Tech Solutions
            </h2>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Building intelligent digital systems that help businesses grow through software,
              marketing innovation, and enterprise technology solutions.
            </p>

            {/* SOCIAL MEDIA ICONS */}
            <div className="flex items-center gap-5 text-xl">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61580915751993"
                target="_blank"
                className="hover:scale-110 transition"
                style={{ color: "#1877F2" }}
              >
                <FaFacebook />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/thomas-mosaremo-034b68382/"
                target="_blank"
                className="hover:scale-110 transition"
                style={{ color: "#0A66C2" }}
              >
                <FaLinkedin />
              </a>

              {/* Email */}
              <a
                href="mailto: info@mastertechsolutionscenter.com"
                className="hover:scale-110 transition"
                style={{ color: "#EA4335" }}
              >
                <FaEnvelope />
              </a>

              {/* Instagram (Placeholder Link) */}
              <a
                href="https://www.instagram.com/master_tech_solution_center_/"
                target="_blank"
                className="hover:scale-110 transition"
                style={{
                  color: "#E1306C",
                }}
              >
                <FaInstagram />
              </a>


            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="font-semibold mb-4 text-neutral-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/posts">Blog</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/portal">Partner Portal</Link></li>
            </ul>
          </div>

          {/* CTA SECTION */}
          <div className="space-y-4">
            <h3 className="font-semibold text-neutral-900 dark:text-white">
              Start Your Digital Transformation
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Get professional technology and business solutions tailored to your needs.
            </p>

            {/* Placeholder — Replace # with your real link */}
            <Link
              href="#"
              className="inline-block bg-[#A67C00] text-white px-6 py-2 rounded-lg hover:bg-[#8B6900] transition"
            >
              Request Quote
            </Link>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600 dark:text-neutral-400 gap-3">

          <p>
            © {new Date().getFullYear()} Master Tech Solutions Center. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}