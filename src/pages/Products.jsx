import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../context/AuthContext'
import data from '../products.json'
function Products() {
    const Table = styled.table`
    width:800px;
    margin:auto;
    margin-top:60px;
td,th{
    border:1px solid black;
    padding:5px;

}
    `

    const { auth } = useContext(AuthContext)
    const navigate = useNavigate()
    if (!auth) {
        navigate(`/login`)
    }
  return (
      <div>
          <Table >
              <thead>
               <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>More Details</th>
                 
              </tr>   
              </thead>

              <tbody>
               {data?.map((item) => {
                  return (
                      <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.category}</td>
                          <td>₹{item.price}</td>
                          <td><Link to={`/products/:id`}>More details</Link></td>
                          
                      </tr>
                  )
              })}   
              </tbody>
              

              
</Table>
    </div>
  )
}

export default Products