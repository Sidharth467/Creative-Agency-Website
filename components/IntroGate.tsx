"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function IntroGate({
  children,
  onFinish,
}: {
  children: React.ReactNode
  onFinish?: () => void
}) {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setDone(true)
      onFinish?.()
    }, 2000)
    return () => clearTimeout(t)
  }, [onFinish])

  return (
    <>
      <AnimatePresence>
        {!done && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
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

      <div className={done ? "opacity-100" : "opacity-0"}>
        {children}
      </div>
    </>
  )
}
