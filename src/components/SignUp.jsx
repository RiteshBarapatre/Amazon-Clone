import React, { useState } from "react";
import "../css/signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { auth,createUserWithEmailAndPassword } from "../firebase.js";

const SignUp = () => {
  const naviagte = useNavigate();

  const [inp, setInp] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const inpchanged = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
  };

  const signUpSubmit = (e) => {
    e.preventDefault();


     //********This is Backend Done by me But we are using firebase now */
    // axios({
    //   method: "post",
    //   url: "http://localhost:8000/user/v2/api/signup",
    //   headers: "content-type : application/json",
    //   data: {
    //     name: inp.name,
    //     phone: inp.phone,
    //     email: inp.email,
    //     password: inp.password,
    //   },
    // })
    //   .then()
    //   .catch((err) => console.log(err));
    //   naviagte('/')

    //*********Firebase Backend********* */

    try {
      createUserWithEmailAndPassword(auth,inp.email,inp.password).then((auth)=>{
        console.log(auth);
        naviagte('/')
      }).catch((err)=>{
        alert(err);
      })
    } catch (error) {
      alert(error)
    }

    
    
  };

  return (
    <div className="signup">
      <Link to="/">
        <img
          className="signup__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="signup__container">
        <h1>Sign-in</h1>

        <form onSubmit={signUpSubmit}>
          <h4>Name</h4>
          <input
            type="text"
            className="signup__email"
            placeholder="Enter Your Name..."
            onChange={inpchanged}
            name="name"
            value={inp.name}
          />
          <h4>Phone</h4>
          <input
            type="text"
            className="signup__email"
            placeholder="Enter Your Phone..."
            onChange={inpchanged}
            name="phone"
            value={inp.phone}
          />
          <h4>Email</h4>
          <input
            type="text"
            className="signup__email"
            placeholder="Enter Your Email..."
            onChange={inpchanged}
            name="email"
            value={inp.email}
          />

          <h4>Password</h4>
          <input
            type="password"
            className="signup__password"
            placeholder="Enter Your Password..."
            onChange={inpchanged}
            name="password"
            value={inp.password}
          />

          <button type="submit" className="signup__signInButton">
            Sign Up
          </button>
        </form>

        <p>By login You are accepting our terms and Conditions *</p>

        <h5 style={{ marginTop: "10px" }}>
          Already have an Amazon Account ? Sign In :{" "}
        </h5>
        <Link to="/login">
          <button className="signup__registerButton" type="submit">
            Sign In to your Amazon Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
