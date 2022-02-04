import { ActionTypes } from "./action-types"

const initialState ={
    podcast:{},
    posts:{},
    pages:{}
}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.GET_PODCAST://cambiar
            return{...state,
                podcast:action.payload,//eesta la que va cambiando
                // everyCountry:action.payload//esta es la que no tengo que modificar
            } 
            case ActionTypes.GET_BLOGS://cambiar
            return{...state,
                posts:action.payload,//eesta la que va cambiando
                // everyCountry:action.payload//esta es la que no tengo que modificar
            } 
            case ActionTypes.GET_IMAGES://cambiar
            return{...state,
                pages:action.payload,//eesta la que va cambiando
                // everyCountry:action.payload//esta es la que no tengo que modificar
            } 
                    
        default:
            return state;
    }
}
