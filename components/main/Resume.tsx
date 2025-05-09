"use client"

import { motion } from "framer-motion"
import { Download, FileText, Award, GraduationCap, Code } from "lucide-react"
import Link from "next/link"

const Resume = () => {
  return (
    <section id="resume" className="relative w-full py-20 md:py-32">
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">Resume</h2>
          <div className="w-24 h-1 cosmic-violet rounded-full mb-8"></div>
          <p className="text-gray-300 text-center max-w-3xl">
            Download my resume or view my qualifications and achievements below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-[#0A0A20]/50 p-8 rounded-xl cosmic-border max-w-md w-full text-center">
            <FileText className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h3 className="text-2xl font-semibold mb-4">My Resume</h3>
            <p className="text-gray-300 mb-6">
              Download my complete resume to learn more about my education, skills, experience, and achievements.
            </p>
            <Link href="/Viraj_Bontha_Resume.pdf" download>
              <button className="py-3 px-6 rounded-full cosmic-violet text-white font-medium hover:opacity-90 transition-all glow flex items-center gap-2 mx-auto">
                <Download size={18} />
                Download Resume
              </button>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-purple-400" size={24} />
              <h3 className="text-2xl font-semibold space-gradient">Education</h3>
            </div>

            <div className="space-y-8">
              <div className="bg-[#0A0A20]/50 p-6 rounded-xl cosmic-border">
                <h4 className="text-xl font-medium mb-1">BITS Pilani Goa Campus</h4>
                <p className="text-lg text-purple-400 mb-2">B.E. (Hons.) Electrical and Electronics Engineering</p>
                <p className="text-gray-400 mb-3">2022-2026</p>
                <p className="text-gray-300 mb-2">Current GPA: 8.13</p>
                <div className="mt-4 pt-4 border-t border-[#2A0E61]/50">
                  <h5 className="font-medium mb-2">Key Subjects</h5>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                    <li>Digital Design</li>
                    <li>Computer Architecture</li>
                    <li>Analog and Digital VLSI Design</li>
                    <li>Static Timing Analysis</li>
                    <li>Microelectronic Circuits</li>
                    <li>Microprocessors and Interfacing</li>
                    <li>Electronic Devices</li>
                    <li>Control Systems</li>
                    <li>Signals & Systems</li>
                    <li>Digital Signal Processing</li>
                    <li>Computer Programming</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#0A0A20]/50 p-6 rounded-xl cosmic-border">
                <h4 className="text-xl font-medium mb-1">FIITJEE JUNIOR COLLEGE</h4>
                <p className="text-lg text-purple-400 mb-2">Telangana Board of Intermediate Education (TSBIE)</p>
                <p className="text-gray-400 mb-3">2022</p>
                <p className="text-gray-300">CLASS XII — 97.6 percent</p>
              </div>

              <div className="bg-[#0A0A20]/50 p-6 rounded-xl cosmic-border">
                <h4 className="text-xl font-medium mb-1">DAV PUBLIC SCHOOL</h4>
                <p className="text-lg text-purple-400 mb-2">CBSE</p>
                <p className="text-gray-400 mb-3">2020</p>
                <p className="text-gray-300">CLASS X — 96 percent</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-purple-400" size={24} />
              <h3 className="text-2xl font-semibold space-gradient">Skills & Achievements</h3>
            </div>

            <div className="space-y-8">
              <div className="bg-[#0A0A20]/50 p-6 rounded-xl cosmic-border">
                <h4 className="text-xl font-medium mb-2">Technical Proficiency</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0A0A20]/80 p-3 rounded-lg cosmic-border">
                    <p className="font-medium">Verilog</p>
                  </div>
                  <div className="bg-[#0A0A20]/80 p-3 rounded-lg cosmic-border">
                    <p className="font-medium">SystemVerilog</p>
                  </div>
                  <div className="bg-[#0A0A20]/80 p-3 rounded-lg cosmic-border">
                    <p className="font-medium">Cadence Virtuoso</p>
                  </div>
                  <div className="bg-[#0A0A20]/80 p-3 rounded-lg cosmic-border">
                    <p className="font-medium">MATLAB</p>
                  </div>
                  <div className="bg-[#0A0A20]/80 p-3 rounded-lg cosmic-border">
                    <p className="font-medium">C Programming</p>
                  </div>
                  <div className="bg-[#0A0A20]/80 p-3 rounded-lg cosmic-border">
                    <p className="font-medium">Python</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0A0A20]/50 p-6 rounded-xl cosmic-border">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-purple-400" size={20} />
                  <h4 className="text-xl font-medium">Competitions & Awards</h4>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#0A0A20]/80 p-4 rounded-lg cosmic-border">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">IEEE Student Chapter Paper Presentation Contest</h5>
                      <span className="text-sm text-gray-400">Mar 2025</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      2nd Prize – Presented research on Pseudo Random Number Generator verification. Verified the PRNG
                      design using SystemVerilog for ASIC applications.
                    </p>
                  </div>

                  <div className="bg-[#0A0A20]/80 p-4 rounded-lg cosmic-border">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">DigiCraft - Digital Circuit Design Competition</h5>
                      <span className="text-sm text-gray-400">Apr 2024</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      Excelled in Digicraft, showcasing skills in digital design and problem-solving.
                    </p>
                  </div>

                  <div className="bg-[#0A0A20]/80 p-4 rounded-lg cosmic-border">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">CBSE National Science Exhibition</h5>
                      <span className="text-sm text-gray-400">Jan 2020</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      Developed an automated irrigation system, earning national recognition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Resume
