/* eslint-disable no-script-url */
import React from 'react'
import Footer from '../Footer/Footer'
import blog1 from '../assets/images/blog1.jpg'
import blog2 from '../assets/images/blog2.jpg'
import blog3 from '../assets/images/blog3.jpg'
import blog4 from '../assets/images/blog4.jpg'
import loca from '../assets/images/loca.png'
const Blog = () =>
{
  return (
      <>
          <div className="packages">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="titlepage text_align_center ">
                              <h2>Our Blog</h2>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className=" col-md-6">
                          <div id="ho_img" className="packages_box" data-aos="fade-right" >
                              <figure><img src={blog1} alt="#" /></figure>
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
                                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatum libero culpa, inventore fugit deserunt rem, esse suscipit vitae odio repellat dicta ducimus illo?</p>
                                  <div className="tusc">
                                      <a className="read_more" href="Javascript:void(0)">Read More</a>
                                      <a className="read_more" href="Javascript:void(0)">Book Now</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className=" col-md-6">
                          <div id="ho_img" className="packages_box" data-aos="fade-left">
                              <figure><img src={blog2} alt="#" /></figure>
                              <div className="tuscany">
                                  <div className="tusc text_align_left">
                                      <div className="italy">
                                          <h3>Pais</h3>
                                          <span><img src={loca} alt="#" /> Italy</span>
                                      </div>
                                      <div className="italy_right">
                                          <h3>Price</h3>
                                          <span>$1000.0</span>
                                      </div>
                                  </div>
                                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci rerum nam consequuntur exercitationem, eius blanditiis tempore fugit provident sequi ut illo dolor sunt expedita.</p>
                                  <div className="tusc">
                                      <a className="read_more" href="Javascript:void(0)">Read More</a>
                                      <a className="read_more" href="Javascript:void(0)">Book Now</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className=" col-md-6">
                          <div id="ho_img" className="packages_box" data-aos="fade-right" >
                              <figure><img src={blog3} alt="#" /></figure>
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
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt perferendis facilis quia, totam, aspernatur aliquam vero assumenda ab saepe soluta quae sapiente quaerat fugiat.
                                  </p>
                                  <div className="tusc">
                                      <a className="read_more" href="Javascript:void(0)">Read More</a>
                                      <a className="read_more" href="Javascript:void(0)">Book Now</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className=" col-md-6">
                          <div id="ho_img" className="packages_box" data-aos="fade-left">
                              <figure><img src={blog4} alt="#" /></figure>
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
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati velit id accusamus commodi impedit, aut delectus, similique deleniti deserunt, reiciendis fugit praesentium </p>
                                  <div className="tusc">
                                      <a className="read_more" href="Javascript:void(0)">Read More</a>
                                      <a className="read_more" href="Javascript:void(0)">Book Now</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-12">
                          <a className="read_more" href="Javascript:void(0)">See More</a>
                      </div>
                  </div>
              </div>
          </div>
      <Footer/>
      </>
    )
}

export default Blog
