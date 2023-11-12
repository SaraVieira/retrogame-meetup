"use client";

import { Model } from "@/components/Model";
import { CartModel } from "@/components/cart";
import {
  OrbitControls,
  Environment,
  OrthographicCamera,
} from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Example() {
  const container = useRef() as any;
  const domContent = useRef() as any;
  return (
    <div ref={container} className="content-container">
      {/* Container for the HTML view */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
        ref={domContent}
      />
      <Canvas eventSource={container}>
        <Viewer portal={domContent} />
      </Canvas>
    </div>
  );
}

const Viewer = ({ portal }: any) => {
  return (
    <>
      <OrthographicCamera />
      <Environment preset="night" />
      <ambientLight />
      <Model position={[0, -1.2, 2.8]} />
      <Model position={[-3.56, -1.2, 42.8]} />
      <Model position={[3.55, -1.2, -37.1]} />
      <OrbitControls
        enablePan={false}
        minAzimuthAngle={-Math.PI / 8}
        maxAzimuthAngle={Math.PI / 8}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
      />
      <CartModel
        scale={0.18}
        castShadow
        position={[0, -0.3, 3]}
        portal={portal}
      />
    </>
  );
};
