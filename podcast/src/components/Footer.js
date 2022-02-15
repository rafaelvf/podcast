import React from 'react';
import '../css/Footer.css'
import logo from '../img/logo2.png'
import { FaSpotify, FaGoogle, FaApple, FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype  } from "react-icons/fa";


function Footer() {
    return (
        <div className='footer'>
            <div className='uno'>
                <img src={logo} alt='logo'/>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. </p>
                <ul className="uno_ul">
                    <li>
                        <FaFacebookF />
                    </li>
                    <li>
                        <FaInstagram />
                    </li>
                    <li>
                        <FaLinkedinIn />
                    </li>
                    <li>
                        <FaSkype />
                    </li>
                </ul>

                <div className='uno_ul_mobile'>
                <p><FaFacebookF /></p>
                <p><FaInstagram /></p>
                <p><FaLinkedinIn /></p>
                <p><FaSkype /></p>

                </div>


            </div>

            <div className='dos'>
                <h3>Pages</h3>
                
                <p>About</p>
                <p>Episode</p>
                <p>Blog</p>
                <p>Contact</p>

            </div>

            <div className='tres'>
                <h3>Recent Episodes</h3>
                
                <p>Episode 1</p>
                <p>Episode 2</p>
                <p>Episode 3</p>
                <p>Episode 4</p>
            </div>

            <div className='cuatro'>
            <h3>Listen My Podcasts Also In</h3>
            <p>
            <FaSpotify />
            </p>
            
            <p>
            <FaGoogle />
            </p>
            <p>
            <FaApple />
            </p>
        
            </div>
        </div>
    );
}

export default Footer;