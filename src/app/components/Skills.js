'use client';
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Grid, Typography } from "@mui/material";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const skills = [
    { name: "HTML", icon: "/html.png", darkIcon: "/html.png" },
    { name: "CSS", icon: "/css.png", darkIcon: "/css.png" },
    { name: "JavaScript", icon: "/js.png", darkIcon: "/js.png" },
    { name: "React", icon: "/react.png", darkIcon: "/react.png" },
    { name: "Next.js", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktU9SiaDQGVr_kz8OL4Bzc7UT7UGnt_Yg_w&s", darkIcon: "https://img.icons8.com/fluent-systems-filled/512/FFFFFF/nextjs.png" },
    { name: "Node.js", icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png", darkIcon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
    { name: "Express.js", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDneBGnQL7E9hZDwztRO1GfQcCj1FqRrhBw&s", darkIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDneBGnQL7E9hZDwztRO1GfQcCj1FqRrhBw&s" },
    { name: "Redux", icon: "/redux.png", darkIcon: "/redux.png" },
    { name: "Socket.io", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1024px-Socket-io.svg.png", darkIcon: "https://static-00.iconduck.com/assets.00/socket-io-icon-512x511-xjp7kzx6.png" },
    { name: "GitHub", icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png", darkIcon: "/gitwhite.png" },
    { name: "Git", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png", darkIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" },
    { name: "Tailwind CSS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5tqU_Yrl1xJdcTC1JMLaPEy_El6FvAvlYDdhfsP1QjIAWO0ZrQIf8Y-YyP7wg6k1THo&usqp=CAU", darkIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" },
    { name: "Vercel", icon: "https://develop.finki.ukim.mk/projects/Caessino/export/87614a539b5a6d95f9aee8012bfdef4edeeb2fb5/public/favicon-vercel.ico", darkIcon: "https://develop.finki.ukim.mk/projects/Caessino/export/87614a539b5a6d95f9aee8012bfdef4edeeb2fb5/public/favicon-vercel.ico" },
    { name: "Bootstrap", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png", darkIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" },
    { name: "Laravel", icon: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg", darkIcon: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" },
    { name: "MongoDB", icon: "https://www.svgrepo.com/show/331488/mongodb.svg", darkIcon: "https://www.svgrepo.com/show/331488/mongodb.svg" },
    { name: "MySQL", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png", darkIcon: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png" },
    { name: "AdonisJS", icon: "https://cdn.worldvectorlogo.com/logos/adonisjs.svg", darkIcon: "https://cdn.worldvectorlogo.com/logos/adonisjs.svg" },  
    { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", darkIcon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
    { name: "Pandas", icon: "https://pandas.pydata.org/static/img/pandas_mark.svg", darkIcon: "https://pandas.pydata.org/static/img/pandas_mark.svg" },
    { name: "NumPy", icon: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg", darkIcon: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
    { name: "Data Preprocessing", icon: "https://miro.medium.com/v2/resize:fit:948/0*brUcLeO-R7xlmF6t", darkIcon: "https://miro.medium.com/v2/resize:fit:948/0*brUcLeO-R7xlmF6t" },
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
                                        borderRadius:"15px"
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