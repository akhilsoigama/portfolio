'use client';
import React, { useState, useEffect } from 'react';
import { Loader2, Sparkles, Camera, ExternalLink } from 'lucide-react';

const ProfileImage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative group flex justify-center items-center">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"></div>
      
      <div className="relative flex justify-center items-center">
        <div 
          className={`
            relative rounded-full 
            bg-gradient-to-br from-blue-200 via-purple-100 to-pink-100 
            dark:from-blue-900/40 dark:via-purple-900/40 dark:to-pink-900/40
            p-[3px] shadow-2xl
            transition-all duration-500 ease-out
            ${isHovered ? 'scale-105' : 'scale-100'}
            ring-2 ring-white/50 dark:ring-gray-800/50
            group-hover:ring-4 group-hover:ring-blue-300/50 dark:group-hover:ring-blue-500/30
            w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          
          <div className="relative rounded-full overflow-hidden border-4 border-white/80 dark:border-gray-900/80 backdrop-blur-sm w-full h-full">
            {isLoading ? (
              <div className="w-full h-full flex items-center justify-center">
                <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />
              </div>
            ) : (
              <>
                <img
                  src="./akhil.png"
                  alt="Akhil - Portfolio"
                  className={`
                    w-full h-full object-cover transition-all duration-700 ease-out
                    ${isHovered ? 'scale-110' : 'scale-100'}
                    ${imageLoaded ? 'opacity-100' : 'opacity-0'}
                  `}
                  onLoad={handleImageLoad}
                />
                
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
                  </div>
                )}
              </>
            )}
          </div>         
        </div>

        <div className={`
          absolute inset-0 rounded-full border-2 border-blue-400/30
          animate-ping opacity-0 group-hover:opacity-100
          w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80
        `}></div>
      </div>

      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-20">
        <div className="flex items-center gap-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 animate-pulse">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="font-bold text-gray-800 dark:text-gray-200">Akhil Soigama</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">• Full-Stack Developer</span>
        </div>
      </div>

      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
        <div className="bg-gray-900 dark:bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-xl whitespace-nowrap animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[length:200%_100%]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            Available for opportunities
          </div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-800 rotate-45"></div>
        </div>
      </div>

      <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full blur-xl opacity-60 animate-float"></div>
      <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-purple-500/30 to-pink-500/30 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-xl opacity-60 animate-float" style={{animationDelay: '1s'}}></div>
    </div>
  );
};

export default ProfileImage;