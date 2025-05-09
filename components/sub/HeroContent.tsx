"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center px-4 md:px-10 mt-24 w-full sm:w-[90%] md:w-[80%] max-w-7xl"
    >
      <div className="w-full flex flex-col md:flex-row gap-5 mt-6 items-center">
        <div className="flex flex-col gap-6 mt-6 w-full md:w-3/5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="py-2 px-4 border border-[#7042f88b] opacity-90 rounded-full max-w-fit mx-auto md:mx-0"
          >
            <p className="text-sm text-center md:text-left">Electrical and Electronics Engineering Student</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col gap-3 mt-2 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold hero-text-gradient">Viraj Bontha</h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300">
              Designing the <span className="space-gradient">future</span> of electronics
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto md:mx-0">
              BITS Pilani student specializing in VLSI design, digital systems, and embedded electronics. Passionate
              about creating innovative solutions through hardware and software integration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-4"
          >
            <Link href="#projects">
              <button className="py-3 px-6 rounded-full cosmic-violet text-white font-medium hover:opacity-90 transition-all glow">
                View Projects
              </button>
            </Link>
            <Link href="#contact">
              <button className="py-3 px-6 rounded-full bg-transparent border border-[#7042f88b] text-white font-medium hover:bg-[#7042f81f] transition-all">
                Contact Me
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="md:w-2/5 flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <div className="relative w-64 h-64">
            <Image
              src="profile.jpg"
              alt="Viraj Bontha"
              width={256}
              height={256}
              className="rounded-full object-cover border-4 border-purple-500/50 glow"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-gray-400 text-sm mb-2">Scroll Down</p>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
          <ArrowDown className="text-gray-400" size={20} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default HeroContent
