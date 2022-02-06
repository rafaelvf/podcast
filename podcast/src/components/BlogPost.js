import React, { useEffect } from "react";
import { useParams } from 'react-router';
import {useSelector,useDispatch} from "react-redux";
import {GET_BLOGS} from '../redux/actions'

function BlogPost(props) {
    const {ID}=useParams();
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(GET_BLOGS());
        }, []);

    const {posts}=useSelector((state)=>state.allInfo)

    console.log(ID,'jj')
    console.log(posts[0].id,'id')

    return posts && posts.length ? (
        <>
        {posts.map((i)=>{
            if(i.id==ID){

                return(


                    <div>
                        <div className='carousel'>
                        <p className='carousel_p'>By {i.acf.authot}</p>
                        <p>{i.acf.date}</p>
                        <p>{i.acf.source}</p>
                        <h1>{i.title.rendered}</h1>
                        <p>{i.acf.summary}</p>
                        
                    </div>
                    </div>
                )

            }


        })}
        </>
    ):null;
}

export default BlogPost;