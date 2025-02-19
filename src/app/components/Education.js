'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typography, Box } from "@mui/material";
import { Inter, Roboto } from "next/font/google";

// Load custom fonts
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const Education = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const educationData = [
        {
            title: "SSC",
            description: "Lions higher secondary school manavadar",
            years: "2018 - 2019",
        },
        {
            title: "HSC",
            description: "Lions higher secondary school manavadar",
            years: "2020 - 2021",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % educationData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full backdrop-blur-md dark:bg-black/40">
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: { xs: "20px", md: "50px" },
                    borderRadius: "12px",
                    width: "100%",
                    overflow: "hidden",
                    minHeight: "300px",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        marginBottom: "20px",
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 700,
                        textAlign: "center",
                    }}
                >
                    Education
                </Typography>

                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        width: "100%",
                        padding: "20px",
                        boxSizing: "border-box",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontWeight: 700,
                            marginBottom: "10px",
                        }}
                    >
                        {educationData[currentIndex].title}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontWeight: 400,
                            marginBottom: "10px",
                        }}
                    >
                        {educationData[currentIndex].description}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontStyle: "italic",
                            marginTop: "10px",
                        }}
                    >
                        {educationData[currentIndex].years}
                    </Typography>
                </motion.div>
            </Box>
        </div>
    );
};

export default Education;