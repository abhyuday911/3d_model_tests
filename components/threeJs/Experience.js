import React, { Suspense } from 'react'
import Placeholder from './Placeholder'
import Scene from './Scene'

const Experience = () => {
  return (
    <Suspense fallback={<Placeholder position-y={0} scale={[2, 3, 2]}/>}>
      <Scene />
    </Suspense>
  )
}

export default Experience