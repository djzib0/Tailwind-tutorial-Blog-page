import Image from 'next/image'
import React from 'react'

type CardHeaderProps = {
  avatar: string;
  userName: string;
}

const CardHeader = ({avatar, userName}: CardHeaderProps) => {
  return (
    <section
      className='flex flex-row justify-between items-center mb-4'
    > 
      <div className='flex flex-row items-center gap-4'>
        <div className='w-8 h-8 relative'>
          <Image src={avatar} alt={userName} fill className='rounded-full' />
        </div>
        <span className='text-slate-500'>{userName}</span>
      </div>
      <svg 
        height="20px" 
        viewBox="0 -960 960 960" 
        width="20px"
      >
      <path 
        d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33
        0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33
        0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33
        0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 
        0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 
        0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/>
      </svg>
      {/* <!-- <span>More options</span> --> */}
    </section>
  )
}

export default CardHeader