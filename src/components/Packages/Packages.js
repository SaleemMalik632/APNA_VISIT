/* eslint-disable no-script-url */
import React from 'react'
import Footer from '../Footer/Footer'
import packag1 from '../assets/images/packag1.jpg'
import packag2 from '../assets/images/packag2.jpg'
import packag3 from '../assets/images/packag3.jpg'
import packag4 from '../assets/images/packag4.jpg'
import loca from '../assets/images/loca.png'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
const Packages = () =>
{
    return (
        <>
            <Navbar/>
            <div className="packages">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage text_align_center ">
                                <h2>World Place Packages</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-md-6">
                            <div id="ho_img" className="packages_box" data-aos="fade-right" >
                                <figure><img src={packag1} alt="#" /></figure>
                                <div className="tuscany">
                                    <div className="tusc text_align_left">
                                        <div className="italy">
                                            <h3>Tuscany</h3>
                                            <span><img src={loca} alt="#" /> Italy</span>
                                        </div>
                                        <div className="italy_right">
                                            <h3>Price</h3>
                                            <span>$1000.0</span>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, consectetur ratione? Blanditiis unde, asperiores praesentium ipsa voluptatibus adipisci hic, repudiandae omnis nihil alias, molestiae itaque laboriosam.</p>
                                    <div className="tusc">
                                        <Link className="read_more" to="Javascript:void(0)">Read More</Link >
                                        <Link className="read_more" to="Javascript:void(0)">Book Now</Link >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-6">
                            <div id="ho_img" className="packages_box" data-aos="fade-left">
                                <figure><img src={packag2} alt="#" /></figure>
                                <div className="tuscany">
                                    <div className="tusc text_align_left">
                                        <div className="italy">
                                            <h3>Paris</h3>
                                            <span><img src={loca} alt="#" /> Italy</span>
                                        </div>
                                        <div className="italy_right">
                                            <h3>Price</h3>
                                            <span>$1000.0</span>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum recusandae sapiente inventore quidem pariatur voluptate in repudiandae amet quia doloremque suscipit non ullam adipisci dolorum, consectetur a obcaecati delectus nemo?</p>
                                    <div className="tusc">
                                        <Link className="read_more" to="Javascript:void(0)">Read More</Link >
                                        <Link className="read_more" to="Javascript:void(0)">Book Now</Link >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-6">
                            <div id="ho_img" className="packages_box" data-aos="fade-right" >
                                <figure><img src={packag3} alt="#" /></figure>
                                <div className="tuscany">
                                    <div className="tusc text_align_left">
                                        <div className="italy">
                                            <h3>San Francisco</h3>
                                            <span><img src={loca} alt="#" /> United States
                                            </span>
                                        </div>
                                        <div className="italy_right">
                                            <h3>Price</h3>
                                            <span>$1000.0</span>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nihil molestias esse dolores ad rem nam blanditiis quis adipisci! Praesentium, soluta rem fugiat consectetur asperiores quia.</p>
                                    <div className="tusc">
                                        <Link className="read_more" to="Javascript:void(0)">Read More</Link >
                                        <Link className="read_more" to="Javascript:void(0)">Book Now</Link >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-6">
                            <div id="ho_img" className="packages_box" data-aos="fade-left">
                                <figure><img src={packag4} alt="#" /></figure>
                                <div className="tuscany">
                                    <div className="tusc text_align_left">
                                        <div className="italy">
                                            <h3>Phuket</h3>
                                            <span><img src={loca} alt="#" /> Thailandia</span>
                                        </div>
                                        <div className="italy_right">
                                            <h3>Price</h3>
                                            <span>$1000.0</span>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aliquid nam sunt, provident voluptas maiores ad reiciendis odio vel laudantium ipsum pariatur minus! Repellendus.</p>
                                    <div className="tusc">
                                        <Link className="read_more" to="Javascript:void(0)">Read More</Link >
                                        <Link className="read_more" to="Javascript:void(0)">Book Now</Link >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <Link className="read_more" to="Javascript:void(0)">See More</Link >
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Packages
