import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


import CanvasLoader from "../Loader";

const Computers = ({ response }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  console.log(response)
  return (
    <mesh>
      <hemisphereLight intensity={1.5} position={[0, 1, 0]} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={
          response == 'smallMobile' ? 0.3 :
            response == 'middleMobile' ? 0.4 :
              response == 'bigMobile' ? 0.5 :
                response == 'tabletsInPortraitMode' ? 0.7 :
                  response == 'landscapeTabletsAndSmallDesktops' ? 0.7 :
                    response == 'commonNotebook' ? 0.74 : 0


        }
        position={
          response == 'smallMobile' ? [0, 0.4, -0.70] :
            response == 'middleMobile' ? [0, -0.15, -0.70] :
              response == 'bigMobile' ? [0, -1, -0.70] :
                response == 'tabletsInPortraitMode' ? [0, -3.1, -1.5] :
                  response == 'landscapeTabletsAndSmallDesktops' ? [0, -2.70, -1.5] :
                    response == 'commonNotebook' ? [0, -2.70, -1.5] : [0, 0, 0]

        }
        rotation={[0, 0, 0]}
      />
    </mesh>
  )
}

const computerCanvas = () => {
  const [response, setResponse] = useState('');
  useEffect(() => {
    setResponse('commonNotebook')
    const handleMediaQueryChange = () => {
      if (window.matchMedia('(min-width: 320px) and (max-width: 480px)').matches) {
        setResponse('smallMobile');
      } else if (window.matchMedia('(min-width: 481px) and (max-width: 640px)').matches) {
        setResponse('middleMobile');
      } else if (window.matchMedia('(min-width: 641px) and (max-width: 768px)').matches) {
        setResponse('bigMobile');
      } else if (window.matchMedia('(min-width: 769px) and (max-width: 1024px)').matches) {
        setResponse('tabletsInPortraitMode');
      } else if (window.matchMedia('(min-width: 1025px) and (max-width: 1280px)').matches) {
        setResponse('landscapeTabletsAndSmallDesktops');
      } else if (window.matchMedia('(min-width: 1281px) and (max-width: 1440px)').matches) {
        setResponse('commonNotebook');
      } else if (window.matchMedia('(min-width: 1441px) and (max-width: 1920px)').matches) {
        setResponse('largeDesktops');
      }
    }
    window.addEventListener('resize', handleMediaQueryChange);
    return () => {
      window.removeEventListener('resize', handleMediaQueryChange);
    }

  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: response == 'tabletsInPortraitMode' ? [20, 15, 5] : [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >

      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Preload all />

      <Suspense fallback={<CanvasLoader />}>
        <Computers response={response} />
      </Suspense>
    </Canvas>
  )
}

export default computerCanvas;