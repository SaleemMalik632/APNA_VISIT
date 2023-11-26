/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from

    'axios';
const Admin = () =>
{
    const [data, setData] = useState([]);

    const fetchData = async () =>
    {
        try
        {
            const response = await axios.get('http://localhost:3005/api/users');
            setData(response.data);
        } catch (error)
        {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() =>
    {
        fetchData();
    }, []);
    return (

        <>
            <nav className="mnb navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                    </div>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="#">En</Link></li>
                        <li className="dropdown">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Draude Oba <span className="caret"></span></Link>
                            <ul className="dropdown-menu">
                                <li><Link to="#">Settings</Link></li>
                                <li><Link to="#">Upgrade</Link></li>
                                <li><Link to="#">Help</Link></li>
                                <li role="separator" className="divider"></li>
                                <li><Link to="#">Logout</Link></li>
                            </ul>
                        </li>
                        <li><Link to="#"><i className="fa fa-bell-o"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-comment-o"></i></Link></li>
                    </ul>
                    <form className="navbar-form navbar-right">
                        <input type="text" className="form-control" placeholder="Search..." />
                    </form>
                </div>
            </nav >
            <div className="msb" id="msb">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <div className="brand-wrapper">
                            <div className="brand-name-wrapper">
                                <Link className="navbar-brand pl-2" to="#">
                                    Mr Saleem Malik
                                </Link>
                            </div>

                        </div>

                    </div>

                    <div className="side-menu-container">
                        <ul className="nav navbar-nav">

                            <li><Link to="#"><i className="fa fa-dashboard mt-3"></i> Dashboard</Link></li>
                            <li><Link to="#"><i className="mt-3 fa fa-heart"></i> Extras</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="mcw">
                <div className="cv">
                    <div>
                        <div className="inbox">
                            <div className="inbox-sb">
                            </div>
                            <div className="inbox-bx container-fluid">
                                <div className="row">
                                    <div className="col-md-2">
                                        <button className='btn btn-primary' onClick={fetchData}>get data</button>
                                    </div>
                                    <div className="col-md-10">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>City</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((user) => (
                                                    <tr key={user.id}>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.city}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Admin
