import React from 'react'
import './hero.css'
import Title from '../../common/heading/Title'

export default function Hero() {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise'/>
            <p>
              lLorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer.
            </p>
            <div className='button'>
              <button className='primary-btn'>GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i></button>
              <button>VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i></button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}
