import React from 'react'
import { blog } from '../../dummydata'
import Title from '../common/heading/Title'



export default function HBlog() {
    return (
        <>
            <section className='blog'>
                <div className='container'>
                    <Title subtitle='OUR BLOG' title='Recent From Blog' />
                    <div className='grid2'>
                        {blog.slice(0,3).map((val) => (
                            <div className='items shadow'>
                                <div className='img'>
                                    <img src={val.cover} />
                                </div>
                                <div className='text'>
                                    <div className='admin flexSB'>
                                        <span>
                                            <i className='fa fa-user'></i>
                                            <label>{val.type}</label>
                                        </span>
                                        <span>
                                            <i className='fa fa-calendar-alt'></i>
                                            <label>{val.date}</label>
                                        </span>
                                        <span>
                                            <i className='fa fa-comments'></i>
                                            <label>{val.com}</label>
                                        </span>
                                    </div>
                                    <h1>{val.title}</h1>
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
