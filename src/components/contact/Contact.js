import React from 'react'
import Back from '../common/back/Back'
import './contact.css'

export default function Contact() {
    const mapUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57912.08376339542!2d67.18423039999999!3d24.8807424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1659701860836!5m2!1sen!2s'
    return (
        <>
            <Back title='Contact us' />
            <section className='contact padding'>
                <div className='container shadow flexSB'>
                    <div className='left row'>
                        <iframe src={mapUrl}></iframe>
                    </div>
                    <div className='right row'>
                        <h1>Contact Us</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting?</p>
                        <div className='items grid2'>
                            <div className='box'>
                                <h4>ADDRESS : </h4>
                                <p>R-35 Bagh-e-malir BLOCK A, Karachi</p>
                            </div>

                            <div className='box'>
                                <h4>EMAIL : </h4>
                                <p>muhammadammar42000@gmail.com</p>
                            </div>

                            <div className='box'>
                                <h4>PHONE : </h4>
                                <p>0334 2051374</p>
                            </div>
                        </div>
                        <form action=''>
                            <div className='flexSB'>
                                <input type='text' placeholder='Name' />
                                <input type='email' placeholder='Email' />
                            </div>
                            <input type='text' placeholder='Subject' />
                            <textarea cols='30' rows='10' placeholder='Creatt a message here ...' />
                            <button className='primary-btn'>SEND MESSAGE</button>
                        </form>

                        <h3>Follow Us Here</h3>
                        <span>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}
