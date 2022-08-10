import React from 'react'
import Back from '../common/back/Back'
import './blog.css'
import BlogCard from './BlogCard'


export default function Blog() {
    return (
        <>
            <Back title='Blog Posts' />
            <section className='blog padding'>
                <div className='container grid2'>
                    <BlogCard />
                </div>
            </section>
        </>
    )
}
