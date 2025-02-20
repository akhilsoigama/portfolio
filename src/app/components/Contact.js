'use client';

import { Button } from "@/components/ui/button";
import { TextField, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ContactInfo from './Info';

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};



export default function ContactPage() {
    return (
        <div className="w-full min-h-screen dark:bg-black/40 py-12 pb-16" id='contact'>
            <Container maxWidth="lg">
                <motion.div
                    className="flex flex-col md:flex-row gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="flex-1 p-8 rounded-lg shadow-lg bg-gradient-to-tl from-slate-700/20 via-slate-100/10 to-slate-600/35 dark:bg-black/40 backdrop-blur-md"
                        variants={formItemVariants}
                    >
                        <Typography
                            variant="h4"
                            component="h1"
                            className=" mb-6 text-black dark:text-white transition-all duration-300 transform"
                        >
                            <span className="block text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                                Get in Touch
                            </span>
                            <span className="block mt-4 text-lg md:text-xl font-light text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                                I enjoy working with dedicated creatives from businesses that make the world beautiful.
                            </span>
                            <span className="block mt-4 text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200">
                                We can do so much together. <span className="underline decoration-blue-500 dark:decoration-blue-400">Let's talk.</span>
                            </span>
                        </Typography>
                        <form className="w-full space-y-6 mt-8">
                            <motion.div variants={formItemVariants}>
                                <TextField
                                    id="name"
                                    label="Name"
                                    variant="standard"
                                    fullWidth
                                    className="dark:[&_.MuiInputBase-input]:text-white dark:[&_.MuiInputLabel-root]:text-white dark:[&_.MuiInput-underline:before]:border-white"
                                    sx={{
                                        '& .MuiInputBase-input': { color: 'black' },
                                        '& .MuiInputLabel-root': { color: 'black' },
                                        '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                                    }}
                                />
                            </motion.div>
                            <motion.div variants={formItemVariants}>
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="standard"
                                    fullWidth
                                    className="dark:[&_.MuiInputBase-input]:text-white dark:[&_.MuiInputLabel-root]:text-white dark:[&_.MuiInput-underline:before]:border-white"
                                    sx={{
                                        '& .MuiInputBase-input': { color: 'black' },
                                        '& .MuiInputLabel-root': { color: 'black' },
                                        '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                                    }}
                                />
                            </motion.div>
                            <motion.div variants={formItemVariants}>
                                <TextField
                                    id="message"
                                    label="Message"
                                    variant="standard"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    className="dark:[&_.MuiInputBase-input]:text-white dark:[&_.MuiInputLabel-root]:text-white dark:[&_.MuiInput-underline:before]:border-white"
                                    sx={{
                                        '& .MuiInputBase-input': { color: 'black' },
                                        '& .MuiInputLabel-root': { color: 'black' },
                                        '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                                    }}
                                />
                            </motion.div>
                            <motion.div
                                variants={formItemVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 dark:text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                                >
                                    Send Message
                                </Button>
                            </motion.div>
                        </form>
                    </motion.div>

                    <motion.div
                        className="flex-1 self-center"
                        variants={formItemVariants}
                    >
                        <ContactInfo />
                    </motion.div>
                </motion.div>
            </Container>
        </div>
    );
}