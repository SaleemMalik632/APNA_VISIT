import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';
const handleSubmit = (event) => {
    event.preventDefault();

};
const Contact = () => {
    return (

        <>
            <Navbar/>
            <form onSubmit={handleSubmit}>
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="titlepage text_align_center">
                                <h2>Contact Us</h2>
                            </div>
                        </div>
                        <div className="col-md-8 offset-md-2">
                            <form id="request" className="main_form">
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <input className="cont_in" placeholder="Full Name" type="type" name=" Name"/>
                                    </div>
                                    <div className="col-md-12">
                                        <input className="cont_in" placeholder="Your Email" type="type" name="Email"/>
                                    </div>
                                    <div className="col-md-12">
                                        <input className="cont_in" placeholder="Phone Number" type="type" name="Phone Number"/>
                                    </div>
                                    <div className="col-md-12">
                                        <textarea className="textarea2" placeholder="Message" type="type" name="Message"> </textarea>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="send_btnt" type="submit">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        </div>
                </div>
            </div>
            </form>    
            <Footer />
        </>
    );
}

export default Contact
