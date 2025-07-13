'use client';
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Grid, Typography } from "@mui/material";
import { Inter, Roboto } from "next/font/google";
import { Confetti } from "@/components/magicui/confetti";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const skills = [
  { name: "HTML", icon: "/html5.svg" },
  { name: "CSS", icon: "/css3.svg" },
  { name: "JavaScript", icon: "/javascript.svg" },
  { name: "React", icon: "/react.png" },
  { name: "Next.js", icon: "/nextjs.svg" },
  { name: "Node.js", icon: "/nodejs.svg" },
  { name: "Express.js", icon: "/express.svg" },
  { name: "Redux", icon: "/redux.svg" },
  { name: "Socket.io", icon: "/socket-io.svg" },
  { name: "GitHub", icon: "/github.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "Tailwind CSS", icon: "/tailwind.svg" },
  { name: "Vercel", icon: "/vercel.svg" },
  {
    name: "Bootstrap",
    icon:
      "/bootstrap.svg"
  },
  { name: "MongoDB", icon: "/mongodb.svg" },
  {
    name: "AdonisJS",
    icon: "https://cdn.worldvectorlogo.com/logos/adonisjs.svg"
  },
  {
    name: "Python",
    icon:
      "/python.svg"
  },
  {
    name: "Pandas",
    icon: "/pandas.svg"
  },
  {
    name: "NumPy",
    icon:
      "/numpy.svg"
  },
  {
    name: "Data Science",
    icon: "https://cdn-icons-png.flaticon.com/512/5408/5408783.png"
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const confettiRef = useRef(null);

  return (
    <section className="dark:bg-black/40 p-2 md:p-4 w-full h-full" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h4"
          className="text-center text-gray-900 dark:text-white"
          sx={{
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            marginBottom: "20px"
          }}
        >
          Skills
        </Typography>

        <motion.div
          className="w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={3} justifyContent="center">
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                    transition: { duration: 0.3 },
                    borderRadius: "15px"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    className="p-4 flex items-center h-20 gap-3 backdrop-blur-lg shadow-xl border border-indigo-500/30 rounded-lg w-full"
                    sx={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1))",
                        borderColor: "rgba(99, 102, 241, 0.5)"
                      }
                    }}
                  >
                    <motion.img
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="object-contain dark:invert"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                    <CardContent
                      className="p-0"
                      sx={{
                        fontFamily: roboto.style.fontFamily,
                        fontWeight: 600,
                        fontSize: {
                          xs: "1rem",
                          sm: "1.1rem",
                          md: "1.25rem"
                        },
                        background: "linear-gradient(45deg, #6366f1, #a855f7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}
                    >
                      {skill.name}
                      <Confetti
                        ref={confettiRef}
                        className="absolute left-0 top-0 z-0 size-full"
                        onMouseEnter={() => {
                          confettiRef.current?.fire({});
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
