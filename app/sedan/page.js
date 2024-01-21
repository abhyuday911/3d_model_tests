"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Experience from "@/components/threeJs/Experience";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <section className="h-screen">
        <Link href="/" className='text-blue-500 text-4xl absolute z-20 m-4'>Back...</Link>
        <Canvas>
          <PerspectiveCamera
            makeDefault  // This makes this camera the default camera for the scene
            position={[-4, 2.5, 19]}  // Set the initial position of the camera
            rotation={[0, 0, 0]}   // Set the initial rotation of the camera (optional)
          />
          <Experience/>
        </Canvas>
      </section>
    </div>
  );
};

export default Page;