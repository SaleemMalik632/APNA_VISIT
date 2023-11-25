import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () =>
{
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        let response = await fetch('http://localhost:3005/api/login', {
            body: JSON.stringify({
                "email": email,
                "password": password
            }),
            headers: { "Content-Type": "application/json" },
            method: 'POST',
        })
        console.log(response);
    }   
    return (
        <>
            <div className="container kio">
                <div className="screen">
                    <div className="screen__content">
                        <form onSubmit={handleSubmit} className="login">
                            <h1 className='login-head'>Login</h1>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="name" className="login__input" placeholder="Email"
                                    onChange={(e) => setemail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" placeholder="Password"
                                    onChange={(e) => setpassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="button login__submit">
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                            <div className="container">
                                <Link to="/signup" className='cnacc'>Create a New Account</Link>
                                <br />
                                <Link to="/">Exit</Link>
                            </div>
                        </form>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
