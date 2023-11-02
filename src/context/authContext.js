import { createContext, useEffect, useReducer } from "react"

// const INITIAL_STATE = {
//    user  : JSON.parse(localStorage.getItem("user")) || null,
//    loading : false,
//    error : null 
// }
const user = localStorage.getItem("user");
const parsedUser = user ? JSON.parse(user) : null;

const INITIAL_STATE = {
   user: parsedUser,
   loading: false,
   error: null
};
export const  AuthContext = createContext(INITIAL_STATE)

const AuthReduser = (state , action) => {
    switch(action.type) {
        case "REGISTER_START":
       return {
        user  : null ,
        loading : true,
        error : null 
       }  
       case "REGISTER_SUCCES":
        return {
         user  : action.payload ,
         loading : false,
         error : null 
        } 
        case "REGISTER_FAILURE":
            return {
             user  : null ,
             loading : false,
             error : action.payload 
            } 
       case "LOGIN_START":
       return {
        user  : null ,
        loading : true,
        error : null 
       }    
       case "LOGIN_SUCCES":
        return {
         user  : action.payload ,
         loading : false,
         error : null 
        }  
        case "LOGIN_FAILURE":
            return {
             user  : null ,
             loading : false,
             error : action.payload 
            }  
            case "LOGOUT":
                return {
                 user  : null ,
                 loading : false,
                 error : null 
                }  
       default:     
            return state
    }
}

export const AuthContextProvider =({children}) => {
    const [state , dispatch] = useReducer(AuthReduser , INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem("user" , JSON.stringify(state.user))
    },[state.user])
    return(
        <AuthContext.Provider value={{
             user : state.user,
             loading: state.loading , 
             error: state.error ,
             dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}