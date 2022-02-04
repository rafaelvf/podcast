import { ActionTypes } from "./action-types"
import axios from "axios";


export const GET_PODCAST=()=>{//esta action me trae todos los paises.
    
    return async function (dispatch){
        const res= await axios.get("http://localhost/wordpress/wp-json/wp/v2/podcast");
    dispatch({
        type: ActionTypes.GET_PODCAST,
        payload: res.data,
    })
    }}

export const GET_BLOGS=()=>{//esta action me trae todos los paises.
    
        return async function (dispatch){
            const res= await axios.get("http://localhost/wordpress/wp-json/wp/v2/posts");
        dispatch({
            type: ActionTypes.GET_BLOGS,
            payload: res.data,
        })
        }}

export const GET_IMAGES=()=>{//esta action me trae todos los paises.
    
            return async function (dispatch){
                const res= await axios.get("http://localhost/wordpress/wp-json/wp/v2/pages");
            dispatch({
                type: ActionTypes.GET_IMAGES,
                payload: res.data,
            })
            }}