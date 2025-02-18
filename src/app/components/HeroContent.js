"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Typography } from "@mui/material";
import { SparkleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="relative top-14 w-full h-full bg-black/40">
      <div className="relative w-full h-full flex flex-col md:flex-row justify-between items-center z-20 px-4 py-12 md:py-20">
        <div className="max-w-7xl mx-auto flex-1 flex flex-col md:flex-row justify-between items-center">
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
              className="mb-4"
            >
              <Button className="flex justify-center items-center px-6 py-2 border border-gray-600 rounded-lg bg-transparent hover:bg-gray-800 transition-colors duration-300 text-white">
                <SparkleIcon className="text-[#b49bff] mr-2 h-5 w-5" />
                Frontend Developer
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="mb-4"
            >
              <Typography
                variant="h3"
                component="h2"
                className="font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Hello, I'm
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              className="mb-6"
            >
              <Typography
                variant="h2"
                component="h1"
                className="font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient"
              >
                AKHIL SOIGAMA
              </Typography>

              <motion.p
                className="mt-2 text-gray-400 text-lg sm:text-xl lg:text-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                As a dedicated and passionate front-end developer with a year of professional experience, I specialize in creating dynamic, responsive, and user-friendly web applications.
              </motion.p>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
                className="mt-8"
              >
                <Button className="px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform duration-300">
                  Get Started
                </Button>
                <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
                className="flex gap-4"
                >
                <Link href="https://discord.com/channels/@me" target="_blank" passHref>
                  <button className="bg-white hover:scale-105 p-2 rounded-lg  mt-4">
                    <img
                      src="/github-142-svgrepo-com.svg"
                      alt="GitHub"
                      width={24}
                      height={24}
                      className="hover:scale-105"

                    />
                  </button>
                </Link>
                <Link href="https://www.youtube.com/@science_panther" target="_blank" passHref>
                  <button className=" bg-white hover:scale-105 p-2 rounded-lg  mt-4">
                    <img
                      src="/youtube-svgrepo-com.svg"
                      alt="GitHub"
                      width={24}
                      height={24}
                      className="hover:scale-105"
                    />
                  </button>
                </Link>
                <Link href="https://www.instagram.com/akhil_soigama_/" target="_blank" passHref>
                  <button className=" bg-white p-2 rounded-lg hover:scale-105 mt-4">
                    <img
                      src="https://banner2.cleanpng.com/20240112/pil/transparent-instagram-logo-colorful-camera-with-red-light-on-black-1710926114455.webp"
                      alt="GitHub"
                      width={24}
                      height={24}
                      className="hover:scale-105"

                    />
                  </button>
                </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-end items-center mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <Image
              src="/mainIconsdark.svg"
              alt="work icon"
              width={400}
              height={400}
              className="mx-auto max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
