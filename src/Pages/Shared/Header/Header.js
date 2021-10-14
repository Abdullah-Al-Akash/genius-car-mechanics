import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
        const { user, logOut } = useAuth();
        return (
                <div>
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top fw-bold">
                                <div class="container">
                                        <NavLink to="/" class="navbar-brand" href="#">Genius Car Mechanic</NavLink>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                                        <li class="nav-item">
                                                                <Link style={{ textDecoration: 'none' }} exact to="/home">
                                                                        <a class="nav-link active" aria-current="page" href>Home</a>
                                                                </Link>
                                                        </li>
                                                        {
                                                                user?.email ?
                                                                        <li class="nav-item">
                                                                                <img src={user.photoURL} className="img-fluid rounded-circle border border-3 border-dark me-3" width="40" alt="" />
                                                                        </li> :
                                                                        " "
                                                        }
                                                        {
                                                                user?.displayName ?
                                                                        <li class="nav-item">
                                                                                <Link to="">
                                                                                        <button onClick={logOut} className="btn btn btn-success">Log Out <i class="fas fa-sign-in-alt"></i></button>
                                                                                </Link>
                                                                        </li>
                                                                        :
                                                                        <li class="nav-item">
                                                                                <Link to="/login">
                                                                                        <button className="btn btn btn-success">Login <i class="fas fa-sign-in-alt"></i></button>
                                                                                </Link>
                                                                        </li>
                                                        }

                                                </ul>
                                        </div>
                                </div>
                        </nav >
                </div >
        );
};

export default Header;