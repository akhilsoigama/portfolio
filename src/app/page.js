'use client'
import Hero from "./components/Hero";
import StarBackground from "./components/StarBackground";
import StarryBackground from "./components/StarBackground";

import { useState, useEffect } from 'react';
export default function Home() {
  return (
    <div className="w-full h-screen no-scrollbar ">
      {/* <Sphere/> */}
      {/* <StarryBackground/> */}
     
      <Hero />
      <StarBackground/>
    </div>
  );
}
