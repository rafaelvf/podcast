import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Carousel.css'

function Carousel(props) {

    const {author,title,date, content,source,id}=props;
    return (
        <div className='carousel'>
            <p className='carousel_p'>By {author}</p>
            <p>{date}</p>
            <p>{source}</p>
            <h1>{title}</h1>
            <p>{content}</p>
            <Link to={`/blog/${id}`}>
            <button className='buttons_menu6'>Read More</button>
            </Link>
        </div>
    );
}

export default Carousel;