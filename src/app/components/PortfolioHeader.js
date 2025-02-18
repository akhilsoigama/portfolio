"use client";
import { useState } from "react";
import { motion } from "framer-motion"; 
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "../Darkmode/Darkmode";
import { Button } from "@/components/ui/button";  

const PortfolioHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="p-4 w-full fixed top-0 z-50 backdrop-blur-lg shadow-md bg-transparent"
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
        >
          Akhil
        </motion.div>

        <motion.div
          className="hidden sm:flex space-x-6 text-lg items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {["Home", "Skills", "Services", "Contact"].map((item) => (
            <motion.div
              key={item}
              className="text-black dark:text-white hover:text-blue-600 transition"
            >
              <Button variant="ghost">{item}</Button>
            </motion.div>
          ))}
          <ModeToggle />
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
            <SheetContent side="right" className="bg-white dark:bg-black w-full">
              <SheetHeader>
                <SheetTitle className="text-lg font-semibold text-black dark:text-white">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <motion.ul
                className="mt-4 flex flex-col space-y-4 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {["Home", "skills", "Services", "Contact"].map((item) => (
                  <motion.li key={item} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <Button variant="ghost">{item}</Button>
                  </motion.li>
                ))}
              </motion.ul>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default PortfolioHeader;
