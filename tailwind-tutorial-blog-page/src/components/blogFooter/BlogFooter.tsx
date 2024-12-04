import React from 'react'

const BlogFooter = () => {
  return (
    <footer className='bg-slate-700 text-white p-4'>
      <section>
        <h3>Subscribe</h3>
        <p>Want to get notified when a new blog post is up? 
          Sign up for the newsletter and never miss out!</p>
        <form>
            <input type="email" placeholder="email@example.com"/>
            <input type="submit" value="Sign Up"/>
        </form>
        <span>&copy; Fluffy McDuck</span>
      </section>
    </footer>
  )
}

export default BlogFooter