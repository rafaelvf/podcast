import React, {  useEffect }  from 'react';
import '../css/Podcasts.css'
import Cards from './Cards';
import {useSelector,useDispatch} from "react-redux";
import {GET_PODCAST} from '../redux/actions'

function AllPodcasts(props) {
    
        const dispatch = useDispatch();

        useEffect(() => {
    
            dispatch(GET_PODCAST());
            }, []);
    
        const {podcast}=useSelector((state)=>state.allInfo)
    
        
    
        return podcast && podcast.length ?(
            <div className='podcast_section2'>
                <h1 className='h1_podcasts'>All Podcast Episodes</h1>
                
    
                {podcast.map((i,idx)=>{               
                    
    
                    return(
                        
                    <Cards season={i.acf.season} title={i.title.rendered} date={i.meta.date_recorded} content={i.acf.description} img={i.meta.cover_image} tag={i.acf.tag}/>              
                
                )     
                       
                }
                )}
    
                {/* <button className='buttons_menu5'>Show more episodes</button> */}
            </div>
        ):null;
    }

export default AllPodcasts;


