import React from 'react'
import {Link} from 'react-router-dom'

export default (props)=> (
  <div>
    <h2>Good hogya g</h2>
    <Link to ="/new" className="text-decoration-none">Create New User</Link>
    <br/>
    <Link to="/users" className="text-decoration-none">Show Users</Link>
    <br/>
    <button type="button" onClick={() => {
      sessionStorage.removeItem('token');
      props.history.push('/login')
      }}>
      Logout</button>
  </div>
)