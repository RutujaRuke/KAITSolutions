import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-custom">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <div className='karishnaAcademy'>

                                {/* <img className='image-icon' src="https://drive.google.com/file/d/1b_n43VK7ZCM0roYeUx6x3WvEiaAWqcFb/view?usp=sharing" alt="Logo" /> */}

                                <div>Karishna Academy</div>
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technologies</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/service">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/client">Client</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/career">Career</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/action">Action</Link></li>
                                        <li><Link className="dropdown-item" to="/another-action">Another action</Link></li>
                                        <li><Link className="dropdown-item" to="/something-else">Something else here</Link></li>
                                    </ul>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>

            
        </>
    )
}

export default Navbar;