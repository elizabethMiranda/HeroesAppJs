import { types } from "../types/types";

export const authReducer = ( state = {}, action ) =>{
    console.log('datos recibidos del state');
    console.log(state);
    console.log('datos recibidos del action');
    console.log(action);
    switch (action.type) {
        case types.login:
            return{
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logout:
            return{
                logged: false
            };
        default:
            return state;
    }
}