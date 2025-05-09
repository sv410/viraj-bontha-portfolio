"use client"

import { motion } from "framer-motion"
import SkillText from "../sub/SkillText"
import { Cpu, Code, Server, PinIcon as Chip, Terminal } from "lucide-react"

const Skills = () => {
  const skills = [
    {
      name: "Verilog",
      icon: <Chip className="h-8 w-8 text-purple-400" />,
      description: "Hardware description language for digital circuit design",
    },
    {
      name: "SystemVerilog",
      icon: <Server className="h-8 w-8 text-purple-400" />,
      description: "Advanced HDL for verification and modeling",
    },
    {
      name: "MATLAB",
      icon: <Terminal className="h-8 w-8 text-blue-400" />,
      description: "Technical computing for signal processing and analysis",
    },
    {
      name: "C",
      icon: <Code className="h-8 w-8 text-blue-400" />,
      description: "Low-level programming for embedded systems",
    },
    {
      name: "Python",
      icon: <Code className="h-8 w-8 text-purple-400" />,
      description: "High-level programming for data analysis and automation",
    },
    {
      name: "Cadence Virtuoso",
      icon: <Cpu className="h-8 w-8 text-blue-400" />,
      description: "IC design and layout tool for VLSI development",
    },
  ]

  return (
    <section id="skills" className="relative flex flex-col items-center justify-center py-20 md:py-32">
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />

      <SkillText />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#0A0A20]/50 p-6 rounded-xl cosmic-border card-glow transform transition-all hover:translate-y-[-10px] hover:rotate-[2deg]"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className="mb-4 p-4 rounded-full bg-[#0A0A20]/80 cosmic-border"
                style={{
                  transform: "translateZ(20px)",
                }}
              >
                {skill.icon}
              </div>
              <h3
                className="text-xl font-semibold mb-2 space-gradient"
                style={{
                  transform: "translateZ(15px)",
                }}
              >
                {skill.name}
              </h3>
              <p
                className="text-gray-300 text-sm"
                style={{
                  transform: "translateZ(10px)",
                }}
              >
                {skill.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full flex items-center justify-center py-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl bg-[#0A0A20]/50 rounded-xl p-6 cosmic-border"
        >
          <h3 className="text-xl font-semibold mb-4">Technical Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-lg font-medium">Hardware Design</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Digital Circuit Design</li>
                <li>VLSI Design & Verification</li>
                <li>Microprocessor Architecture</li>
                <li>FPGA Implementation</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-medium">Software & Tools</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>HDL Programming (Verilog, SystemVerilog)</li>
                <li>Embedded Systems Programming</li>
                <li>Signal Processing & Control Systems</li>
                <li>Simulation & Verification Tools</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
