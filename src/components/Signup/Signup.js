import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () =>
{
    const [email, setemail] = React.useState();
    const [password, setpassword] = React.useState();
    const [name, setname] = React.useState();
    const handleSubmit = (e) =>
    {
        console.log(name);
        e.preventDefault();
        fetch('http://localhost:3005/api/users', {
            body: JSON.stringify({
                "name":name,
                "email": email, 
                "password": password
                }),
                headers: { "Content-Type": "application/json" },
                method:'POST',
        })
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }
    return (
        <>
            <div className="container kio">
                <div className="screen">
                    <div className="screen__content">
                        <form onSubmit={handleSubmit} className="login">
                            <h1 className='signup-head'>Sign Up</h1>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="name" className="login__input" placeholder="Email"
                                    onChange={(e) => setemail(e.target.value)}
                                />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="name" className="login__input" placeholder="Full Name" 
                                    onChange={(e) => setname(e.target.value)}

                                />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" placeholder="Password" 
                                    onChange={(e) => setpassword(e.target.value)}
                                />
                            </div>
                            <button  className="button login__submit">
                                <span onSubmit={handleSubmit} className="button__text">Sign Up</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                            <div className="container">
                            <Link to="/login" className='cnacc'>Already Have a Account</Link>
                                <br />
                                <Link className='exit-btn' to="/">Exit</Link>
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

export default Signup
