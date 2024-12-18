import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const BlogNavbar = () => {
  return (
    <nav className='flex flex-col md:flex-row md:justify-between bg-slate-700 text-white p-4 border-b-4 border-b-slate-400 border-double'>
      <section className='w-10 max-md:mx-auto'>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 164.56 162.44" 
          fill="white"
          >
            <path 
              d="M88.94 119.91v42.53H75.4V92.17c-26.58.24-47.78-9.8-62.83-31.49C.01 42.59-.81 21.91.41.47 20.12-.94 39.07.28 56.17 11.7c16.82 11.23 26.68 27.1 31.55 47.46 10.5-14.19 22.98-24.84 39.54-28.46 11.82-2.59 24.14-2.93 36.15-4.26 6.86 44.12-17.09 92.51-74.47 93.48zM14.33 14.31C12.4 48.23 36.69 81.49 75.09 77.17c1.17-36.65-25.68-64.07-60.76-62.86zm75.07 90.8c37.04.92 61.67-25.55 60.93-63.1-32.53-4.75-62.82 26.43-60.93 63.1z"/></svg>
      </section>
      <div className='font-mono text-center text-xl font-semibold'>
        <Link href="/blog">Blog</Link>
        <Link href="/blog/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default BlogNavbar