import { useContext, useState } from "react"
import "./login.css"
import { AuthContext } from "../../context/authContext"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

function Login() {
    const [ credentials , setCredentials] =  useState({
        username: undefined, 
        password: undefined
    })
    const { loading , error ,dispatch } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials(prev => ({...prev , [e.target.id]:e.target.value}))
    }

    const handleClick = async(e) => {
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
        try {
            const res =await  axios.post("/auth/login" , credentials)
            dispatch({type: "LOGIN_SUCCES" , payload: res.data.details})
            navigate("/")
        } catch (err) {
            dispatch({type: "LOGIN_FAILURE" ,payload:  err.response.data})
        }
    }

  return (
    // <div classNameName="Login">
    //     <div classNameName="lContainer">
    //         <input type="text" placeholder="username"  id="username" onChange={handleChange} classNameName="LInput" />
    //         <input type="password" placeholder="password"  id="password" onChange={handleChange} classNameName="LInput" />
    //         <button disabled={loading} onClick={handleClick} classNameName="LButton">Login</button>
    //         {error && <span>{error.message}</span>}
    //     </div>

    // </div>
   <>
    <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 

   <div className="signin"> 

    <div className="content"> 

     <h2>Sign In</h2> 

     <div className="form"> 

      <div className="inputBox"> 

       <input type="text" placeholder="username"  id="username" onChange={handleChange}   required/> 

      </div> 

      <div className="inputBox"> 

       <input type="password" placeholder="password"  id="password" onChange={handleChange}   required/>

      </div> 

      <div className="links">
         {/* <a href="#">Forgot Password</a>     */}
         <Link to="/register">SignUp</Link>

      </div> 

      <div className="inputBox">
      <input disabled={loading} onClick={handleClick} type="submit" value="Login"/> 

      </div> 

     </div> 

    </div> 

   </div> 

  </section>
   </>
  )
}

export default Login