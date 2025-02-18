'use client'
import React from "react";
import PortfolioHeader from "./PortfolioHeader";
import HeroContent from "./HeroContent";
import Skills from "./Skills";

const Hero = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
            <PortfolioHeader />

            {/* <div className="absolute top-[-280px] left-0 w-full bg-blend-multiply bg-slate-700 h-screen z-10"> 
                <video
                    className="rotate-180 w-full h-full object-cover"  
                    src="/blackhole.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div> */}

            <div className="fixed top-0 left-0 w-full h-screen z-10"> 
                <video
                    className="rotate-180 w-full h-full object-cover"  
                    src="/cards-video.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            <div className="relative z-20"> 
                <HeroContent />
            </div>
            <div className="relative z-20"> 
                <Skills />
            </div>
        </div>
    );
};

export default Hero;