/* eslint-disable no-script-url */
import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="letter text_align_left">
                                    <h2>Contact Us</h2>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <form id="request" className="main_form">
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <input className="cont_in" placeholder="Full Name" type="type" name=" Name" />
                                        </div>
                                        <div className="col-md-12">
                                            <input className="cont_in" placeholder="Your Email" type="type" name="Email" />
                                        </div>
                                        <div className="col-md-12">
                                            <input className="cont_in" placeholder="Phone Number" type="type" name="Phone Number" />
                                        </div>
                                        <div className="col-md-12">
                                            <input className="cont_in" placeholder="Your Words" type="type" name="Words" />
                                        </div>
                                        <div className="col-md-12">
                                            <button className="send_btnt">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-4 ">
                                <ul className="conta">
                                    <li><i className="fa fa-map-marker" aria-hidden="true"></i>Locations
                                    </li>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i>+0123 0987654321</li>
                                    <li> <i className="fa fa-envelope" aria-hidden="true"></i><Link to="Javascript:void(0)"> info.apnavisit@gmail.com</Link ></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <div className="follow text_align_left">
                                    <h3>Follow Us</h3>
                                    <ul className="social_icon ">
                                        <li><Link to="Javascript:void(0)"><i className="fa fa-facebook" aria-hidden="true"></i></Link ></li>
                                        <li><Link to="Javascript:void(0)"><i className="fa ml-2 fa-twitter" aria-hidden="true"></i></Link ></li>
                                        <li><Link to="Javascript:void(0)"><i className="fa ml-2 fa-linkedin" aria-hidden="true"></i></Link ></li>
                                        <li><Link to="Javascript:void(0)"><i className="fa ml-2 fa-instagram" aria-hidden="true"></i></Link ></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>© 2020 All Rights Reserved With Apna Visit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>    
        </>
  )
}

export default Footer
