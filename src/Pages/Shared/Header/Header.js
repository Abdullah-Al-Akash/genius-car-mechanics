import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
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
                                                        <li class="nav-item">
                                                                <a class="nav-link active" aria-current="page" href="#services">Services</a>
                                                        </li>
                                                        <li class="nav-item">
                                                                <a class="nav-link active" aria-current="page" href="#experts">Our Experts</a>
                                                        </li>
                                                        <li class="nav-item">
                                                                <div className="btn btn btn-success">Login</div>
                                                        </li>

                                                </ul>
                                        </div>
                                </div>
                        </nav >
                </div >
        );
};

export default Header;