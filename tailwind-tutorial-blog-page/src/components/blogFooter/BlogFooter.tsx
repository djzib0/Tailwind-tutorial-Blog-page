import React from 'react'

const BlogFooter = () => {
  return (
    <footer className='bg-slate-700 text-white p-4 text-center mt-auto'>
      <section>
        <h3 className='font-bold uppercase text-base tracking-wider mb-4'>Subscribe</h3>
        <p className='tracking-wide my-4'>Want to get notified when a new blog post is up? 
          Sign up for the newsletter and never miss out!</p>
        <form className='my-4'>
            <input 
              type="email" 
              placeholder="email@example.com"
              className='p-2 text-slate-800 pl-4'
            />
            <input 
              type="submit" 
              value="Sign Up"
              className='bg-slate-300 text-slate-800 p-2 font-medium'
            />
        </form>
        <span className='font-mono text-sm'>&copy; Fluffy McDuck</span>
      </section>
    </footer>
  )
}

export default BlogFooter