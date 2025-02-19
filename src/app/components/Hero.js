'use client'
import React from "react";
import PortfolioHeader from "./PortfolioHeader";
import HeroContent from "./HeroContent";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import LifeSkills from "./LifeSkills";
// import SkillsSection from "./SkillSelection";

const Hero = () => {
    return (
        <div className="relative w-full no-scrollbar min-h-screen flex flex-col overflow-scroll">
            <div className="fixed top-0 left-0 w-full h-screen z-0 dark:block hidden"> 
                <video
                    className="rotate-180 w-full h-full object-cover"
                    src="/cards-video.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            <div className="z-50 fixed w-full top-0">
                <PortfolioHeader />
            </div>

            <div className="z-30 mt-10">
                <HeroContent />
            </div>

            <div className="relative z-30">
                <Skills />
                {/* <SkillsSection/> */}
            </div>

            <div className="relative z-30">
                <LifeSkills />
            </div>

            <div className="relative z-30">
                <Education />
            </div>

            <div className="relative z-30">
                <Experience />
            </div>
        </div>
    );
};

export default Hero;