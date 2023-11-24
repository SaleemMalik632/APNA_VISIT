import React from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
const About = () =>
{
    return (
        <>
            <Navbar/>
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage text_align_center">
                                <h2>About Our Company</h2>
                            </div>
                        </div>
                        <div className="col-md-10 offset-md-1">
                            <div className="about_text text_align_center">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                                </p>
                                <Link className="read_more" to="/about.html">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
