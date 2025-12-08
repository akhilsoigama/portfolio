'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Sparkles } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'SULOK DIGITAL SOLUTION PRIVATE LIMITED',
      duration: 'March 2024 - March 2025',
      description:
        'Built responsive, high-performance web applications using React, Tailwind, and modern tooling. Collaborated with designers and backend teams to deliver pixel-perfect, interactive UIs that scaled across devices.',
      image: 'https://images.stockcake.com/public/5/e/6/5e6fb906-70e0-4ec9-9df9-fb564a8fec74_large/coder-at-work-stockcake.jpg',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'Hospital Management System',
      company: 'SULOK DIGITAL SOLUTION PRIVATE LIMITED',
      duration: 'March 2025 - July 2025',
      description:
        'Led frontend development of a full-scale HMS using React + Vite and AdonisJS. Designed intuitive dashboards for doctors, patients, and admins with real-time updates and offline support.',
      image: './hospital.webp',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Education Management System (PWA)',
      company: 'Personal Project • Full-Stack',
      duration: 'Aug 2025 - Present',
      description:
        'Developing a next-gen offline-first Education ERP as a Progressive Web App. Features include real-time sync, biometric attendance, fee management, and installable mobile experience.',
      image: './education.png',
      gradient: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-black/40 dark:to-gray-900/30">
      {/* Background Glows – Softened for light mode */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200/30 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200/30 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title – Better contrast */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400">
            Experience
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Crafting digital magic since 2024</p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line – Softer for light mode */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-indigo-300/50 to-transparent dark:via-purple-500/30 hidden lg:block">
            <div className="absolute inset-0 w-full bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-400 blur-sm animate-pulse dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500" />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative flex items-center justify-center mb-20 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col`}
            >
              {/* Timeline Dot – Better glow */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-cyan-400 dark:to-purple-500 rounded-full ring-8 ring-white/50 dark:ring-black/50 shadow-[0_0_20px_rgba(99,102,241,0.4)] dark:shadow-[0_0_20px_rgba(168,85,247,0.6)] z-20 hidden lg:block" />

              {/* Experience Card */}
              <div
                className={`
                  relative w-full max-w-2xl group
                  ${index % 2 === 0 ? 'lg:mr-auto lg:pr-20' : 'lg:ml-auto lg:pl-20'}
                `}
              >
                {/* Featured Badge */}
                {exp.featured && (
                  <div className="absolute -top-4 -right-4 z-30">
                    <span className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      <Sparkles className="w-4 h-4" /> Featured Project
                    </span>
                  </div>
                )}

                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-2xl"
                >
                  {/* Gradient Border Glow – Subtle */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-30 transition duration-700`} />

                  {/* Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800/70 dark:from-black/80 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative p-8 space-y-5">
                    <div className="flex items-center gap-3 text-indigo-600 dark:text-cyan-400">
                      <Briefcase className="w-6 h-6" />
                      <span className="text-sm font-medium uppercase tracking-wider">{exp.company}</span>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-cyan-400 dark:group-hover:to-pink-400 transition-all duration-500">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-2 text-purple-500 dark:text-purple-300">
                      <Calendar className="w-5 h-5" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      {exp.description}
                    </p>

                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute bottom-0 w-1 h-1 bg-indigo-400 dark:bg-cyan-400 rounded-full"
                          initial={{ y: 100, x: (i - 2) * 90 }}
                          animate={{ y: -100 }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "linear",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;