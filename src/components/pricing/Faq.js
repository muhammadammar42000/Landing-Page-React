import React, { useState } from 'react'
import { faq } from '../../dummydata'
import Title from '../common/heading/Title'

export default function Faq() {

    const [click, setClick] = useState(false)

    const toggle = (index) => {
        if (click === index) {
            return setClick(null)
        }
        setClick(index)
    }

    return (
        <>
            <Title subtitle='FAQs' title='frequently ask questions' />
            <section className='faq'>
                <div className='container'>
                    {faq.map((val, index) => (
                        <div className='box'>
                            <button className='accordion' onClick={() => toggle(index)} key={index}>
                                <h2>{val.title}</h2>
                                <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
                            </button>
                            {click === index ? (
                                <div className='text'>
                                    <p>{val.desc}</p>
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
