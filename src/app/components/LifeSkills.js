'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Typography, Box } from '@mui/material'
import { Button } from "@/components/ui/button";

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
    <Box className="bg-black/40 py-16 px-4 w-full mx-auto rounded-xl">
      <Typography variant="h3" className="text-center mb-12 text-4xl font-extrabold text-white">
        Life Skills
      </Typography>

      <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-xs backdrop-blur-md p-6 border rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </motion.div>

              <div className="space-y-4 p-6 bg-transparent text-white">
                <Typography variant="h5" className="font-semibold text-xl">
                  {skill.title}
                </Typography>
                <Typography variant="body2">
                  {skill.description}
                </Typography>
             
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Box>
  )
}

export default LifeSkills
