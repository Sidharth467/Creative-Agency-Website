"use client"

import { motion } from "framer-motion"
import ScrollRevealText from "./ScrollRevealText"

const services = [
  {
    title: "Photography",
    desc: "Premium food, product and lifestyle photography for brands.",
  },
  {
    title: "Video Production",
    desc: "Short-form reels, ads and cinematic brand films.",
  },
  {
    title: "Branding",
    desc: "Visual identity, tone, and design direction for your brand.",
  },
  {
    title: "Social Media Creatives",
    desc: "High-performing content and creatives for Instagram & ads.",
  },
  {
    title: "Product Shoots",
    desc: "Clean, modern product visuals for ecommerce & campaigns.",
  },
  {
    title: "Content Strategy",
    desc: "Planning and concepts that make content consistent and strong.",
  },
]

export default function ServicesSection() {
  return (
    <section className="px-10 py-24">
      <ScrollRevealText text="What we do" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-neutral-400">{service.desc}</p>

            {/* small animated underline */}
            <div className="mt-6 h-[2px] w-0 bg-white/60 transition-all duration-500 group-hover:w-12" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
