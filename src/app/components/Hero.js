'use client'
import React from "react";
import PortfolioHeader from "./PortfolioHeader";
import HeroContent from "./HeroContent";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import LifeSkills from "./LifeSkills";

const Hero = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col overflow-scroll">
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

            <div className="z-20"> 
                <HeroContent />
            </div>
            <div className="relative top-14 z-20"> 
                <Skills />
            </div>
            <div className="relative top-14 z-20"> 
                <LifeSkills/>
            </div>
            <div className="relative top-14 z-20"> 
               <Education/>
            </div>
            <div className="relative top-14 z-20"> 
                <Experience/>
            </div>
           
        </div>
    );
};

export default Hero;