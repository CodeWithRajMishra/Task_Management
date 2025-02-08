import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import {message} from "antd";
const CreateUser=()=>{
    const [input, setInput] = useState({});    
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const handleSubmit=async(e)=>{
      e.preventDefault();
     let api="https://task-management-2gc9.onrender.com/admin/usercreate";
     try {
         const response= await axios.post(api, input);
         console.log(response.data);
         message.success("User succesfully created!!");
        
     } catch (error) {
         console.log(error)
     }

    }

    return(
        <>
          <h1> Create New User</h1>
          <Form style={{width:"400px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Emoloyee Name: </Form.Label>
        <Form.Control type="text" name="username" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Select Designation: </Form.Label>
        <Form.Select aria-label="Default select example" name="designation" onChange={handleInput}>
      <option>select Designation</option>
      <option value="Designer">Designer</option>
      <option value="Programmer">Programmer</option>
      <option value="DataBase Designer">DataBase Designer</option>
      <option value="Analyst">Anylist</option>
      <option value="Team Leader">Team Leader</option>
      <option value="Project Manager">Project Manager</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email"  name="email" onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default CreateUser;