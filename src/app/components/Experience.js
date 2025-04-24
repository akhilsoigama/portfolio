'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Typography, Box } from '@mui/material'

const Experience = () => {
  const experienceData = [
    {
      title: 'Frontend Developer Intern',
      company: 'SULOK DIGITAL SOLUTION PRIVATE LIMITED',
      duration: '2024 - 2025',
      description:
      'During my internship, I worked on various front-end web applications and contributed to the development of multiple projects. I utilized my skills in HTML, CSS, JavaScript, and React to create responsive, interactive UI components, working closely with the design and backend teams to implement seamless user experiences.',
      image:
      'https://images.stockcake.com/public/5/e/6/5e6fb906-70e0-4ec9-9df9-fb564a8fec74_large/coder-at-work-stockcake.jpg',
    },
    {
      title: 'Hospital Manegment System ',
      company: 'SULOK DIGITAL SOLUTION PRIVATE LIMITED',
      duration: '2025 - Present',
      description:
        'As a frontend developer, I contributed to a Hospital Management System project at Sulok Digital Solution. My work involved designing and implementing user-friendly, responsive interfaces using technologies like react+vite and adonis js. The project focused on streamlining hospital operations and improving patient management through a modern, dynamic interface.',
      image:
        'https://media.licdn.com/dms/image/v2/D5612AQE8lRG4T0M5JQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1681731881702?e=2147483647&v=beta&t=yzyCxUheIA2VYnqi2JFddNq6mVSJUgvD1mo1HXkzjRY',
    },
  ]

  return (
    <Box className="flex justify-center items-center flex-col py-16 px-4 w-full mx-auto overflow-hidden dark:bg-black/40">
      <section className='w-full h-full' id='experience'>
        <Typography
          variant="h3"
          className="mb-12 text-center text-4xl font-extrabold font-serif italic"
        >
          Experience
        </Typography>

        <div className="flex flex-wrap mt-10 justify-center gap-8 w-full">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
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
                  className="w-full h-full object-cover rounded-t-xl transition-transform duration-300 hover:scale-110"
                />
              </motion.div>

              <div className="p-6 space-y-4 dark:bg-black/70 backdrop-blur-md rounded-b-xl">
                <Typography
                  variant="h4"
                  className="text-2xl font-semibold dark:text-white hover:text-indigo-400 transition duration-300 font-sans"
                >
                  {exp.title}
                </Typography>
                <Typography
                  variant="h6"
                  className="text-lg dark:text-gray-300 font-sans"
                >
                  {exp.company}
                </Typography>
                <Typography
                  variant="body1"
                  className="dark:text-gray-400 italic font-serif"
                >
                  {exp.duration}
                </Typography>
                <Typography
                  variant="body2"
                  className="dark:text-gray-200 mt-4 font-sans"
                >
                  {exp.description}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Box>
  )
}

export default Experience
