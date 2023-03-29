import React from "react";
import "../css/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase.js";

const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const naviagte = useNavigate();
  const userlogin = async (e)=>{
    e.preventDefault()

    //********This is Backend Done by me But we are using firebase now */
    // try {
    //   await axios({
    //     method: "post",
    //     url: "http://localhost:8000/user/v2/api/signin",
    //     headers: "content-type : application/json",
    //     data: {
    //       email: email,
    //       password: password,
    //     },
    //   })
  
    //   naviagte('/')
    // } catch (error) {
    //   window.alert("Wrong Credentials")
    // }

    // *******Backend using Firebase */

    try {
      signInWithEmailAndPassword(auth,email,password).then((auth)=>{
        console.log(auth);
        naviagte('/')
      }).catch((err)=>{
        alert(err);
      })
    } catch (error) {
      alert(error)
    }
  }
  
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form onSubmit={userlogin}>
          <h4>E-mail</h4>
          <input type="text" className="login__email" placeholder="Enter Your Email..." onChange={(e)=>setEmail(e.target.value)}/>

          <h4>Password</h4>
          <input type="password" className="login__password" placeholder="Enter Your Password..." onChange={(e)=>setPassword(e.target.value)}/>

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>


        <h5 style={{marginTop : "10px"}}>Not have an Amazon Account ? Create One : </h5>
      <Link to="/signup">
        <button className="login__registerButton">
          Create your Amazon Account
        </button>
      </Link>
      </div>
    </div>
  );
};

export default Login;
