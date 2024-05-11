import Link from 'next/link'
import React from 'react'
import Badge from '../../elements/Badge'

const Info = () => {
    return (
        <>
            <h1 className='font-medium text-2xl'>Hey, I’m Winarno 👋</h1>
            <div className='mt-4'>
                I`m a Tech Enthusiast, and Software Engineer. I currently <Link href="/work" className='underline underline-offset-1'>Work</Link> as the Junior Software Enginer at <Badge image='/images/transindo.png' title='PT Transindo Data Perkasa' href='https://transindodata.com/'></Badge> ,
                I create scalable web applications with specializing in PHP,JavaScript And Typescripts . People Please who know me usually call me <span className='font-semibold'>win</span> not  <span className='line-through'>nano</span> or <span className='line-through'>narno</span>
            </div>
        </>
    )
}
export default Info