"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Research Intern",
      company: "CSIR - Central Electronics Engineering Research Institute (CEERI)",
      location: "Pilani, Rajasthan",
      date: "May 2024 - Jul 2024",
      description: "Developed an optimised decimation filter for a network chip with implementation in MATLAB.",
    },
    {
      title: "Circuital and Electronics Intern",
      company: "Khageshvara Aviation Technology Pvt. Ltd",
      location: "Remote",
      date: "Oct 2023 - Jan 2024",
      description:
        "Collaborated on electronic system enhancements, optimising designs to align with company objectives and improve performance.",
    },
  ]

  const responsibilities = [
    {
      title: "International Programmes Collaboration Division Student Coordinator",
      date: "Apr 2024 - Present",
      description:
        "Supported student and faculty exchange programs, coordinated joint academic activities, and assisted in planning international academic events, enhancing my college's global partnerships and presence.",
    },
    {
      title: "Department of Backstage and Infrastructure Management",
      date: "Dec 2022 - Apr 2024",
      description:
        "Managed backstage operations and infrastructure for various events in my college. Played a key role in operating Audio-Visual systems, coordinating logistics, and ensuring smooth event execution during various fests.",
    },
  ]

  return (
    <section id="experience" className="relative w-full py-20 md:py-32">
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">Experience</h2>
          <div className="w-24 h-1 cosmic-violet rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-6 flex items-center gap-2"
            >
              <Briefcase className="text-purple-500" size={24} />
              Work Experience
            </motion.h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l border-purple-500/30"
                >
                  <div className="absolute -left-[6.5px] top-0 w-3 h-3 rounded-full bg-purple-500"></div>
                  <div className="bg-[#0A0A20]/50 p-6 rounded-xl cosmic-border">
                    <h4 className="text-xl font-medium mb-1">{exp.title}</h4>
                    <h5 className="text-lg text-purple-400 mb-2">{exp.company}</h5>

                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-6 flex items-center gap-2"
            >
              <Briefcase className="text-blue-500" size={24} />
              Positions of Responsibility
            </motion.h3>

            <div className="space-y-8">
              {responsibilities.map((resp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l border-blue-500/30"
                >
                  <div className="absolute -left-[6.5px] top-0 w-3 h-3 rounded-full bg-blue-500"></div>
                  <div className="bg-[#0A0A20]/50 p-6 rounded-xl cosmic-border">
                    <h4 className="text-xl font-medium mb-2">{resp.title}</h4>

                    <div className="flex items-center gap-1 mb-3 text-sm text-gray-400">
                      <Calendar size={14} />
                      <span>{resp.date}</span>
                    </div>

                    <p className="text-gray-300">{resp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
