import About from '@/common/components/module/home/About'
import Blog from '@/common/components/module/home/Blog'
import Footer from '@/common/components/module/home/Footer'
import Gallery from '@/common/components/module/home/Gallery'
import Info from '@/common/components/module/home/Info'
import Tech from '@/common/components/module/home/Tech'
import React from 'react'

const index = () => {
  return (
    <>
      <Info></Info>
      <Gallery></Gallery>
      <About />
      <Blog />
      <Tech />
      <Footer />
    </>

  )
}

export default index