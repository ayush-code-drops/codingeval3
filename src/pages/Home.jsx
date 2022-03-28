import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { useState } from 'react'
const Card = styled.div`
background:white;
color:teal;
box-shadow:5px 5px 8px teal
`
function Home() {
    const [userdata,setUserData]=useState({})
    const { auth, username,setUsername,token } = useContext(AuthContext)
    const navigate = useNavigate()
    if (!auth) {
        navigate(`/login`)
    }

    useEffect(() => {
        fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
            method: 'GET',
            headers: {
                token:token
            }
      }) 
            .then(res => res.json()).then((data) => {
        setUserData(data)
    })   
    })
  return (
      <div>
          <h1>Username: {userdata.name}</h1>   
    </div>
  )
}

export default Home