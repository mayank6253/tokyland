import React from 'react'
import navlogo from "./images/navlogo.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"

export default function Footer() {
    return (
        <div>
            <section>
                <div className="container" style={{ marginTop: "100px", paddingBottom: "40px" }}>
                    <div className="footer-area">
                    <hr  style={{background:"#192057"}}/>
                        <div className="row">
                            <div className='col-12 col-lg-3 col-md-6'>
                                <div className="footer-content">
                                    <div className="footer-logo">
                                        <img src={navlogo} alt="" className="footer-logo-image" />
                                    </div>
                                    <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad</p>
                                    <div className="social-links">
                                        <a href="/" className='icons'><FaFacebookF /></a>
                                        <a href="/" className='icons mx-2'><AiOutlineTwitter /></a>
                                        {/* <a href="/" className='icons mx-2'><FaGooglePlusG /></a> */}
                                        <a href="/" className='icons mx-2'><FaInstagram /></a>
                                        <a href="/" className='icons mx-2'><FaLinkedinIn /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-3 col-md-6'>
                                <div className="footer-content">
                                    <div className="privacy">
                                        <h5 className='text-light fs-6'>PRIVACY &amp; TOS</h5>
                                    </div>
                                    <div className="links">
                                        <a href="/" className='link'>Advertiser Agreement</a> <br />
                                        <a href="/" className='link'>Acceptable Use Policy</a> <br />
                                        <a href="/" className='link'>Privacy Policy</a> <br />
                                        <a href="/" className='link'>Technology Privacy</a> <br />
                                        <a href="/" className='link'>Developer Agreement</a> <br />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-3 col-md-6'>
                                <div className="footer-content">
                                    <div className="navigate">
                                        <h5 className='text-light fs-6'>NAVIGATE</h5>
                                    </div>
                                    <div className="links">
                                        <a href="/" className='link'>Advertisers</a> <br />
                                        <a href="/" className='link'>Developers</a> <br />
                                        <a href="/" className='link'>Resources</a> <br />
                                        <a href="/" className='link'>Company</a> <br />
                                        <a href="/" className='link'>Connect</a> <br />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-3 col-md-6'>
                                <div className="footer-content">
                                    <div className="contact">
                                        <h5 className='text-light fs-6'>CONTACT US</h5>
                                    </div>
                                    <div className="links">
                                        <a href="/" className='link'>Mailing Address:xx00 E. Union Ave</a> <br />
                                        <a href="/" className='link'>Suite 1100. Denver, CO 80237</a> <br />
                                        <a href="/" className='link'>+999 90932 627</a> <br />
                                        <a href="/" className='link'>support@yourdomain.com</a> <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
