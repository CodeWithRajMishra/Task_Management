import React from "react";
import { useState } from "react";
import axios from "axios";
import {message} from "antd";
import { useNavigate } from "react-router-dom";
const Login=()=>{
  const [userid, setUserID] = useState("");
  const [password, setPassword]=useState("");
  const [usertype, setUsertype] =useState("");
  const navigate= useNavigate();

 const handleSubmit=async()=>{
  
      if (usertype=="admin")
      {           
           try {
            let api="https://task-management-2gc9.onrender.com/admin/adminlogin";
            const response= await axios.post(api, {userid:userid, password:password});
            console.log(response.data);
            if (response.status==200)
            {
              console.log(response.data);
              localStorage.setItem("adminname", response.data.username);
              localStorage.setItem("adminid", response.data.userid);
              message.success("Login Succesfully!");
              navigate("/admindashboard");

            }
           } catch (error) {
            message.error(error.response.data.msg);
           }
      }
      else 
      if (usertype=="employee")
      {
         try {
             
          let api="https://task-management-2gc9.onrender.com/employee/employeelogin";
          const response= await axios.post(api, {userid:userid, password:password});
          console.log(response.data);
           if (response.status==200)
           {
             localStorage.setItem("empname", response.data.empname)
             localStorage.setItem("empemail",  response.data.email)
             localStorage.setItem("empid", response.data._id);
              message.success("Login Succesfully!");

             navigate("/userdashboard")
           }

         } catch (error) {
          message.error(error.response.data.msg);
         }

      }


 }




  return(
        <>
        <center>
    <div className="d-flex flex-column ms-5">
      <div className="text-center">
        <img src="src\images\img1.jpg"
          style={{width: '185px'}} alt="logo" />
        <h4 className="mt-1 mb-5 pb-1">We are The Team</h4>
      </div>

      <p>Please login to your account</p>

        <input type="text"  placeholder="Enter your ID" value={userid} onChange={(e)=>{setUserID(e.target.value)}} />
        <br/>
        <br/>
        <input type="password" placeholder="Enter your Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <br/>
        <br/>

      <select name="usertype" id="" value={usertype} onChange={(e)=>{setUsertype(e.target.value)}}>
        <option value="">Login as a ......</option>
        <option value="admin">Admin</option>
        <option value="employee">Employee</option>
      </select>
      <br/>
      <br />
      <button onClick={handleSubmit}>Login</button>

     

    </div>

</center>

        </>
    )
}
export default Login;