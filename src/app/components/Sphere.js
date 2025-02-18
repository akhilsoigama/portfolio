'use client';

import React, { Suspense } from 'react';
import StarBackground from './StarBackground';
import { Canvas } from '@react-three/fiber';

const Sphere = () => {
    return (
        <div className='w-full h-auto fixed inset-0 z-30'>
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
        </div>
    );
};

export default Sphere;