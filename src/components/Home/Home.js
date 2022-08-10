import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Testimonial from './testimonial/Testimonial'
import HBlog from './HBlog'
import HPricing from './HPricing'




export default function Home() {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonial />
      <HBlog />
      <HPricing />
    </>
  )
}
