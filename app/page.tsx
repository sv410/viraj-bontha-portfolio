import Hero from "@/components/main/Hero"
import Navbar from "@/components/main/Navbar"
import About from "@/components/main/About"
import Skills from "@/components/main/Skills"
import Projects from "@/components/main/Projects"
import Experience from "@/components/main/Experience"
import Resume from "@/components/main/Resume"
import Contact from "@/components/main/Contact"
import Footer from "@/components/main/Footer"
import StarBackground from "@/components/main/StarBackground"

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="relative z-10">
        <Navbar />
        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Resume />
          <Contact />
          <Footer />
        </div>
      </div>
      <div className="fixed inset-0 z-0">
        <StarBackground />
      </div>
    </main>
  )
}
