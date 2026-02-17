"use client"

import { useState } from "react"
import { LayoutGroup } from "framer-motion"
import IntroGate from "./IntroGate"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {/* ONE CONTINUOUS VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`${
  introDone
    ? "absolute top-0 left-0 h-[120vh] w-full"
    : "fixed top-0 left-0 w-screen h-screen"
} -z-10 object-cover`}

      >
        <source src="/videos/Miramasa Website_compressed.mp4" type="video/mp4" />
      </video>

      {/* optional tint */}
      {/* <div
        className={`${
          introDone ? "absolute h-[120vh]" : "fixed inset-0"
        } -z-10 bg-black/50 transition-all duration-700`}
      /> */}

      <LayoutGroup>
        <IntroGate onFinish={() => setIntroDone(true)}>
          {children}
        </IntroGate>
      </LayoutGroup>
    </>
  )
}
