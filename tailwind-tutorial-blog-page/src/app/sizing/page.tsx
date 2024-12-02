import React from 'react'

const SizingPage = () => {
  return (
    <div>
      <section className="w-64 h-32">
          Fixed units
      </section>
      <section className="h-full">
          Percentage units
      </section>
      <section className="h-1/3 w-1/2">
          Viewport units
      </section>
    </div>
  )
}

export default SizingPage