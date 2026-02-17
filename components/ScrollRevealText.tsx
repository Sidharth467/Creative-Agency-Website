"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function ScrollRevealText({
  text,
}: {
  text: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const words = text.split(" ")

  return (
    <div ref={ref} className="overflow-hidden">
      <h2 className="text-[clamp(2rem,6vw,4rem)] font-semibold leading-tight">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-3">
            <motion.span
              initial={{ y: "120%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{
                delay: i * 0.05,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h2>
    </div>
  )
}
