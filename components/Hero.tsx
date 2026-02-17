"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center px-10">
      <div className="relative z-10 max-w-4xl pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(3rem,6vw,5rem)] font-bold leading-tight"
        >
          We craft visual stories for bold brands.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-neutral-200"
        >
          Photography • Video • Branding • Digital Experiences
        </motion.p>
      </div>
    </section>
  )
}
