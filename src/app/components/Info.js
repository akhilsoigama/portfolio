'use client';
import { Typography } from "@mui/material"; 
import { Envelope, Phone, MapPin } from "phosphor-react"; 

export default function ContactInfo() {
  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <div className="flex items-center justify-center border p-4 rounded-lg bg-gradient-to-tr from-white to-slate-400/60 dark:from-gray-800 dark:to-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300 space-x-4">
        <Phone className="w-6 h-6 text-blue-500 dark:text-blue-400" />
        <Typography className="text-gray-700 dark:text-gray-300">
          (+91) 951 0159 304
        </Typography>
      </div>

      <div className="flex items-center justify-center border p-4 rounded-lg bg-gradient-to-tr from-white to-slate-400/60 dark:from-gray-800 dark:to-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300 space-x-4">
        <Envelope className="w-6 h-6 text-blue-500 dark:text-blue-400" />
        <Typography className="text-gray-700 dark:text-gray-300">
          akhilsoigama@gmail.com
        </Typography>
      </div>

      <div className="flex items-center justify-center border p-4 rounded-lg bg-gradient-to-tr from-white to-slate-400/60 dark:from-gray-800 dark:to-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300 space-x-4">
        <MapPin className="w-6 h-6 text-blue-500 dark:text-blue-400" />
        <Typography className="text-gray-700 dark:text-gray-300">
          Sultanabaad, Junagadh
        </Typography>
      </div>
    </div>
  );
}