import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link href="/sedan" className='text-blue-500 text-7xl'>Lets gooo...</Link>
    </div>
  )
}

export default page