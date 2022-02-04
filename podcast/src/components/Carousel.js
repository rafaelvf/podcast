import React from 'react';
import '../css/Carousel.css'

function Carousel(props) {

    const {author,title,date, content,source}=props;
    return (
        <div className='carousel'>
            <p className='carousel_p'>By {author}</p>
            <p>{date}</p>
            <p>{source}</p>
            <h1>{title}</h1>
            <p>{content}</p>
            <button className='buttons_menu6'>Read More</button>
        </div>
    );
}

export default Carousel;