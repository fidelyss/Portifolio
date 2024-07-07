import React from 'react'
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div className='flex-col items-center justify-center'>
        <div className='canvas-loader h-[80px] w-[100px]'></div>
        <div>
          <p
            style={{
              fontSize: 14,
              color: "#F1F1F1",
              fontWeight: 800,
              marginTop: 40,
              left:-15,
              position:'relative'
            }}
          >{progress.toFixed(2)}%</p>
        </div>
      </div>
    </Html>
  )
}

export default CanvasLoader



