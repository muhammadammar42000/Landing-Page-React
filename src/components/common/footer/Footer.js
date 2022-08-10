import React from 'react'
import './footer.css'
import { blog } from '../../../dummydata'

export default function Footer() {
    return (
        <>
            <section className='newletter'>
                <div className='container flexSB'>
                    <div className='left row'>
                        <h1>Newletter - stay tune and get the latest updates</h1>
                        <span>Far far away, behind the word mountains</span>
                    </div>
                    <div className='right row'>
                        <input type='email' placeholder='Enter your email address' />
                        <i className='fa fa-paper-plane'></i>
                    </div>
                </div>
            </section>

            <footer>
                <div className='container padding'>
                    <div className='box logo'>
                        <h1>ACADEMIA</h1>
                        <span>ONLINE EDUCATION & LEARNING</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                        <i className='fab fa-facebook-f icon'></i>
                        <i className='fab fa-instagram icon'></i>
                        <i className='fab fa-twitter icon'></i>
                    </div>
                    <div className='box link'>
                        <h3>Explore</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Courses</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='box link'>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Recent Post</h3>
                        {blog.slice(0, 3).map((val) => (
                            <div className='items flexSB'>
                                <div className='img'>
                                    <img src={val.cover} />
                                </div>
                                <div className='text'>
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
                                    <h4>{val.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='box last'>
                            <h3>Have a Questions ? </h3>
                            <ul>
                                <li>
                                    <i className='fa fa-map'></i>
                                    203 Fake ST. Mount View, san francisco , USA
                                </li>
                                <li>
                                    <i className='fa fa-phone-alt'></i>
                                    +92 334 2051374
                                </li>
                                <li>
                                    <i className='fa fa-paper-plane'></i>
                                    example@gmail.com
                                </li>
                            </ul>
                    </div>
                </div>
            </footer>
            <div className='legal'>
                <p>Copyright &copy; 2022 all right reserved | This Template is made with <i className='fa fa-heart'></i> by Ammar.</p>
            </div>
        </>
    )
}
