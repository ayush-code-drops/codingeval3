import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import axios from 'axios'

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [username, setUsername] = useState('');
   
    const [auth, setIsAuth] = useState(false)
    const [token,setToken]=useState("")
    const handleLogin = (username, password) => {
        if (username === "" || password == "") {
            alert('Username or Password missing')
            return
        }
        axios.post('https://masai-api-mocker.herokuapp.com/auth/login', {
            username: username,
            password,password
        }).then((res) => {
            console.log(res)
            setToken(res.data.token)
            setIsAuth(true)
        })
        .catch((err)=>console.log(err))
    }
    const handleRegister = (details) => {
      
        axios.post('https://masai-api-mocker.herokuapp.com//auth/register',details
        ).then((res) => {
          alert(res)

        })
        .catch((err)=>console.log(err))
    }
   
  return (
      <AuthContext.Provider value={{auth,handleLogin,token,handleRegister,username,setUsername}}>
          {children}
   </AuthContext.Provider>
  )
}

export default AuthContextProvider