import React from "react";
import { Html, Text } from "@react-three/drei";

const Placeholder = ({type}) => {
  return (
    <Html
      transform
      wrapperClass="htmlScreen"
      distanceFactor={1.17}
      position={[2, 2, 0]}
      rotation-x={-0.256}
      scale={20}
    >
      <div className="loader"></div>
    </Html>
  );
};

export default Placeholder;
