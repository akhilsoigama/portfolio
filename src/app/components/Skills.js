'use client';
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Grid, Typography } from "@mui/material";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", darkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", darkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", darkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", darkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", darkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-white.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", darkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", darkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", darkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Socket.io", icon: "https://cdn.worldvectorlogo.com/logos/socket-io.svg", darkIcon: "https://cdn.worldvectorlogo.com/logos/socket-io.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", darkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-white.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", darkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", darkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Vercel", icon: "https://assets.vercel.com/image/upload/v1607554385/repositories/vercel/logo.svg", darkIcon: "https://assets.vercel.com/image/upload/v1607554385/repositories/vercel/logo.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", darkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", darkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "AdonisJS", icon: "https://cdn.worldvectorlogo.com/logos/adonisjs.svg", darkIcon: "https://cdn.worldvectorlogo.com/logos/adonisjs.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", darkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Pandas", icon: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg", darkIcon: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" },
    { name: "NumPy", icon: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg", darkIcon: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
    { name: "Data Science", icon: "https://cdn-icons-png.flaticon.com/512/5408/5408783.png", darkIcon: "https://cdn-icons-png.flaticon.com/512/5408/5408783.png" }

];



const Skills = () => {
    // Animation variants for staggered entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            className="dark:bg-black/40 p-2 md:p-4 w-full h-full"
            id="skills"
        >
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
                        marginBottom: "20px",
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
                    <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                    >
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
                                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1))",
                                                borderColor: "rgba(99, 102, 241, 0.5)",
                                            },
                                        }}
                                    >
                                        <motion.img
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={40}
                                            height={40}
                                            className="object-contain dark:hidden"
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            onError={(e) => (e.currentTarget.src = "/fallback-icon.png")}
                                        />
                                        <motion.img
                                            src={skill.darkIcon}
                                            alt={skill.name}
                                            width={40}
                                            height={40}
                                            className="object-contain hidden dark:block"
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            onError={(e) => (e.currentTarget.src = "/fallback-icon.png")}
                                        />
                                        <CardContent
                                            className="p-0"
                                            sx={{
                                                fontFamily: roboto.style.fontFamily,
                                                fontWeight: 600,
                                                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                                                background: "linear-gradient(45deg, #6366f1, #a855f7)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}
                                        >
                                            {skill.name}
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