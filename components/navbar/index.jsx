import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-4'>
      <Link href={'/courses'}>Courses</Link>
      <Link href={'/about'}>about project</Link>
      <Link href={'/contact'}>contact</Link>
    </div>
  )
}

export default Navbar