import React from 'react'
import BlogCard from '../../elements/BlogCard'

const Blog = () => {
    return (
        <section className='md:mt-12 mt-8'>
            <div className='md:mb-12 mb-8'>
                In my opinion, writing is not easy, that`s the reason I didn`t choose it as my main hobby. However, there are several things that we should write down to make it easier to understand. Therefore, I try to write this blog in a simple style.
            </div>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
        </section>
    )
}
export default Blog