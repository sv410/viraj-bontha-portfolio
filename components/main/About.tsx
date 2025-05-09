"use client"

import { motion } from "framer-motion"
import { Calendar, Briefcase, GraduationCap, Award } from "lucide-react"

const About = () => {
  const timelineEvents = [
    {
      year: "2022-Present",
      title: "BITS Pilani Goa Campus",
      description: "B.E. (Hons.) Electrical and Electronics Engineering",
      icon: <GraduationCap className="h-5 w-5 text-purple-400" />,
    },
    {
      year: "May 2024 - Jul 2024",
      title: "Research Intern",
      description: "CSIR - Central Electronics Engineering Research Institute (CEERI)",
      icon: <Briefcase className="h-5 w-5 text-purple-400" />,
    },
    {
      year: "Oct 2023 - Jan 2024",
      title: "Circuital and Electronics Intern",
      description: "Khageshvara Aviation Technology Pvt. Ltd",
      icon: <Briefcase className="h-5 w-5 text-purple-400" />,
    },
    {
      year: "Mar 2025",
      title: "IEEE Paper Presentation Contest",
      description: "2nd Prize – Research on Pseudo Random Number Generator verification",
      icon: <Award className="h-5 w-5 text-purple-400" />,
    },
  ]

  return (
    <section id="about" className="relative w-full py-20 md:py-32">
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">About Me</h2>
          <div className="w-24 h-1 cosmic-violet rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold space-gradient">Viraj Bontha</h3>
            <p className="text-gray-300">
              I'm an Electrical and Electronics Engineering student at BITS Pilani Goa Campus, passionate about VLSI
              design, digital systems, and embedded electronics.
            </p>
            <p className="text-gray-300">
              With a strong foundation in digital design, computer architecture, and microelectronics, I'm dedicated to
              pushing the boundaries of what's possible in hardware and software integration.
            </p>
            <p className="text-gray-300">
              My experience includes research at CSIR-CEERI and work with Khageshvara Aviation Technology, where I've
              applied my skills to real-world challenges in electronic system design and optimization.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-[#0A0A20]/50 p-4 rounded-lg cosmic-border">
                <h4 className="font-semibold mb-1">Education</h4>
                <p className="text-sm text-gray-400">BITS Pilani Goa Campus</p>
              </div>
              <div className="bg-[#0A0A20]/50 p-4 rounded-lg cosmic-border">
                <h4 className="font-semibold mb-1">GPA</h4>
                <p className="text-sm text-gray-400">8.13/10</p>
              </div>
              <div className="bg-[#0A0A20]/50 p-4 rounded-lg cosmic-border">
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-sm text-gray-400">Hyderabad, Telangana</p>
              </div>
              <div className="bg-[#0A0A20]/50 p-4 rounded-lg cosmic-border">
                <h4 className="font-semibold mb-1">Interests</h4>
                <p className="text-sm text-gray-400">VLSI, Digital Systems</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h3 className="text-2xl font-semibold space-gradient mb-6">My Timeline</h3>
            <div className="space-y-8 relative">
              <div className="absolute left-[15px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500 to-blue-500"></div>

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-0 w-[30px] h-[30px] bg-[#0A0A20] rounded-full border-2 border-purple-500 flex items-center justify-center z-10">
                    {event.icon}
                  </div>
                  <div className="bg-[#0A0A20]/50 p-4 rounded-lg cosmic-border hover:glow transition-all">
                    <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
                      <Calendar size={14} />
                      <span>{event.year}</span>
                    </div>
                    <h4 className="text-lg font-medium mb-1">{event.title}</h4>
                    <p className="text-gray-300 text-sm">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
