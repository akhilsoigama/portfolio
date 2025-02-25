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
    { name: "Java Script", icon: "/js.png", darkIcon: "/js.png" },
    { name: "React", icon: "/react.png", darkIcon: "/react.png" },
    { name: "Next.js", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktU9SiaDQGVr_kz8OL4Bzc7UT7UGnt_Yg_w&s", darkIcon: "https://img.icons8.com/fluent-systems-filled/512/FFFFFF/nextjs.png" },
    { name: "Redux", icon: "/redux.png", darkIcon: "/redux.png" },
    { name: "Socket.io", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1024px-Socket-io.svg.png", darkIcon: "https://static-00.iconduck.com/assets.00/socket-io-icon-512x511-xjp7kzx6.png" },
    { name: "gitHub", icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png", darkIcon: "/gitwhite.png" },
    { name: "git", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png", darkIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" },
    { name: "Tailwind CSS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5tqU_Yrl1xJdcTC1JMLaPEy_El6FvAvlYDdhfsP1QjIAWO0ZrQIf8Y-YyP7wg6k1THo&usqp=CAU", darkIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" },
    { name: "Vercel", icon: "https://develop.finki.ukim.mk/projects/Caessino/export/87614a539b5a6d95f9aee8012bfdef4edeeb2fb5/public/favicon-vercel.ico", darkIcon: "https://develop.finki.ukim.mk/projects/Caessino/export/87614a539b5a6d95f9aee8012bfdef4edeeb2fb5/public/favicon-vercel.ico" },
    { name: "Boostrap", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png", darkIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" },


];

const Skills = () => {
    return (
        <section className="dark:bg-black/40 p-2 md:p-4 w-full h-full" id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Typography
                    variant="h4"
                    className="text-center "
                    sx={{
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 700,
                        marginBottom: "20px",
                    }}
                >
                    Skills
                </Typography>
                <Grid 
                    spacing={3}
                    marginTop={5}
                    className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                    sx={{ padding: { xs: "2px", md: "2px" } }}
                >
                    {skills.map((skill, index) => (
                        <Grid item key={index} xs={8} sm={4} md={3} lg={3} >
                            <motion.div
                                whileHover={{ scale: 0.9 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Card
                                    className="p-4 flex w-58 gap-2 backdrop-blur-md shadow-lg"
                                    sx={{
                                        backgroundColor: "#000",
                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                        borderRadius: "12px",
                                        transition: "background-color 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "#000",
                                        },
                                    }}
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        width={40}
                                        height={40}
                                        className="object-cover dark:hidden"
                                    />
                                    <img
                                        src={skill.darkIcon}
                                        alt={skill.name}
                                        width={40}
                                        height={40}
                                        className="object-cover hidden dark:block "
                                    />
                                    <CardContent
                                        className="p-0 text-2xl"
                                        sx={{
                                            fontFamily: roboto.style.fontFamily,
                                            fontWeight: 500,
                                            color: "#fff",
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
        </section>
    );
};

export default Skills;