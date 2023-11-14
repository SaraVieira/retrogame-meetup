import React, { useRef } from "react";
import { useGLTF, Html, Mask, PivotControls } from "@react-three/drei";
import { useUser } from "./useUser";
import { useFrame } from "@react-three/fiber";

export function CartModel({ portal, ...props }: any) {
  const cart = useRef<any>();
  const dialog = useRef<any>();
  const { nodes, materials } = useGLTF("/cart.gltf") as any;
  const { firstName, lastName, imageUrl } = useUser();

  useFrame(({ clock }) => {
    if (cart.current && cart.current.rotation.y < (Math.PI / 2) * 8) {
      cart.current.rotation.y = clock.getElapsedTime() * 12;
    }
  });

  return (
    <group ref={cart} {...props} dispose={null}>
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
                  <span className="text-center font-bold block w-full text-[14px] mb-2 text-white">
                    Retro Games Meetup #3
                  </span>
                  <div className="nes-badge mb-8 !w-[150px]">
                    <span className="is-dark flex gap-2 justify-center items-center flex-col ">
                      <img src={imageUrl} alt={firstName} className="w-12" />
                      <span className="max-w-full overflow-hidden">
                        {firstName} {lastName}
                      </span>
                    </span>
                  </div>
                  <button
                    onClick={() => dialog.current.showModal()}
                    className="nes-btn block !mt-16"
                  >
                    Share
                  </button>
                  <dialog className="nes-dialog" ref={dialog}>
                    <form method="dialog">
                      <p className="title">Share your ticket</p>
                      <section className="icon-list flex gap-2 mb-4">
                        <a
                          href={`http://twitter.com/share?text=I am going to the retro game meetup!&url=${window.location.href}`}
                          target="_blank"
                        >
                          <i className="nes-icon twitter is-large"></i>
                        </a>
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                          target="_blank"
                        >
                          <i className="nes-icon facebook is-large"></i>
                        </a>
                        <a
                          href={`https://www.reddit.com/submit?url=${window.location.href}`}
                          target="_blank"
                        >
                          <i className="nes-icon reddit is-large"></i>
                        </a>
                      </section>
                      <menu className="dialog-menu">
                        <button className="nes-btn">Close</button>
                      </menu>
                    </form>
                  </dialog>
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
