import React, {  useEffect } from 'react';
import '../css/Gallery.css';
import nature from '../img/nature.jpg';
import {useSelector,useDispatch} from "react-redux";
import {GET_IMAGES} from '../redux/actions';

function Gallery() {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(GET_IMAGES());
        }, []);

    const {pages}=useSelector((state)=>state.allInfo)

    console.log(pages,'pos')



    return pages && pages.length ?(
        <div>
            <h1 className='gallery_h1'>Our Gallerys</h1>
        <div className='gallery'>
            {pages.map((i)=>{
                return(
            <div key={i.id} className='gallery_div'>
            <img src={i.acf.image.url} alt='foto' className='gallery_img'/>
            </div>
                )
            })}
            {/* <div className='gallery_div'>
            <img src={nature} alt='foto'className='gallery_img'/>
            </div>
            <div className='gallery_div'>
            <img src={nature} alt='foto'className='gallery_img'/>
            </div>
            <div className='gallery_div'>
            <img src={nature} alt='foto'className='gallery_img'/>
            </div>
            <div className='gallery_div'>
            <img src={nature} alt='foto'className='gallery_img'/>
            </div>
            <div className='gallery_div'>
            <img src={nature} alt='foto'className='gallery_img'/>
            </div>
            <div className='gallery_div'>
            <img src={nature} alt='foto'className='gallery_img'/>
            </div>
            <div className='gallery_div'>
            <img src={nature} alt='foto'className='gallery_img'/>
            </div>
            <div className='gallery_div'>
            <img src={nature} alt='foto'className='gallery_img'/>
            </div>
            <div className='gallery_div'>
            <img src={nature} alt='foto'className='gallery_img'/>
            </div>
            <div className='gallery_div'>
            <img src={nature} alt='foto'className='gallery_img'/>
            </div>
            <div className='gallery_div'>
            <img src={nature} alt='foto'className='gallery_img'/>
            </div> */}
        </div>
        </div>
    ):null;
}

export default Gallery;