import React, {  useEffect } from 'react';
import '../css/Blog.css'
import Carousela from './Carousel';
import Carousel from 'react-elastic-carousel';
import {useSelector,useDispatch} from "react-redux";
import {GET_BLOGS} from '../redux/actions'

function Blog() {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(GET_BLOGS());
        }, []);

    const {posts}=useSelector((state)=>state.allInfo)


    return posts && posts.length ? (

        <div className='blog'>
            <h1>Blog Posts</h1>
            <div className='blog_carousel'>
                <Carousel>

                { posts.map((i)=>{

                        return(

                        <Carousela key={i.id} date={i.acf.date} author={i.acf.authot} source={i.acf.source} title={i.title.rendered} content={i.acf.summary}  />
                        
                        )
                })}
                </Carousel>
            </div>
        </div>
    ):null;
}

export default Blog;