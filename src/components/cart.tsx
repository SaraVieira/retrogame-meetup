import React from "react";
import { useGLTF, Html, Mask, PivotControls } from "@react-three/drei";
import { useUser } from "./useUser";

export function CartModel({ portal, ...props }: any) {
  const { nodes, materials } = useGLTF("/cart.gltf") as any;
  const { firstName, lastName, imageUrl } = useUser();

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cube018_1.geometry}
        material={materials["0"]}
      />

      <group position={[0, 0, 0.7]}>
        <Mask
          id={1}
          colorWrite={false}
          depthWrite={false}
          geometry={nodes.cube018_2.geometry}
          castShadow
          receiveShadow
          position={[0, 0, -0.2]}
        >
          <Html
            className="content-embed"
            portal={portal}
            transform
            occlude="blending"
          >
            <div
              className="relative overflow-hidden w-full h-full bg-[#679249]"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <div
                className="text-black font-bold bg-[#B8BCBF] rotate-90  top-[90px] text-xs text-center h-[20px] w-full origin-center absolute right-[-100px] z-20"
                style={{ fontFamily: "arial" }}
              >
                THIS SIDE OUT
              </div>
              <div
                className="text-black  bg-[#B8BCBF] rotate-90  top-[90px] text-xs text-center h-[20px] w-full origin-center absolute right-[100px] z-20"
                style={{ fontFamily: "arial" }}
              >
                DMG-ML-USA
              </div>
              <div
                style={{ width: "calc(100% - 40px)" }}
                className="relative left-5 h-full p-2 font-2p text-black font-bold flex flex-col gap-2 text-sm"
              >
                <img
                  src="/bg.png"
                  className="absolute h-full top-0 left-1/2 w-full max-w-7xl z-10 -translate-x-1/2"
                />
                <div className="relative z-20 flex flex-col justify-center">
                  <span className="text-center font-bold block w-full text-[14px] mb-8 mt-9 text-white">
                    Retro Games Meetup #3
                  </span>
                  <div className="flex gap-2 justify-center items-center">
                    <img src={imageUrl} alt={firstName} className="w-12" />
                    <span className="text-center">
                      {firstName} {lastName}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Html>
        </Mask>
      </group>
    </group>
  );
}

useGLTF.preload("/cart.gltf");
