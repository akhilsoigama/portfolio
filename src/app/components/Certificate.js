'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { Typography } from '@mui/material';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

const Certificate = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const modalImages = [
        'IMG_20240719_080521.jpg', // SIRM
        'WhatsApp Image 2024-01-16 at 9.38.20 AM.jpeg',
        'IMG_20240719_080545.jpg',
    ];

    // Carousel logic: Change image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % modalImages.length
            );
        }, 3000); // 3 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [modalImages.length]);

    return (
        <div className="dark:bg-black/40 p-2 md:p-4 w-full h-full">
            <div className="max-w-4xl mx-auto">
                <Typography
                    variant="h4"
                    className="text-center"
                    sx={{
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 700,
                        marginBottom: "20px",
                    }}
                >
                    Certificate
                </Typography>
                <div className="mt-12 flex justify-center">
                    <div onClick={handleOpenModal} className="cursor-pointer w-60 sm:w-72 md:w-80 lg:w-96">
                        <motion.div
                            key={currentImageIndex} // Key ensures animation triggers on image change
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src={`/${modalImages[currentImageIndex]}`}
                                alt="Certificate Preview"
                                width={400}
                                height={300}
                                className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform"
                            />
                        </motion.div>
                        <p className="mt-2 text-center text-gray-700 dark:text-gray-300 text-sm">Click to view gallery</p>
                    </div>
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {showModal && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-4xl w-full relative"
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.9 }}
                            >
                                <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500">
                                    <X size={24} />
                                </button>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {modalImages.map((src, i) => (
                                        <div key={i} className="w-full">
                                            <Image
                                                src={`/${src}`}
                                                alt={`Gallery Image ${i + 1}`}
                                                width={400}
                                                height={300}
                                                className="rounded-lg shadow-md object-cover w-full h-auto"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Certificate;