/* eslint-disable no-script-url */
import React from 'react'
import '../assets/css/bootstrap-datepicker.min.css'
import '../assets/css/bootstrap.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.min.css'
import '../assets/css/icomoon.css'
import '../assets/css/nice-select.css'
import '../assets/css/owl.carousel.min.css'
import '../assets/css/niceCountryInput.css'
import '../assets/css/style.css'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const destinations = {
    Paris: ['Eiffel Tower', 'Louvre Museum', 'Arc de Triomphe'],
    SanFrancisco: ['Golden Gate Bridge', 'Alcatraz Island', 'Fishermans Wharf'],
    Canada: ['Niagara Falls', 'CN Tower', 'Butchart Gardens'],
    Australia: ['Sydney Opera House', 'Great Barrier Reef', 'Uluru'],
};

const Navbar = () =>
{
    const handleCountryChange = (event) =>
    {
        setCountry(event.target.value);
        setDestination('');
    };

    const handleDestinationChange = (event) =>
    {
        setDestination(event.target.value);
    };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [destination, setDestination] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [numberTravelers, setNumberTravelers] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');
    const handleSubmit = (e) =>
    {
        e.preventDefault();

        const formData = {
            name,
            email,
            country,
            destination,
            arrivalDate,
            departureDate,
            numberTravelers,
            specialRequests,
        };

        console.log('Form data:', formData);
        e.preventDefault();
        fetch('http://localhost:3005/api2/booking', {
            body: JSON.stringify({
                "name": name,
                "email": email,
                "country":country.replace,
                "destination": destination,
                "arrivalDate": arrivalDate,
                "departureDate":departureDate,
                "numberTravelers": numberTravelers,
                "specialRequests": specialRequests
            }),
            headers: { "Content-Type": "application/json" },
            method: 'POST',
        })
            .then(result => console.log(result))
            .catch(err => console.log(err))
    };

    return (
        <>
            <div className="header_midil">
                <div className="container">
                    <div className="row d_flex">
                        <div className=" col-md-2 col-sm-3 logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo">
                                        <Link><img src={logo} alt="#" /></Link >
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
                                        <li className="nav-item ">
                                            <Link className="nav-link" to="/">Home</Link >
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about">About</Link >
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/packages">Pakages </Link >
                                        </li>
                                        <li className="nav-item">

                                            <Link className="nav-link" to="/" data-bs-toggle="modal" data-bs-target="#bookinglabel" type="button" >Booking </Link >
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/blog">Blog</Link >
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">Contact</Link >
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/login">
                                                <button className="btn register-btn" type="button">Register Now</button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="modal fade" id="bookinglabel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className='formbooking' onSubmit={handleSubmit}>
                                    <h1>Apna Visit Booking Form</h1>
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />

                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                    />

                                    <label htmlFor="country">Country:</label>
                                    <select id="country" name="country" value={country} onChange={handleCountryChange} required>
                                        <option value="">Select a country</option>
                                        {Object.keys(destinations).map((country) => (
                                            <option key={country} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>

                                    {country && (
                                        <div>
                                            <label htmlFor="destination">Destination:</label>
                                            <select
                                                id="destination"
                                                name="destination"
                                                value={destination}
                                                onChange={handleDestinationChange}
                                                required
                                            >
                                                {destinations[country].map((destination) => (
                                                    <option key={destination} value={destination}>
                                                        {destination}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    )}

                                    <label htmlFor="arrivalDate">Arrival Date:</label>
                                    <input
                                        className='arrivald'
                                        type="date"
                                        id="arrivalDate"
                                        name="arrivalDate"
                                        value={arrivalDate}
                                        onChange={(event) =>
                                        {
                                            const today = new Date();
                                            const selectedDate = new Date(event.target.value);

                                            if (selectedDate >= today)
                                            {
                                                setArrivalDate(event.target.value);
                                            } else
                                            {
                                                alert('Invalid date. Please select a current or future date.');
                                            }
                                        }}
                                        required
                                    />


                                    <label htmlFor="departureDate">Departure Date:</label>
                                    <input
                                        className='departured'
                                        type="date"
                                        id="departureDate"
                                        name="departureDate"
                                        value={departureDate}
                                        onChange={(event) =>
                                        {
                                            const selectedDepartureDate = new Date(event.target.value);
                                            const selectedArrivalDate = new Date(arrivalDate);

                                            if (selectedDepartureDate >= selectedArrivalDate)
                                            {
                                                setDepartureDate(event.target.value);
                                            } else
                                            {
                                                alert('Invalid departure date. Please select a date on or after the arrival date.');
                                            }
                                        }}
                                        required
                                    />


                                    <label htmlFor="numberTravelers">Number of Travelers:</label>
                                    <input
                                        type="number"
                                        id="numberTravelers"
                                        name="numberTravelers"
                                        value={numberTravelers}
                                        onChange={(event) =>
                                        {
                                            if (event.target.value >= 0)
                                            {
                                                setNumberTravelers(event.target.value);
                                            }
                                        }}
                                        min="1"
                                        required
                                    />

                                    <label htmlFor="specialRequests">Special Requests:</label>
                                    <textarea
                                        id="specialRequests"
                                        name="specialRequests"
                                        value={specialRequests}
                                        onChange={(event) => setSpecialRequests(event.target.value)}
                                        required
                                    />

                                    <button className='book-btn' type="submit">Book Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*  */}
            {/*  */}
            {/*  */}

        </>
    )
}
export default Navbar
