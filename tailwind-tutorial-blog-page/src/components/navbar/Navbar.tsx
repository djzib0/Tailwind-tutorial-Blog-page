import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-500 text-slate-200 p-2 flex gap-1'>
      <Link href={"/"}>Home</Link>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/sizing"}>Sizing</Link>
      <Link href={"/colors"}>Colors</Link>
      <Link href={"/paddingAndMargin"}>Padding and Margin</Link>
    </nav>
  )
}

export default Navbar