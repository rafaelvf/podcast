import React from 'react';
import '../css/Cards.css'
import coding from '../img/coding.jpg'

function Cards(props) {
    
    const {season,title,date, content,img, tag}=props;

    

    return (
        <div className='card'>
            <div className='foto'>
                <img src={img} alt='foto'/>
            </div>
            <div className='title'>
                <h1>{title}</h1>
                <p>{content}</p>
                <button className='buttons_menu4'>Know more</button>
            </div>
            <div className='card_ul'>
                <ul>
                    <li># Season {season}</li>
                    <li># Posted on {date}</li>
                    <li># {tag}</li>
                </ul>
            </div>
            
        </div>
    );
}

export default Cards;