import React from 'react'

type CardBodyProps = {
  postTitle: string;
  postContent: string;
}


const CardBody = ({postTitle, postContent}: CardBodyProps) => {
  return (
    <section>
      <h2 className='font-sans text-xl font-semibold text-slate-600 tracking-tight leading-snug'>{postTitle}</h2>
      <p className='font-sans text-sm my-4 line-clamp-3'>{postContent}</p>
    </section>
  )
}

export default CardBody