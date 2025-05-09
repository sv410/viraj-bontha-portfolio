"use client"

import { motion } from "framer-motion"

const SkillText = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-10"
      >
        <h2 className="text-4xl font-bold mb-2">Skills & Expertise</h2>
        <div className="w-24 h-1 cosmic-violet rounded-full mb-8"></div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-300 text-center max-w-3xl px-4 sm:px-6"
      >
        With expertise in digital design, VLSI, and embedded systems, I combine hardware and software knowledge to
        create innovative electronic solutions. My technical skills span from circuit design to system verification,
        enabling me to tackle complex engineering challenges.
      </motion.p>
    </div>
  )
}

export default SkillText
