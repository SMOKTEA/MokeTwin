import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Vector3 } from 'three';
import { GizmoHelper, Grid, OrbitControls, Stats } from '@react-three/drei'

export function View3d() {
    return(
        <Suspense>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={'orange'} />
                </mesh>

                <OrbitControls
                    makeDefault={true}
                    target={new Vector3(0,0,0)}
                    zoomSpeed={0.5}
                    panSpeed={1.5}
                    enablePan={false}
                    maxDistance={50}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 2.1}
                />
                <Grid cellColor="white" position={[0, -0.5, 0]} args={[10, 10]} />
            </Canvas>
        </Suspense>
    )
}