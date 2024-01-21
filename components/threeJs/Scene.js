export function Model(props) {}

useGLTF.preload("//car_Gltf_com.gltf");

import React from "react";
import { Environment, PresentationControls, useGLTF } from "@react-three/drei";

const scene = (props) => {
  const { nodes, materials } = useGLTF("/car.gltf");
  return (
    <>
      <PresentationControls >
        <Environment preset="city" />

        <group {...props} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.frony_bumper017.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.headlight_cover002.geometry}
            material={materials["hd light glass"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.hood012.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.led.geometry}
            material={materials["1 led headlight.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.main_rear_led_.geometry}
            material={materials["1 led rear red"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.main_rear_led_cover.geometry}
            material={materials["1 glass.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane015.geometry}
            material={materials["m black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane016.geometry}
            material={materials["wt light"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane017.geometry}
            material={materials["1 led.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane018.geometry}
            material={materials.chrome}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019.geometry}
            material={materials["wt light"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021.geometry}
            material={materials["m black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane024.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane025.geometry}
            material={materials["m black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane028.geometry}
            material={materials["m black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane029.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane030.geometry}
            material={materials["body.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane040.geometry}
            material={materials.chrome}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane046.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane047.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane057.geometry}
            material={materials["1 glass.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane059.geometry}
            material={materials["1 led rear red"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane064.geometry}
            material={materials["1 gloss black.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane066.geometry}
            material={materials["wt light"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane067.geometry}
            material={materials["1 dark chrome"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane069.geometry}
            material={materials["back light glass"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tube064.geometry}
            material={materials["m black"]}
          />
          <group position={[0, 0.885, 4.206]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle004.geometry}
              material={materials["m black"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle004_1.geometry}
              material={materials.chrome}
            />
          </group>
          <group position={[0, 0.879, -3.744]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle005.geometry}
              material={materials["m black"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle005_1.geometry}
              material={materials.chrome}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006.geometry}
            material={materials["fog light glass"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.frony_bumper020.geometry}
            material={materials["wt light"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.frony_bumper001.geometry}
            material={materials["wt light"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.hood_cut002.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.frony_bumper014.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.frony_bumper015.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.frony_bumper016.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.frony_bumper021.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane012.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane023.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane031.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane034.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane035.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane039.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane041.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane043.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane044.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            receiveShadow
            castShadow
            geometry={nodes.Plane062.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane063.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane065.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.main_rear_led_housing.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane058.geometry}
            material={materials["gloss black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tube064001.geometry}
            material={materials["m black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.WheelFtL003.geometry}
            material={materials.sidewall_bk}
            position={[2.058, 0.921, 4.211]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.WheelFtL002.geometry}
            material={materials.sidewall_bk}
            position={[2.064, 0.918, -3.737]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane041_1.geometry}
            material={materials.chrome}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane041_2.geometry}
            material={materials.turbo}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle006.geometry}
            material={materials["Glass for SquareH"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle006_1.geometry}
            material={materials.chrome}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane052.geometry}
            material={materials["1 matte black rim"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane052_1.geometry}
            material={materials["gloss black"]}
          />
        </group>
      </PresentationControls>
    </>
  );
};

export default scene;
