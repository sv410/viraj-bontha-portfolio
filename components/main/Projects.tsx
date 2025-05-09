"use client"

import { motion } from "framer-motion"
import { Calendar, Tag } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "5-Stage Pipelined MIPS Processor",
      description:
        "Designed a 5-stage pipelined MIPS processor supporting multiple instructions with 32-bit data and address buses. Implemented hazard detection and forwarding units for efficient pipeline execution.",
      date: "Feb 2025 - Mar 2025",
      tags: ["Verilog", "Computer Architecture", "Digital Design"],
      color: "from-purple-500/20 to-blue-500/20",
    },
    {
      title: "SoC Verification using SystemVerilog",
      description:
        "Developed and verified testbenches for memory verification (FIFO) and bus protocols (APB, AHB, AXI). Verified interface communication protocols and sequential logic blocks.",
      date: "Dec 2024 - Present",
      tags: ["SystemVerilog", "Verification", "SoC"],
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Digital Filter Design",
      description:
        "Developed an optimised decimation filter for a network chip. Implemented efficient CIC, FIR Compensation, and Half-Band FIR Filters in MATLAB, achieving 69% hardware savings and 28% power reduction.",
      date: "May 2024 - Jul 2024",
      tags: ["MATLAB", "DSP", "Filter Design"],
      color: "from-purple-500/20 to-blue-500/20",
    },
  ]

  return (
    <section id="projects" className="relative w-full py-20 md:py-32">
      <div className="absolute bottom-1/3 right-0 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">Projects</h2>
          <div className="w-24 h-1 cosmic-violet rounded-full mb-8"></div>
          <p className="text-gray-300 text-center max-w-3xl">
            Explore my technical projects showcasing skills in digital design, verification, and signal processing. Each
            project demonstrates my approach to solving complex engineering challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-[#0A0A20]/50 rounded-xl overflow-hidden cosmic-border card-glow transform transition-all hover:translate-y-[-10px] hover:rotate-[2deg]`}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <div className={`h-24 w-full bg-gradient-to-r ${project.color}`}>
                <div className="h-full w-full flex items-center justify-center">
                  <h3
                    className="text-2xl font-bold text-white px-4 text-center"
                    style={{
                      transform: "translateZ(30px)",
                      textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div
                  className="flex items-center gap-2 mb-3 text-sm text-gray-400"
                  style={{
                    transform: "translateZ(15px)",
                  }}
                >
                  <Calendar size={14} />
                  <span>{project.date}</span>
                </div>

                <p
                  className="text-gray-300 text-sm mb-4"
                  style={{
                    transform: "translateZ(10px)",
                  }}
                >
                  {project.description}
                </p>

                <div
                  className="flex flex-wrap gap-2 mt-4"
                  style={{
                    transform: "translateZ(5px)",
                  }}
                >
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs py-1 px-2 rounded-full bg-purple-900/30 border border-purple-500/30 flex items-center gap-1"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
