"use client"

import { motion } from "framer-motion"
import ScrollRevealText from "./ScrollRevealText"

const works = [
  { title: "Miramasa", image: "/images/DSC00265_result.jpg" },
  { title: "Miramasa", image: "/images/DSC00283_result.jpg" },
  { title: "Miramasa", image: "/images/DSC00294_result.jpg" },
]

export default function WorksGrid() {
  return (
    <>
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="px-10 pb-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      {works.map((work, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-xl"
        >
          <div className="aspect-[4/3]">
            <img
              src={work.image}
              alt={work.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-xl font-semibold opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              {work.title}
            </h3>
          </div>
        </div>
      ))}
    </motion.section>
    {/* Text AFTER images */}
      <div className="px-10 pb-32 max-w-4xl">
        <ScrollRevealText text="Each project is approached with a strong visual language, attention to detail, and a focus on creating meaningful brand experiences." />
      </div>
      </>
  )
}
