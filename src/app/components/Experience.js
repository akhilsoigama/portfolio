'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Typography, Box } from '@mui/material'

const Experience = () => {
  const experienceData = [
    {
      title: 'Frontend Developer',
      company: 'SULOK DIGITAL SOLUTION PRIVATE LIMITED',
      duration: '2024 - Present',
      description:
        'I have completed my frontend internship, gaining experience in various technologies, including HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React, and Next.js.',
      image:
        'https://images.stockcake.com/public/5/e/6/5e6fb906-70e0-4ec9-9df9-fb564a8fec74_large/coder-at-work-stockcake.jpg',
    },
  ]

  return (
    <Box className="flex justify-center items-center flex-col bg-black/40 py-16 px-4 w-full mx-auto overflow-hidden rounded-xl">
      <Typography variant="h3" className="text-white mb-12 text-center text-4xl font-extrabold">
        Experience
      </Typography>

      <div className="flex flex-wrap mt-10 justify-center gap-8 w-full">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden shadow-2xl hover:shadow-lg transition-all duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-t-xl"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover rounded-t-xl transition-transform duration-300"
              />
            </motion.div>

            <div className="p-6 space-y-4 bg-opacity-90 backdrop-blur-md rounded-b-xl">
              <Typography variant="h4" className="text-2xl font-semibold text-white hover:text-indigo-400 transition duration-300">
                {exp.title}
              </Typography>
              <Typography variant="h6" className="text-lg text-gray-300">
                {exp.company}
              </Typography>
              <Typography variant="body1" className="text-gray-400 italic">
                {exp.duration}
              </Typography>
              <Typography variant="body2" className="text-gray-200 mt-4">
                {exp.description}
              </Typography>
            </div>
          </motion.div>
        ))}
      </div>
    </Box>
  )
}

export default Experience
