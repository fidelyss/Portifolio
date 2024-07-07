import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ ismobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1.5} position={[0, 1, 0]} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={ismobile ? 0.5 : 0.74}
        position={[0, -3.25, -1.5]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  )
}

const computerCanvas = () => {
  const [ismobile, setIsmobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    setIsmobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsmobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >

      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Preload all />

      <Suspense fallback={<CanvasLoader />}>
        <Computers ismobile={ismobile} />
      </Suspense>
    </Canvas>
  )
}

export default computerCanvas;