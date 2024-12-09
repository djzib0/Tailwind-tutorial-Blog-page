import Image from 'next/image';
import React from 'react'
import CardHeader from './cardHeader/CardHeader';
import CardBody from './cardBody/CardBody';
import CardFooter from './cardFooter/CardFooter';

type BlogProps = {
  imgUrl: string;
  imgAlt: string;
  avatar: string;
  userName: string;
  postTitle: string;
  postContent: string;
  likes: number;
}

const BlogCard = ({
  imgUrl,
  imgAlt,
  avatar,
  userName,
  postTitle,
  postContent,
  likes,
}: BlogProps) => {
  return (
    <section className='w-80 rounded-xl shadow-xl max-h-fit'>
      <section className='h-60 w-full relative inline-block hover:opacity-85 hover:cursor-pointer'>
        <Image src={imgUrl} alt={imgAlt} fill className='object-cover rounded-t-xl'/>
      </section>
      <section className='w-80 p-4'>
        <h2 className='font-mono my-4 text-4xl text-center font-extrabold tracking-widest uppercase'>Blog</h2>
        <CardHeader 
          avatar={avatar}
          userName={userName}
        />
        <CardBody 
          postTitle={postTitle}
          postContent={postContent}
        />
        <hr className='my-3'/>
        <CardFooter 
          likes={likes}
        />            
      </section>         
    </section>
  )
}

export default BlogCard