import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
// import pic from '../images/optimized-studio-wide-1500x630.jpg';
import Parallax from '../components/Parallax.jsx';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                {/*<img src={pic} width="1500" height="630"  alt="Product photography photo studio"  style={{left: 0}} />*/}
                <div className="container-fluid">
                    <Parallax/>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;