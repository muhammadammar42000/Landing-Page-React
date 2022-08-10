import React from 'react'
import Title from '../common/heading/Title'
import { homeAbout } from '../../dummydata'
import Awrapper from './Awrapper'
import './about.css'



export default function AboutCard() {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img />
          </div>
          <div className='right row'>
            <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'>
              {homeAbout.map((val) => (
                <div className='item flexSB'>
                  <div className='img'>
                    <img src={val.cover} />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}
