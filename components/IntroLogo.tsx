"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function IntroLogo() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            layoutId="site-logo"
            className="text-[clamp(3rem,10vw,8rem)] font-bold tracking-tight"
          >
            stf
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
