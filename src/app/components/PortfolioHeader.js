"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
            className="text-white hover:text-blue-600 transition"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href={"https://fgtu.in/DSU1363"} target="_blank">  <button className="bg-rose-500 transition-colors duration-300 hover:bg-rose-700 px-5 py-2  rounded-sm">Hire Me</button></Link>
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
                    transition={{ delay: 0.2 * index ,duration:0.2}}
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
                className="flex mt-3 justify-center text-white hover:text-blue-600 transition"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={"https://fgtu.in/DSU1363"} target="_blank">  <button className="bg-rose-500 transition-colors duration-300 hover:bg-rose-700 px-5 py-2 rounded-sm">Hire Me</button></Link>
              </motion.div>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default PortfolioHeader;