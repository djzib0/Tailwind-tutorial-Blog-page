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
    <section className='w-80'>
      {/* <!-- CARD --> */}
      <section>
        <Image src={imgUrl} alt={imgAlt} width={100} height={100}/>

        {/* <!-- CARD CONTENT --> */}
        <section>
          {/* <!-- CARD HEADER --> */}
          <CardHeader 
            avatar={avatar}
            userName={userName}
          />
          {/* <!-- CARD HEADER END --> */}
          
          {/* <!-- CARD BODY --> */}
          <CardBody 
            postTitle={postTitle}
            postContent={postContent}
          />
          {/* <!-- CARD BODY END --> */}
          <hr/>
          {/* <!-- CARD FOOTER --> */}
          <CardFooter 
            likes={likes}
          />
          {/* <!-- CARD FOOTER END --> */}
              
          </section>
          {/* <!-- CARD CONTENT END --> */}
          
      </section>
      {/* <!-- CARD END --> */}
  </section>
  )
}

export default BlogCard