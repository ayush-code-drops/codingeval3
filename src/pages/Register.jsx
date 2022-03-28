import React, { useState } from 'react'
import axios  from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
function Register() {
    const [data, setData] = useState(
        {
            name: "",
            email: "",
            password: '',
            username: "",
            mobile: '',
            description: ''
        }
    )
   

    const Form = styled.form`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

input{
    padding:10px;
    margin:5px;
    width:300px
}

input[type='submit']{
    background:teal;
    color:white;
    width:300px;
    border-radius:10px
}
    `
    
    const Button = styled.button`
    background:teal;
    color:white;
    width:300px;
    border-radius:3px;
    padding:10px
    `
    
    const {name,email,password,username,mobile,description}=data
    const handleChange = (e) => {
        console.log(e)
        const {name, value} = e.target
       // console.log(e.target)
        setData({
            ...data,
            [name] : value
        })
      // console.log('name',name,value);
    }

    const {auth,handleRegister}=useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        handleRegister(data)
     
    }
    const navigate=useNavigate()
    
    const handleRedirect = () => {
        navigate(`/login`)
    }

    if (auth) {
        navigate('/')
    }
  return (
      <div>
          <h1>Register Form</h1>
          <Form onSubmit={handleSubmit}>
          <input name='name' onChange={(e)=>handleChange(e)} type="text" placeholder='Name' value={name} />
          <input name='email' onChange={(e)=>handleChange(e)} type="email" placeholder='Email' value={email} />
          
          
              <input name='password' onChange={(e) => handleChange(e)} type="text" placeholder='Password' value={password} />
              <input name='username' onChange={(e)=>handleChange(e)} type="text" placeholder='Username' value={username} />
              <input name='mobile' onChange={(e) => handleChange(e)} type="Number" placeholder='mobile' value={mobile} />
              <input name='description' onChange={(e) => handleChange(e)} type="text" placeholder='description' value={description} />
              
             
            
             
             
          <input type="submit" value="Register" />
       
          </Form>

          <Button onClick={handleRedirect}>Redirect to Login Page</Button>
          
        
    </div>
  )
}

export default Register