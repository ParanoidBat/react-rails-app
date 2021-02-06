import React from 'react'
import {Link} from 'react-router-dom'

export default ()=> (
  <div>
    <h2>Good hogya g</h2>
    <Link to ="/new">Create New User</Link>
    <br/>
    <Link to="/users">Show Users</Link>
    <br/>
    <button type="button" onClick={() => {
      sessionStorage.removeItem('token')
      }}>
      Logout</button>
  </div>
)