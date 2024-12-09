import React from 'react'
import BlogCard from '~/components/blogCard/BlogCard'
import BlogFooter from '~/components/blogFooter/BlogFooter'
import BlogNavbar from '~/components/blogNavbar/BlogNavbar'

const BlogPage = () => {
  return (
    <div>
      <header>
        <section>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.56 162.44" fill="white"><path d="M88.94 119.91v42.53H75.4V92.17c-26.58.24-47.78-9.8-62.83-31.49C.01 42.59-.81 21.91.41.47 20.12-.94 39.07.28 56.17 11.7c16.82 11.23 26.68 27.1 31.55 47.46 10.5-14.19 22.98-24.84 39.54-28.46 11.82-2.59 24.14-2.93 36.15-4.26 6.86 44.12-17.09 92.51-74.47 93.48zM14.33 14.31C12.4 48.23 36.69 81.49 75.09 77.17c1.17-36.65-25.68-64.07-60.76-62.86zm75.07 90.8c37.04.92 61.67-25.55 60.93-63.1-32.53-4.75-62.82 26.43-60.93 63.1z"/></svg> */}
        </section>
      </header>
      <main className='bg-slate-50 h-full flex flex-col gap-4'>
        <BlogNavbar 
        />
        <div className='flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-4 justify-center items-center'>
          <BlogCard
            imgUrl='/post_houseplants.jpg'
            imgAlt='Houseplants with Attitudes'
            avatar='/author_fern.jpg'
            userName='Fern Greenleaf'
            postTitle='Houseplants with Attitude: Meet the Divas of Your Living Room'
            postContent='If you thought your Monstera was just sitting quietly in the corner, think again! These houseplants are full of sass, drama, and demands. From diva-like Calatheas that throw a tantrum if you mist them wrong to ferns that seem to love dying for attention, we’re here to introduce you to the plant kingdom’s most dramatic members. '
            likes={9}
          />
          <BlogCard
            imgUrl='/post_houseplants.jpg'
            imgAlt='Houseplants with Attitudes'
            avatar='/author_fern.jpg'
            userName='Fern Greenleaf'
            postTitle='Houseplants with Attitude: Meet the Divas of '
            postContent='If you thought your Monstera was just sitting quietly in the corner, think again! These houseplants are full of sass, drama, and demands. From diva-like Calatheas that throw a tantrum if you mist them wrong to ferns that seem to love dying for attention, we’re here to introduce you to the plant kingdom’s most dramatic members. '
            likes={9}
          />
          <BlogCard
            imgUrl='/post_secret.jpg'
            imgAlt='The Secret Social Lives '
            avatar='/author_daisy.jpg'
            userName='Daisy Digwell'
            postTitle='The Secret Social Lives'
            postContent='If you thought your Monstera was just sitting quietly in the corner, think again! These houseplants are full of sass, drama, and demands. From diva-like Calatheas that throw a tantrum if you mist them wrong to ferns that seem to love dying for attention, we’re here to introduce you to the plant kingdom’s most dramatic members. '
            likes={7}
          />
          <BlogCard
            imgUrl='/post_vegetable.jpg'
            imgAlt='Vegetable Gardening for Lazy People'
            avatar='/author_ivy.jpg'
            userName='Ivy Sproutson'
            postTitle='Vegetable Gardening for Lazy People'
            postContent='Gardening doesn’t have to be hard, especially if you’re a pro at doing as little as possible! Here’s your guide to growing veggies that practically take care of themselves, so you can binge-watch your favorite shows while your garden does all the heavy lifting.'
            likes={2}
          />
          <BlogCard
            imgUrl='/post_quirky.jpg'
            imgAlt='Plants You Can’t Kill (Unless You’re Actively Trying)'
            avatar='/author_basil.jpg'
            userName=' Basil Bloomfield'
            postTitle='Grow Your Own Quirky Garden Gang'
            postContent='Why settle for ordinary plants when you can have a garden full of characters? From the playful bounce of the Sensitive Plant to the dramatic movements of the Venus Flytrap, we’ll introduce you to some quirky plant pals that are sure to add a little fun and flair to your garden. Get ready to grow a crew with serious personality!'
            likes={20}
          />
          <BlogCard
            imgUrl='/post_quirky.jpg'
            imgAlt='Plants You Can’t Kill (Unless You’re Actively Trying)'
            avatar='/author_basil.jpg'
            userName=' Basil Bloomfield'
            postTitle='Grow Your Own Quirky Garden Gang'
            postContent='Why settle for ordinary plants when you can have a garden full of characters? From the playful bounce of the Sensitive Plant to the dramatic movements of the Venus Flytrap, we’ll introduce you to some quirky plant pals that are sure to add a little fun and flair to your garden. Get ready to grow a crew with serious personality!'
            likes={20}
          />
        </div>
        <BlogFooter />
      </main>
    </div>
  )
}

export default BlogPage