import React from 'react';
import '../css/Contact.css';
import { useState } from "react";
import validator from 'validator'

function Contact() {
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
    } else {
        setEmailError('Enter valid Email!')
    }
    }


    return (
        <div className='contact'>
            <h1>New Episode Every Week!</h1>
            <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam.</p>
            <div className='contact_input'>
            
            
            <input type="text" id="userEmail" 
        onChange={(e) => validateEmail(e)} placeholder='Enter your email'></input>
        
            <button className='buttons_menu_subs'>Subscribe</button><br/>
        <span className='span' >{emailError}</span>
            
            </div>
        </div>
    );
}

export default Contact;