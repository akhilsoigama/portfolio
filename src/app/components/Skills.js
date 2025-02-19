'use client';
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Grid, Typography } from "@mui/material";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const skills = [
    { name: "HTML", icon: "/html.png" },
    { name: "CSS", icon: "/css.png" },
    { name: "Java Script", icon: "/js.png" },
    { name: "React", icon: "/react.png" },
    { name: "Next.js", icon: "/next.png" },
    { name: "Redux", icon: "/redux.png" },
    { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" },
];

const Skills = () => {
    return (
        <div className="dark:bg-black/40 p-4 w-full h-full">
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
                    Frontend Skills
                </Typography>
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    marginTop={5}
                    sx={{ padding: { xs: "10px", md: "20px" } }}
                >
                    {skills.map((skill, index) => (
                        <Grid item key={index} xs={8} sm={4} md={3} lg={3}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Card
                                    className="p-4 flex items-center justify-center gap-2 backdrop-blur-md shadow-lg"
                                    sx={{
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                        borderRadius: "12px",
                                        transition: "background-color 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                                        },
                                    }}
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        width={40}
                                        height={40}
                                        className="object-cover "
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
        </div>
    );
};

export default Skills;