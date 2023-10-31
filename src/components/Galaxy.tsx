"use client";

import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from "react";

export default function Galaxy() {
    const groupRef = useRef();
    const scene = useGLTF('/assets/galaxy.gltf').scene;

    useEffect(() => {
        scene.translateX(-1.45);
        scene.translateZ(1.45);
        scene.translateY(-1.45);
    }, [scene]);

    return (
        <group ref={groupRef as any} dispose={null}>
            <primitive object={scene} material={null} />
        </group>
    )

}