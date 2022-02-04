import React, {  useEffect }  from 'react';
import '../css/Podcasts.css'
import Cards from './Cards';
import {useSelector,useDispatch} from "react-redux";
import {GET_PODCAST} from '../redux/actions'


function Podcasts() {
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(GET_PODCAST());
        }, []);

    const {podcast}=useSelector((state)=>state.allInfo)

    

    return podcast && podcast.length ?(
        <div className='podcast_section2'>
            <h1 className='h1_podcasts'>Latest Podcast Episodes</h1>
            <button className='buttons_menu3'>View All</button>

            {podcast.map((i,idx)=>{               
                if(idx<=2){

                return(
                    
                <Cards season={i.acf.season} title={i.title.rendered} date={i.meta.date_recorded} content={i.acf.description} img={i.meta.cover_image} tag={i.acf.tag}/>              
            
            )     
        }           
            }
            )}

            <button className='buttons_menu5'>Show more episodes</button>
        </div>
    ):null;
}

export default Podcasts;