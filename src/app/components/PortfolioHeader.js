"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "../Darkmode/Darkmode";
import { Button } from "@/components/ui/button";
import { Inter, Oleo_Script, Roboto } from "next/font/google";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const oleo = Oleo_Script({ subsets: ["latin"], weight: ["400", "700"] });

const PortfolioHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="p-4 w-full sticky top-0 z-50 backdrop-blur-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold text-black dark:text-white"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          style={{ fontFamily: oleo.style.fontFamily }}
        >
          Akhil
        </motion.div>

        <motion.div
          className="hidden sm:flex space-x-2 text-lg items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {["Home", "Skills", "Experience", "Contact"].map((item) => (
            <motion.div
              key={item}
              className="text-black dark:text-white hover:text-blue-600 transition"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <ScrollLink
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
              >
                <Button variant="ghost" style={{ fontFamily: roboto.style.fontFamily }}>
                  {item}
                </Button>
              </ScrollLink>
            </motion.div>
          ))}
          <ModeToggle />
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="https://www.linkedin.com/in/soigama-akhil-457333251" target="_blank" rel="noopener noreferrer">
              {/* Back Glow (only visible on hover) */}
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-500/40 via-pink-500/40 to-purple-600/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* Main Button */}
              <button
                className={`
                  relative px-8 py-4 rounded-xl font-bold text-lg tracking-wider
                  bg-gradient-to-r from-rose-600 via-pink-600 to-purple-700
                 text-white border-0
                  overflow-hidden
                  shadow-2xl
                   transition-all duration-500
                hover:shadow-rose-500/40 hover:shadow-[0_0_60px_-5px]
                group
                `}
              >
                {/* Shiny moving overlay */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Button Text + Icon */}
                <span className="relative flex items-center gap-3 justify-center">
                  <span className="drop-shadow-lg">Hire Me</span>
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                  >
                    <ArrowRight />
                  </motion.span>
                </span>
              </button>

              {/* Tiny floating particles on hover */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-pink-300 rounded-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: [0, 1, 0],
                      y: [-20, -60],
                      x: Math.sin(i) * 30,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex gap-3 sm:hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="text-black dark:text-white focus:outline-none text-2xl">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </SheetTrigger>
            <SheetContent
              side="top"
              className="w-full h-[100vh] backdrop-blur-lg bg-white/90 dark:bg-black/30"
            >
              <SheetHeader>
                <SheetTitle
                  className="text-2xl font-semibold text-black dark:text-white"
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  Menu
                </SheetTitle>
              </SheetHeader>
              <motion.ul
                className="mt-10   flex flex-col space-y-6 text-2xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {["Home", "Skills", "Experience", "Contact"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index, duration: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <ScrollLink
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant="ghost"
                        className="w-full text-left"
                        style={{ fontFamily: roboto.style.fontFamily }}
                      >
                        {item}
                      </Button>
                    </ScrollLink>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                className="relative inline-block"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="https://www.linkedin.com/in/soigama-akhil-457333251/" target="_blank" rel="noopener noreferrer">
                  {/* Back Glow (only visible on hover) */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-rose-500/40 via-pink-500/40 to-purple-600/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />

                  {/* Main Button */}
                  <button
                    className={"relative px-8 py-4 rounded-xl font-bold text-lg tracking-wider bg-gradient-to-r from-rose-600 via-pink-600 to-purple-700text-white border-0 overflow-hidden shadow-2xl transition-all duration-500hover:shadow-rose-500/40 hover:shadow-[0_0_60px_-5px] group"}
                  >
                    {/* Shiny moving overlay */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    {/* Button Text + Icon */}
                    <span className="relative flex items-center gap-3 justify-center">
                      <span className="drop-shadow-lg">Hire Me</span>
                      <motion.span
                        animate={{ x: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                      >

                      </motion.span>
                    </span>
                  </button>

                  {/* Tiny floating particles on hover */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-pink-300 rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: [0, 1, 0],
                          y: [-20, -60],
                          x: Math.sin(i) * 30,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>
                </Link>
              </motion.div>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default PortfolioHeader;