import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import '../css/Container.css'
import Principal from './Principal';
import Podcasts from './Podcasts';
import Blog from './Blog';
import Gallery from './Gallery';
import Contact from './Contact';

function Container() {
    return (
        <div className='ct'>
            <section className='header'>
                <Nav/>
                <Principal/>
            </section>

            <section id='podcast'>
                <Podcasts/>
            </section>

            <section id='blog'>
                <Blog/>
            </section>

            <section id='gallery'>
                <Gallery/>
            </section>

            <section id='subcribe'>
                <Contact/>
            </section>

            <Footer>
                
            </Footer>
        </div>
    );
}

export default Container;