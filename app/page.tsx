import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import PageTransition from "../components/PageTransition"
import ServicesSection from "../components/ServicesSection"
import ScrollRevealText from "../components/ScrollRevealText"

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <Hero />

      {/* SERVICES */}
      <ServicesSection />

      {/* CTA */}
      <section className="px-10 py-24 border-t border-white/10">
        <ScrollRevealText text="Let’s create something bold." />
        <p className="mt-6 text-neutral-400 max-w-xl">
          Tell us about your brand. We’ll help you plan, shoot and deliver content
          that stands out.
        </p>

        <button className="mt-8 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-80 transition">
          Get a Quote
        </button>
      </section>
    </PageTransition>
  )
}
