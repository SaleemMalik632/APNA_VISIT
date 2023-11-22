/* eslint-disable no-script-url */
import React from 'react'
import '../assets/css/bootstrap-datepicker.min.css'
import '../assets/css/bootstrap.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.min.css'
import '../assets/css/icomoon.css'
import '../assets/css/nice-select.css'
import '../assets/css/niceCountryInput.css'
import '../assets/css/owl.carousel.min.css'
import '../assets/css/responsive.css'
import '../assets/css/style.css'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () =>
{
    return (
        <>
            <div className="header_midil">
                <div className="container">
                    <div className="row d_flex">
                        <div className=" col-md-2 col-sm-3 logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo">
                                        <Link  to="index.html"><img src={logo} alt="#" /></Link >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9 col-md-8">
                            <nav className="navigation navbar navbar-expand-md navbar-dark ">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarsExample04">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <Link  className="nav-link" to="index.html">Home</Link >
                                        </li>
                                        <li className="nav-item">
                                            <Link  className="nav-link" to="about.html">About</Link >
                                        </li>
                                        <li className="nav-item">
                                            <Link  className="nav-link" to="pakages.html">Pakages </Link >
                                        </li>
                                        <li className="nav-item">
                                            <Link  className="nav-link" to="client.html">client </Link >
                                        </li>
                                        <li className="nav-item">
                                            <Link  className="nav-link" to="blog.html">Blog</Link >
                                        </li>
                                        <li className="nav-item">
                                            <Link  className="nav-link" to="contact.html">Contact Us</Link >
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}

export default Navbar
