// import React, { useContext, useState } from 'react'
// import "./register.css"
// import { AuthContext } from '../../context/authContext'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// const Register = () => {
//     const [ credentials , setCredentials] =  useState({
//         username: undefined, 
//         password: undefined
//     })

//     const { loading , error ,dispatch } = useContext(AuthContext)

//     const navigate = useNavigate()

//     const handleChange = (e) => {
//         setCredentials(prev => ({...prev , [e.target.id]:e.target.value}))
//     }

//     const handleClick = async(e) => {
//         e.preventDefault()
//         dispatch({type: "REGISTER_START"})
//         try {
//             const res =await  axios.post("/auth/register" , credentials)
//             dispatch({type: "REGISTER_SUCCES" , payload: res.data.details})
//             navigate("/")
//         } catch (err) {
//             dispatch({type: "REGISTER_FAILURE" ,payload:  err.response.data})
//         }
//     }
//   return (
//     <div>
//          <div className="container">
//         <div className="title">Registation</div>
//         <form>
//             <div className="user_details">
//                 <div className="input_pox">
//                     <span className="datails">Username</span>
//                     <input type="text" placeholder="enter your Username" required/>
//                 </div>
//                 <div className="input_pox">
//                     <span className="datails">Email</span>
//                     <input type="text" placeholder="enter your Email" required/>
//                 </div>
//                 <div className="input_pox">
//                     <span className="datails">Country</span>
//                     <input type="text" placeholder="enter your Country" required/>
//                 </div>  
//                 <div className="input_pox">
//                     <span className="datails">City</span>
//                     <input type="text" placeholder="enter your City" required/>
//                 </div>
//                 <div className="input_pox">
//                     <span className="datails">Phone Number</span>
//                     <input type="text" placeholder="enter your Phone" required/>
//                 </div>
//                 <div className="input_pox">
//                     <span className="datails">Password</span>
//                     <input type="text" placeholder="enter your Password" required/>
//                 </div>
                
//             </div>
            
//             <div className="button">
//                 <input type="submit" value="Register"/>
//             </div>
//         </form>
//     </div>
//     </div>
//   )
// }

// export default Register




import React, { useContext, useState } from 'react';
import "./register.css";
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post("/auth/register", credentials);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
      navigate("/login");
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }
  }
console.log(credentials);
  return (
    <div>
      <div className="container">
        <div className="title">Registration</div>
        <form onSubmit={handleClick}>
          <div className="user_details">
            <div className="input_pox">
              <span className="details">Username</span>
              <input
                type="text"
                id="username"
                placeholder="Enter your Username"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input_pox">
              <span className="details">Email</span>
              <input
                type="text"
                id="email"
                placeholder="Enter your Email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input_pox">
              <span className="details">Country</span>
              <input
                type="text"
                id="country"
                placeholder="Enter your Country"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input_pox">
              <span className="details">City</span>
              <input
                type="text"
                id="city"
                placeholder="Enter your City"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input_pox">
              <span className="details">Phone Number</span>
              <input
                type="number"
                id="phoneNumber"
                placeholder="Enter your Phone Number"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input_pox">
              <span className="details">Password</span>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

// import React, { useContext, useState } from 'react';
// import './register.css';
// import { AuthContext } from '../../context/authContext';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Register = () => {
//   const [credentials, setCredentials] = useState({
//     username: '',
//     email: '',
//     password: '',
//     country: '',
//     city: '',
//     phoneNumber: ''
//   });
//   const { loading, error, dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();

//     // Validatsiya logikasi
//     if (
//       !credentials.username ||
//       !credentials.email ||
//       !credentials.password ||
//       !credentials.country ||
//       !credentials.city ||
//       !credentials.phoneNumber
//     ) {
//       dispatch({ type: 'REGISTER_FAILURE', payload: 'Please enter all required information' });
//       return;
//     }

//     // Email validatsiyasi
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(credentials.email)) {
//       dispatch({ type: 'REGISTER_FAILURE', payload: 'Please enter a valid email address' });
//       return;
//     }

//     // Parol uzunligi validatsiyasi
//     if (credentials.password.length < 6) {
//       dispatch({ type: 'REGISTER_FAILURE', payload: 'Password should be at least 6 characters long' });
//       return;
//     }

//     // Boshqa validatsiya shartlarni qo'shing...

//     dispatch({ type: 'REGISTER_START' });
//     try {
//       const res = await axios.post('/auth/register', credentials);
//       dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
//       navigate('/login');
//     } catch (err) {
//       dispatch({ type: 'REGISTER_FAILURE', payload: err.response.data });
//     }
//   };

//   console.log(credentials);

//   return (
//     <div>
//       <div className="container">
//         <div className="title">Registration</div>
//         <form onSubmit={handleClick}>
//           <div className="user_details">
//             <div className="input_pox">
//               <span className="details">Username</span>
//               <input
//                 type="text"
//                 id="username"
//                 placeholder="Enter your Username"
//                 required
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="input_pox">
//               <span className="details">Email</span>
//               <input
//                 type="text"
//                 id="email"
//                 placeholder="Enter your Email"
//                 required
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="input_pox">
//               <span className="details">Password</span>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Enter your Password"
//                 required
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="input_pox">
//               <span className="details">Country</span>
//               <input
//                 type="text"
//                 id="country"
//                 placeholder="Enter your Country"
//                 required
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="input_pox">
//               <span className="details">City</span>
//               <input
//                 type="text"
//                 id="city"
//                 placeholder="Enter your City"
//                 required
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="input_pox">
//               <span className="details">Phone Number</span>
//               <input
//                 type="text"
//                 id="phone"
//                 placeholder="Enter your Phone Number"
//                 // required
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div className="button">
//             <input type="submit" value="Register" />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;