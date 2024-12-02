import React from 'react'

type CardBodyProps = {
  postTitle: string;
  postContent: string;
}


const CardBody = ({postTitle, postContent}: CardBodyProps) => {
  return (
    <section>
      <h2>{postTitle}</h2>
      <p>{postContent}</p>
    </section>
  )
}

export default CardBody