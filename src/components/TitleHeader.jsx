import React from 'react'

const TitleHeader = ({title , sub}) => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <div className='hero-badge text-1.5xl'>
            <p>{sub}</p>
        </div>
        <div className='font-semibold md:text-5xl text-1xl'>
            {title}
        </div>
    </div>
  )
}

export default TitleHeader