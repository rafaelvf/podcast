import React from 'react';
import '../css/Contact.css'
function Contact() {
    return (
        <div className='contact'>
            <h1>New Episode Every Week!</h1>
            <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam.</p>
            <div className='contact_input'>
            <input typeof='email' placeholder='Type your email'></input>
            <button className='buttons_menu_subs'>Subscribe</button>
            </div>
        </div>
    );
}

export default Contact;