"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-10 py-6">
      <div className="flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/">
          <motion.h1
            layoutId="site-logo"
            className="text-xl font-bold text-white tracking-tight"
          >
            stf
          </motion.h1>
        </Link>

        {/* NAV LINKS */}
        <div className="space-x-6 text-white">
          <Link href="/works">Works</Link>
        </div>
      </div>
    </nav>
  )
}
