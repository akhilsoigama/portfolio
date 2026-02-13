"use client";
import { Button } from "@/components/ui/button";
import { Typography, Tooltip } from "@mui/material";
import { SparkleIcon } from "lucide-react";
import Link from "next/link";
import { Inter, Poppins } from "next/font/google";
import { FadeIn, HoverScale, ScaleUp } from "../motion/Motion";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import ProfileImage from "./ProfileImage";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const HeroContent = () => {
  return (
    <section className="w-full h-full dark:bg-black/40" id="home">
      <div className="relative w-full h-full flex flex-col md:flex-row justify-start items-center z-20 px-4 py-12 md:py-20">
        <div className="max-w-7xl mx-auto flex-1 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          {/* Left Text Content */}
          <div className="md:w-1/2 text-left">
            <FadeIn delay={0.3}>
              <div className="mb-6">
                <Button className="flex justify-center items-center px-6 py-2 border border-gray-600 rounded-lg bg-transparent dark:hover:bg-gray-800/50 hover:bg-slate-200 transition-colors duration-300">
                  <SparkleIcon className="text-[#b49bff] mr-2 h-5 w-5" />
                  <span className={`${inter.className} dark:text-white text-black`}>
                    Full-Stack Developer
                  </span>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mb-6">
                <Typography
                  variant="h3"
                  component="h2"
                  className={`font-extrabold sm:text-5xl md:text-6xl lg:text-7xl ${poppins.className}`}
                >
                  Hello, I'm
                </Typography>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mb-4">
                <Typography
                  variant="h2"
                  component="h1"
                  className={`font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient ${poppins.className}`}
                >
                  <TypingAnimation>
                    AKHIL SOIGAMA
                  </TypingAnimation>
                </Typography>

                <FadeIn delay={0.7}>
                  <p className={`mt-2 text-lg sm:text-xl lg:text-xl leading-relaxed ${inter.className}`}>
                    I am a Full-Stack Web Developer with strong expertise in building scalable, high-performance, and user-friendly web applications. I specialize in developing end-to-end solutions using modern technologies such as React, Vite, Next.js, Tailwind CSS, AdonisJS, Node.js, and MongoDB/PostgreSQL. With a deep understanding of both frontend and backend architectures, I create applications that are fast, secure, and optimized for real-world use.
                  </p>
                </FadeIn>

                <ScaleUp delay={1.5}>
                  <div className="mt-4 flex flex-col sm:flex-row gap-4">
                    <div className="flex gap-4">
                      <Tooltip title="GitHub" arrow>
                        <Link href="https://github.com" target="_blank" passHref>
                          <HoverScale>
                            <button className="dark:bg-white bg-slate-800/20 hover:bg-slate-200 dark:hover:bg-slate-400 p-3 rounded-lg backdrop-blur-md transition-all duration-300">
                              <img src="/github-142-svgrepo-com.svg" alt="GitHub" width={24} height={24} />
                            </button>
                          </HoverScale>
                        </Link>
                      </Tooltip>

                      <Tooltip title="YouTube" arrow>
                        <Link href="https://www.youtube.com/@science_panther" target="_blank" passHref>
                          <HoverScale>
                            <button className="dark:bg-white bg-slate-800/20 hover:bg-slate-200 dark:hover:bg-slate-400 p-3 rounded-lg backdrop-blur-md transition-all duration-300">
                              <img src="/youtube-svgrepo-com.svg" alt="YouTube" width={24} height={24} />
                            </button>
                          </HoverScale>
                        </Link>
                      </Tooltip>

                      <Tooltip title="Instagram" arrow>
                        <Link href="https://www.instagram.com/akhil_soigama_/" target="_blank" passHref>
                          <HoverScale>
                            <button className="dark:bg-white bg-slate-800/20 hover:bg-slate-200 dark:hover:bg-slate-400 p-3 rounded-lg backdrop-blur-md transition-all duration-300">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" width={24} height={24} />
                            </button>
                          </HoverScale>
                        </Link>
                      </Tooltip>
                    </div>
                  </div>
                </ScaleUp>
              </div>
            </FadeIn>
          </div>
          
          <div className="md:w-1/2 flex justify-center items-center">
            <FadeIn delay={0.5} direction="right">
              <div className="relative flex justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse" />
                
                <div className="flex justify-center items-center">
                  <ProfileImage />
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full blur-xl animate-float"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-pink-500/30 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}} />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;