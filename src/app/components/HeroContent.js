"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Typography } from "@mui/material";
import { SparkleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const HeroContent = () => {

  return (
    <div className="w-full h-full dark:bg-black/40">
      <div className="relative w-full h-full flex flex-col md:flex-row justify-center items-center z-20 px-4 py-12 md:py-20">
        <div className="max-w-7xl mx-auto flex-1 flex flex-col md:flex-row justify-center items-center gap-8">
          <motion.div
            className="md:w-1/2 text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="mb-6"
            >
              <Button className="flex justify-center items-center px-6 py-2 border border-gray-600 rounded-lg bg-transparent hover:bg-gray-800/50 transition-colors duration-300">
                <SparkleIcon className="text-[#b49bff] mr-2 h-5 w-5" />
                <span className={`${inter.className} dark:text-white text-black`}>
                  Frontend Developer
                </span>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="mb-6"
            >
              <Typography
                variant="h3"
                component="h2"
                className={`font-extrabold sm:text-5xl md:text-6xl lg:text-7xl ${poppins.className}`}
              >
                Hello, I'm
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              className="mb-8"
            >
              <Typography
                variant="h2"
                component="h1"
                className={`font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient ${poppins.className}`}
              >
                AKHIL SOIGAMA
              </Typography>

              <motion.p
                className={`mt-4 text-lg sm:text-xl lg:text-2xl leading-relaxed ${inter.className}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                As a dedicated and passionate front-end developer with a year of
                professional experience, I specialize in creating dynamic,
                responsive, and user-friendly web applications.
              </motion.p>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Button className="px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform duration-300">
                  Get Started
                </Button>
                <div className="flex gap-4">
                  <Link
                    href="https://discord.com/channels/@me"
                    target="_blank"
                    passHref
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/10 hover:bg-white/20 p-3 rounded-lg backdrop-blur-md transition-all duration-300"
                    >
                      <img
                        src="/github-142-svgrepo-com.svg"
                        alt="GitHub"
                        width={24}
                        height={24}
                      />
                    </motion.button>
                  </Link>
                  <Link
                    href="https://www.youtube.com/@science_panther"
                    target="_blank"
                    passHref
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/10 hover:bg-white/20 p-3 rounded-lg backdrop-blur-md transition-all duration-300"
                    >
                      <img
                        src="/youtube-svgrepo-com.svg"
                        alt="YouTube"
                        width={24}
                        height={24}
                      />
                    </motion.button>
                  </Link>
                  <Link
                    href="https://www.instagram.com/akhil_soigama_/"
                    target="_blank"
                    passHref
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/10 hover:bg-white/20 p-3 rounded-lg backdrop-blur-md transition-all duration-300"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                        alt="Instagram"
                        width={24}
                        height={24}
                      />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
{/* 
          <motion.div
            className="md:w-1/2 flex justify-end items-center mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            {/* {`dark`? (
              <Image
                src="/mainIconsdark.svg"
                alt="work icon"
                width={500}
                height={500}
                className="mx-auto max-w-full h-auto"
              />
            ) : (
              <Image
                src="/mainIcons.svg"
                alt="work icon"
                width={500}
                height={500}
                className="mx-auto max-w-full h-auto"
              />
            )} 
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;