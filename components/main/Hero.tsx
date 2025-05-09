"use client"
import Image from "next/image"
import HeroContent from "../sub/HeroContent"

const Hero = () => {
  return (
    <section id="home" className="relative flex flex-col h-screen w-full">
      {/* Cosmic background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[100px]" />
        <Image src="/hero-bg.svg" alt="Background" fill className="object-cover opacity-30" />
      </div>

      {/* Main hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
        <HeroContent />
      </div>
    </section>
  )
}

export default Hero
