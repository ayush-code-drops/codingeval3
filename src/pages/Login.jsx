import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
function Login() {
    const { auth, handleLogin,username,setUsername } = useContext(AuthContext);
  
    const [password,setPassword]=useState('')
     
    
const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(username,password)

        
    }
    
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
    border-radius:10px;
    
}
    `

    if (auth) {
     navigate(`/`)
   }
  return (
      <div>
          <Form onSubmit={handleSubmit}>
              <input type="text"
                  placeholder='username'
                  name="username"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)} />
              <br />
              <input
                  type="text"
                  name="password"
                  placeholder='password'
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)} />
              <br />

              <input type="submit" value="Login" />
              
              </Form>
    </div>
  )
}

export default Login