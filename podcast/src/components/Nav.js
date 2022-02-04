import React from 'react';
import '../css/Nav.css'
import logo from '../img/logo.png'

function Nav() {
    return (
        <div className='nav'>
            
            <img src={logo} alt='NicaSource'/>
            <div className='menu'>
                <a href="#" className='a'>Home</a>
                <a href="#" className='a'>About</a>
                <a href="#" className='a'>Episode</a>
                <a href="#" className='a'>Blog</a>
                <a href="#" className='a'>Contact</a>
            </div>

            <div className='botones_menu'>
            <button className='buttons_menu'>Subscribe</button>
            <button className='buttons_menu2'>Sing-In</button>
            </div>
        </div>
    );
}

export default Nav;