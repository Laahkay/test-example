import React from 'react'
import Axios from 'axios';

const getBlogs = async () =>{

  const token = localStorage.getItem("token")
  
  const response = Axios.get('http://localhost:4000/blog', {
    headers: {
      'Authorization': `${token}`,
      'Accept'       : 'application/json'
     }
 })

 console.log("response" , response)
}



function Blogs() {
  return (
    <div>  Blogs</div>
  )
}

export default Blogs