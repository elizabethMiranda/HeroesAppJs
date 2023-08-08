import { types } from "../types/types";

export const authReducer = ( state = {}, action ) =>{

    switch (action.type) {
        case types.login:
            console.log('ejecuta la funcion login');
            return{
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logout:
            console.log('ejecuta la funcion de logout');
            return{
                logged: false
            };
        default:
            return state;
    }
}