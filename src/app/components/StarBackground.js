// StarBackground.js (Corrected)
'use client'
import { PointMaterial, Points } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { random } from 'maath'
import React, { useRef, useState } from 'react'

const StarBackground = (props) => {
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }))
    useFrame(() => {
        if (ref.current) { // Check if ref.current exists
          ref.current.rotation.x += 0.01; // Just a simple rotation
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color='#fff'
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false} // Corrected: depthWrite, not dethWrite
                >

                </PointMaterial>
            </Points>
        </group>
    )
}

export default StarBackground