import React from 'react'
import { coursesCard } from '../../dummydata'
import Title from '../common/heading/Title'
import OnlineCourses from '../allcourses/OnlineCourses'



export default function HAbout() {
    return (
        <>
            <section className='homeAbout'>
                <div className='container'>
                    <Title subtitle='our courses' title='explore our popular courses' />
                    <div className='coursesCard'>
                        <div className='grid2'>
                            {coursesCard.slice(0, 3).map((val) => (
                                <div className='items'>
                                    <div className='content flex'>
                                        <div className='left'>
                                            <div className='img'>
                                                <img src={val.cover} />
                                            </div>
                                        </div>
                                        <div className='text'>
                                            <h1>{val.coursesName}</h1>
                                            <div className='rate'>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <label>(5.0)</label>
                                            </div>
                                            <div className='details'>
                                                {val.courTeacher.map((details) => (
                                                    <div>
                                                        <div className='box'>
                                                            <div className='dimg'>
                                                                <img src={details.dcover} />
                                                            </div>
                                                            <div className='para'>
                                                                <h4>{details.name}</h4>
                                                            </div>
                                                        </div>
                                                        <span>{details.totalTime}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='price'>
                                        <h3>{val.priceAll} / {val.pricePer}</h3>
                                    </div>
                                    <button className='outline-btn'>ENROLL NOW !</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <OnlineCourses />
        </>
    )
}
