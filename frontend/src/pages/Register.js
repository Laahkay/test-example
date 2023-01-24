import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const route = useNavigate()
   const [registerDetails, setRegisterDetails] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    // valid password and password confirm

    const response = await Axios.post("http://localhost:4000/register", {
      name: registerDetails.name,
      password: registerDetails.password,
      email: registerDetails.email,
      role: ["Student"]
    });


    console.log(response)
    if(response){
       localStorage.setItem("token" , response.data.token)
      route('/blogs')
    }
  }

  const handleChange = (e) => {
    setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="name"
          onChange={handleChange}
          name="name"
          placeholder="Name"
        />
        <input
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="Email"
        />
        <input
          type="text"
          onChange={handleChange}
          name="password"
          placeholder="password"
        />
        <input
          type="text"
          onChange={handleChange}
          name="=confirm"
          placeholder="Confirm Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
