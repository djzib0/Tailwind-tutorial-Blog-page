import React from 'react'

const PaddingAndMarginPage = () => {
  return (
    <div className='bg-red-50'>
      {/* <!-- 
      SECTION 1
      Background Colour: Light blue
      Text Colour: Dark Purple
      Margin: 4 units all sides (1rem)
      Padding: 6 units on all sides (1.5rem)
      Width: Half of the parent container
      Height: 32 units (8rem)
        --> */}
      <section className='bg-blue-100 text-blue-800 m-4 p-6 w-1/2 h-32'>
          <p>Section 1</p>
      </section>
      
      
      {/* SECTION 2
      Background Colour: Dark green.
      Text Colour: Pale green
      Margin: 6 units on the top and bottom only (1.5rem)
      Padding: 8 units on the left and right only (2rem) 
      Width: 100% of the parent width
      Height: 40 units (10rem) */}
      
      <section className='bg-green-800 text-green-100 my-6 px-8 w-full h-40'>
          <p>Section 2</p>
      </section>
      
      {/* <!-- 
      SECTION 3
      Background Colour: Light Yellow
      Text Colour: Dark Amber
      Margin: Automatically centered horizontally (mx-auto)
      Padding: 4 units to the top only (1rem)
      Width: 5/12 of the parent container
      Height: 24 units (6rem)
        --> */}
      <section className='bg-yellow-200 text-yellow-900 mx-auto pt-4 w-5/12 h-24'>
          <p>Section 3</p>
      </section>
    </div>
  )
}

export default PaddingAndMarginPage