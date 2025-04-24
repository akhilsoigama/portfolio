'use client';
import React from 'react';
import { Typography, Container, Box, Divider } from '@mui/material';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';
import {
    UserCheck,
    CalendarDays,
    MapPin,
    FileText,
    Mic,
    Users,
} from 'lucide-react';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

const SeminarAttended = () => {
    return (
        <section className="dark:bg-black/40 p-2 md:p-4 w-full h-full">
            <Container maxWidth="md">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Typography variant="h4" align="center">
                            Seminar Attended
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Card
                            className="button-container backdrop-blur-lg border border-indigo-300/30 shadow-2xl rounded-2xl mt-8"
                            sx={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1))',
                                padding: 3,
                            }}
                        >
                            <CardContent className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Box className="flex items-center gap-3">
                                        <UserCheck className="text-indigo-600 dark:text-indigo-400" />
                                        <Typography variant="h6" fontWeight="bold" className="text-indigo-600 dark:text-indigo-400">
                                            Campus to Corporate
                                        </Typography>
                                    </Box>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Box className="flex items-center gap-3 text-gray-800 dark:text-gray-300">
                                        <CalendarDays size={20} />
                                        <span>3 Days in March 2023</span>
                                    </Box>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <Box className="flex items-center gap-3 text-gray-800 dark:text-gray-300">
                                        <MapPin size={20} />
                                        <span>Dr. Subhash Education Campus</span>
                                    </Box>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <Box className="flex items-center gap-3 text-gray-800 dark:text-gray-300">
                                        <Mic size={20} />
                                        <span>Conducted by Mr. Paresh Bhatt</span>
                                    </Box>
                                </motion.div>

                                <Divider className="my-4" />

                                <Box>
                                    <Typography variant="body1" className="text-gray-700 dark:text-gray-200 mb-2">
                                        In this seminar, I learned the following professional skills:
                                    </Typography>

                                    <motion.ul
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-300"
                                    >
                                        <motion.li
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex items-center gap-2"
                                        >
                                            <Mic size={16} /> Communication Skills
                                        </motion.li>
                                        <motion.li
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="flex items-center gap-2"
                                        >
                                            <Users size={16} /> Group Discussion
                                        </motion.li>
                                        <motion.li
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="flex items-center gap-2"
                                        >
                                            <FileText size={16} /> Resume Writing
                                        </motion.li>
                                    </motion.ul>
                                </Box>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
};

export default SeminarAttended;
