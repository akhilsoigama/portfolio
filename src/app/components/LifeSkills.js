'use client';
import React from 'react';
import { motion } from 'framer-motion';

const LifeSkills = () => {
  const skills = [
    {
      title: 'Communication',
      description: 'Clear, confident and empathetic communication — whether with team, clients or stakeholders.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2ALB9_8qVvKLJFny9fG1CEAo1NbyW94CIw&s',
    },
    {
      title: 'Problem Solving',
      description: 'Logical thinking + creative approach = I turn complex bugs and challenges into simple solutions.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZiy7siCz8gpoMft2n4U0WCZsBYqFjU1gJA&s',
    },
    {
      title: 'Team Collaboration',
      description: 'Love working with designers, backend devs & PMs. Great at giving/receiving feedback.',
      image: 'https://static.startuptalky.com/2022/06/Improve-communication-and-social-skills--StartupTalky.jpg',
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-black/30">
      <div className="max-w-6xl mx-auto">

        {/* Simple Clean Title */}
        {/* <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-white"
        >
          Life Skills
        </motion.h2> */}
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          Coding is important, but these skills make me a better developer and human
        </p>

        {/* Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900/50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800">
                
                {/* Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Subtle bottom accent on hover */}
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeSkills;