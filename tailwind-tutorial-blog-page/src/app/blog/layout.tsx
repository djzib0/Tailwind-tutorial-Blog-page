import React from 'react'

const BlogLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='bg-white'>{children}</div>
  )
}

export default BlogLayout