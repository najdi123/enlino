import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import header from "../images/tls_header.png";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-toggleable header sticky">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">Menu</span>
                </button>
                <div className="container">
                    <Link className="navbar-brand" to="/">ENLINO ENGINEERING SOLUTIONS
                        راه کارهای مهندسی انلینو</Link>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">خانه <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">خدمات</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/education">آموزش</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">درباره</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;

