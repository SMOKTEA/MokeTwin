import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Grid } from '@react-three/drei'

export const View3d = () => {
    return(
        <>
            <Canvas>
                <Grid position={[0, 0, 0]} cellColor={'#6f6f6f'} cellSize={0.5} />
            </Canvas>
        </>
    )
}