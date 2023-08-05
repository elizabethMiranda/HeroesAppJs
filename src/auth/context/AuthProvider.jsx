import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from '../types/types';


const init = () => {
  const user = JSON.parse( localStorage.getItem('user') );
  console.log('ejcutando la funcion inicializadora');
  console.log(user);
  return {
    logged: !!user,
    user: user,
  }
}

export const AuthProvider = ({ children }) => {

  //Almacenar el usuario y ver que usuario es
  const [authState, dispatch] = useReducer( authReducer,{}, init);

    const login = (name = '') => {

      const user = { id: 'ABC', name}

      const action = {
        type: types.login,
        payload: user
      }

      localStorage.setItem('user', JSON.stringify( user ));
      console.log('llamando a la funcion que ejecuta la accion de login')
      dispatch(action);

    }

    const logout = () =>{
      localStorage.removeItem('user');
      const action = {};
      dispatch();
    }

    return (
    <AuthContext.Provider value={{
      ...authState,
      login: login
    }}>
        { children }
    </AuthContext.Provider>
  )
}
