'use client';
import React from 'react';
import { Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

const hobbies = [
  {
    image: 'https://i.insider.com/60144316a7c0c4001991dde6?width=800&format=jpeg&auto=webp',
    title: 'Coding',
  },
  {
    image: 'https://thumbs.dreamstime.com/b/cricket-bat-ball-26570619.jpg',
    title: 'Playing Cricket',
  },
  {
    image: 'https://www.shutterstock.com/shutterstock/photos/429837625/display_1500/stock-vector-concept-of-sportsman-playing-kabaddi-vector-illustration-429837625.jpg',
    title: 'Playing Kabaddi',
  },
  {
    image: 'https://miro.medium.com/v2/resize:fit:960/1*a-AQ061Ce9uBvL7mrkyZ6g.jpeg',
    title: 'Poetry Writing',
  },
  {
    image: 'https://i.ytimg.com/vi/QaycZhdBols/maxresdefault.jpg',
    title: 'Solving Fibonacci Puzzles',
  },
  {
    image: 'https://media.istockphoto.com/id/502324324/photo/enjoyment.jpg?s=612x612&w=0&k=20&c=6PPFSorv0D_U7r3JQlymioQLfeqXyzCVNySJHVEOmEA=',
    title: 'Listening Music',
  },
];

const Hobbies = () => {
  return (
    <section className="dark:bg-black/40 p-2 md:p-4 w-full h-full">
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
          }}
          className="text-gray-900 dark:text-gray-100"
        >
          Hobbies & Interests
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-md dark:shadow-slate-700 bg-white dark:bg-slate-900 transition-transform hover:scale-[1.02]"
            >
              <div className="relative group w-full h-60 overflow-hidden">
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center">
                  <span className="text-white text-xl font-semibold text-center px-2">
                    {hobby.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Hobbies;
