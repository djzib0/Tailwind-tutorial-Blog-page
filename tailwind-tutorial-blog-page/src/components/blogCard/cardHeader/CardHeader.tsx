import Image from 'next/image'
import React from 'react'

type CardHeaderProps = {
  avatar: string;
  userName: string;
}

const CardHeader = ({avatar, userName}: CardHeaderProps) => {
  return (
    <section>
      <section>
        <section>
          <Image src={avatar} alt={userName} width={100} height={100} />
          <span>{userName}</span>
        </section>
        <svg height="20px" viewBox="0 -960 960 960" width="20px"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
        {/* <!-- <span>More options</span> --> */}
      </section>
    </section>
  )
}

export default CardHeader