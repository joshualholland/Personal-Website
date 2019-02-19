import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-secondary p-3">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand text-primary ml-3" style={{ fontWeight: 'bold' }}>
                    <img src='images/myLogo.png' className="d-inline-block align-top mx-auto" width="40" height="40"></img>
                </a>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active mr-5">
                        <Link to='/' className="nav-link text-primary" style={{ fontWeight: 'bold' }}>Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item mr-5">
                        <Link to='/blogs' className="nav-link text-primary" style={{ fontWeight: 'bold' }}>Blog</Link>
                    </li>
                    <li className="nav-item mr-5">
                        <Link to='/contact' className='nav-link text-primary' style={{ fontWeight: 'bold' }}>Contact</Link>
                    </li>
                    <li className='nav-item'>
                        <a href='/resume/resume.pdf' target='_blank' className='btn btn-outline-primary text-white'>Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;