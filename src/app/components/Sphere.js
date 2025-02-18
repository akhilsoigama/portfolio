'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import StarBackground from './StarBackground';


const Sphere = () => {
  return (
    <div className="w-full h-auto fixed inset-0 z-30">
      <Canvas camera={{position:[0,0,1]}}>
        {/* <Suspense fallback={null}>
          <StarBackground />
        </Suspense> */}
      </Canvas>
    </div>
  );
};

export default Sphere;
