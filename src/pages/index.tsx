import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div>
      <h1 className='font-medium text-2xl'>Hey, I’m Winarno 👋</h1>
      <p className='mt-4'>
        I`m a Tech Enthusiast, and Software Engineer. I currently <Link href="/work" className='underline underline-offset-1'>Work</Link> as the VP of Product at Vercel,
        where I help teach the Next.js community, an open-source web framework built with React.
      </p>
    </div>
  )
}

export default index