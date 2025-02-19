'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Typography, Box } from '@mui/material'
import { Button } from "@/components/ui/button"
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

const LifeSkills = () => {
  const skills = [
    {
      title: 'Communication',
      description:
        'The ability to effectively communicate with others, both verbally and non-verbally, is essential in all aspects of life.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2ALB9_8qVvKLJFny9fG1CEAo1NbyW94CIw&s',
    },
    {
      title: 'Problem-Solving',
      description:
        'The skill to identify, analyze, and develop solutions to overcome challenges is key to personal and professional growth.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZiy7siCz8gpoMft2n4U0WCZsBYqFjU1gJA&s',
    },
    {
      title: 'Social Skills',
      description:
        'Social skills enable individuals to interact effectively with others in a variety of social situations, fostering better relationships and collaboration.',
      image:
        'https://static.startuptalky.com/2022/06/Improve-communication-and-social-skills--StartupTalky.jpg',
    },
  ]

  return (
    <Box className="dark:bg-black/40 py-20 px-4 w-full mx-auto rounded-xl">
      <Typography
        variant="h3"
        className={`text-center mb-16 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 ${poppins.className}`}
      >
        Life Skills
      </Typography>

      <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-full max-w-sm backdrop-blur-lg dark:bg-black/30 p-6 dark:border border-gray-800 rounded-xl shadow-2xl hover:shadow-purple-500/30 transition duration-300">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
              </motion.div>

              <div className="space-y-4 p-6 bg-transparent dark:text-white">
                <Typography
                  variant="h5"
                  className={`font-semibold text-2xl ${poppins.className}`}
                >
                  {skill.title}
                </Typography>
                <Typography
                  variant="body2"
                  className={`dark:text-gray-300 ${inter.className}`}
                >
                  {skill.description}
                </Typography>
                <Button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Box>
  )
}

export default LifeSkills