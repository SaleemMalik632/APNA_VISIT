/* eslint-disable no-script-url */
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import filter from '../assets/images/filter.png'
import packag1 from '../assets/images/packag1.jpg'
import packag2 from '../assets/images/packag2.jpg'
import packag3 from '../assets/images/packag3.jpg'
import packag4 from '../assets/images/packag4.jpg'
import loca from '../assets/images/loca.png'
import test22 from '../assets/images/test22.jpg'

const Home = () =>
{
  return (
    <>
      <div className="full_bg">
        <div className="slider_main">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div id="carouselExampleIndicators" className="carousel slide">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="carousel-caption relative">
                        <div className="row">
                          <div className="col-md-10 offset-md-1">
                            <div className="board">
                              <h1>Now start Your traveling </h1>
                              <p>Book flights, accommodations, and tours to your dream destination. Experience new cultures, cuisines, and landscapes. Our expert travel agents will make your trip unforgettable.</p>
                              <Link to="#" >&nbsp</Link>
                              <Link className="read_more" to="Javascript:void(0)">Read More</Link >
                              <Link  to="#" >&nbsp</Link>
                              <Link className="read_more" to="Javascript:void(0)">Contact us</Link >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carousel-caption relative">
                        <div className="row">
                          <div className="col-md-10 offset-md-1">
                            <div className="board">
                              <h1>Now start Your traveling </h1>
                              <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed towhen looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                              <Link className="read_more" to="Javascript:void(0)">Read More</Link >
                              <Link className="read_more" to="Javascript:void(0)">Contact us</Link >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carousel-caption relative">
                        <div className="row">
                          <div className="col-md-10 offset-md-1">
                            <div className="board">
                              <h1>Now start Your traveling </h1>
                              <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed towhen looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                              <Link className="read_more" to="Javascript:void(0)">Read More</Link >
                              <Link className="read_more" to="Javascript:void(0)">Contact us</Link >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our_packages">
        <div className="container">
          <div className="row d_flex">
            <div className="col-md-12">
              <form id="table" className="table_form">
                <div className="row">
                  <div className="col-md-12">
                    <div className="titlepage text_align_left ">
                      <h3>Our Packages</h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label>Select Your Destination :</label>
                    <input className="contactus" placeholder="All Destinations" type="text" name="destinations" />
                  </div>
                  <div className="col-md-4">
                    <label>Select Your Destination :</label>
                    <input type="text" className="contactus" id="my_date_picker" placeholder="mm-dd-yy" />
                  </div>
                  <div className="col-md-4">
                    <label>Select Your Destination :</label>
                    <select id='seluser' className="contactus" >
                      <option value='0'>$1090</option>
                      <option value='1'>$1100</option>
                      <option value='2'>$1160</option>
                      <option value='3'>$1190</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn">Search</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-12">
              <div className="filter_main">
                <Link className="read_more" to="javascript:void(0)"> <img src={filter} alt="#" /> More Filters </Link >
              </div>
            </div>
            <div className="col-md-8 offset-md-2">
              <div className="typologies">
                <div className="row">
                  <div className="col-md-3">
                    <div className="typolo">
                      <span>typologies :</span>
                      <form>
                        <div className="form-check">
                          <label className="marg_bottom0">
                            <input type="radio" name="radio" checked /> <span className="label-text">Relax </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="marg_bottom0">
                            <input type="radio" name="radio" /> <span className="label-text">Cultural </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="marg_bottom0">
                            <input type="radio" name="radio" /> <span className="label-text">Sport </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="marg_bottom0">
                            <input type="radio" name="radio" /> <span className="label-text">History </span>
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="typolo">
                      <span>Durations :
                      </span>
                      <form>
                        <div className="form-check">
                          <label className="marg_bottom0">
                            <input type="radio" name="radio" checked /> <span className="label-text"> 2 - 4 Days </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="marg_bottom0">
                            <input type="radio" name="radio" /> <span className="label-text"> 2 - 3 Days </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="marg_bottom0">
                            <input type="radio" name="radio" /> <span className="label-text"> 2 - 5 Days </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="marg_bottom0">
                            <input type="radio" name="radio" /> <span className="label-text"> 2 - 6 Days </span>
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="typolo">
                      <span>Difficulty :
                      </span>
                      <form>
                        <div className="form-check">
                          <label className="marg_bottom0">
                            <input type="radio" name="radio" checked /> <span className="label-text">High  </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="marg_bottom0">
                            <input type="radio" name="radio" /> <span className="label-text">Low  </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="marg_bottom0">
                            <input type="radio" name="radio" /> <span className="label-text">Medium </span>
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="typolo">
                      <span>Min Age :
                      </span>
                      <form>
                        <div className="form-check">
                          <label className="marg_bottom0">
                            <input type="radio" name="radio" checked /> <span className="label-text"> 10 Years  </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="marg_bottom0">
                            <input type="radio" name="radio" /> <span className="label-text"> 25 Years  </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="marg_bottom0">
                            <input type="radio" name="radio" /> <span className="label-text"> 40 Years </span>
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <p>At Apna Visit, we are your gateway to the world's wonders. As a premier travel agency, we are committed to crafting unforgettable journeys tailored to your unique desires. Our experienced travel consultants are experts in unlocking the world's hidden gems, ensuring that your travel experiences are not just vacations, but adventures that will enrich your life. From exotic locales to hidden gems, we'll guide you through every step of your travel journey, from planning and booking to navigating local customs and discovering hidden treasures. Let Apna Visit be your personal travel concierge, making your travel dreams a seamless and unforgettable reality.
                  <br />
                  <br />
                  Embark on extraordinary journeys with Apna Visit. Experience personalized travel tailored to your dreams, crafted by our expert travel concierges. Let us transform your travel aspirations into unforgettable memories
                </p>
                <Link className="read_more" to="about.html">Read More</Link >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="customers">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="titlepage text_align_center">
                <h2>Customers Says </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div id="myCarousel" className="carousel slide customers_banne" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container-fluid">
                      <div className="carousel-caption relative">
                        <div className="test_box text_align_center">
                          <p>Apna Visit is a travel agency that I would highly recommend to anyone looking for a personalized and unforgettable travel experience. From the moment I first contacted Apna Visit, I was impressed by their professionalism and attention to detail. My travel consultant, [Consultant Name], took the time to understand my travel goals and budget, and then crafted a customized itinerary that exceeded my expectations.

                            I was amazed at the level of detail that Apna Visit went into, from booking my flights and accommodations to arranging local tours and activities. They also provided me with a wealth of information about my destination, including cultural tips and packing recommendations.

                            During my travels, I was always able to reach Apna Visit if I needed assistance. They were always prompt in responding to my inquiries and went above and beyond to ensure that I had a positive experience.

                            I am so grateful for Apna Visit for making my dream vacation a reality. I highly recommend them to anyone looking for a travel agency that will take care of everything, from start to finish.</p>
                          <i><img src={test22} alt="#" /></i>
                          <h4>Fitter Found</h4>
                          <span>Industry's standard </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <Footer/>
      </>
  )
}

export default Home
