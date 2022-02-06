import React from 'react';
import '../css/Nav.css'
import logo from '../img/logo.png'

function Nav() {
    return (
        <div className='nav'>
            
            <img src={logo} alt='NicaSource'/>
            <div className='menu'>
                <a href="/" className='a'>Home</a>
                {/* <a href="#" className='a'>About</a> */}
                <a href="#podcast" className='a'>Episode</a>
                <a href="#blog" className='a'>Blog</a>
                <a href="#footer" className='a'>Contact</a>
            </div>

            <div className='botones_menu'>
            <a href='#subcribe' className='boton_m'>
            Subscribe
            {/* <button className='buttons_menu2'>Sing-In</button> */}
            </a>
            </div>
        </div>
    );
}

export default Nav;