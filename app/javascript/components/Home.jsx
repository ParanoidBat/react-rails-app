import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default (props)=> {
  const [loggedin, setloggedin] = useState(true);

  useEffect(()=>{
    console.log("im coming!");
    if(sessionStorage.getItem('token') !== null){
      setloggedin(true);
    }
  }, [loggedin])
  
  return(
    <div>
      <h2>Good hogya g</h2>
      <Link to ="/new" className="text-decoration-none">Create New User</Link>
      <br/>
      <Link to="/users" className="text-decoration-none">Show Users</Link>
      <br/>
      { loggedin && <button type="button" onClick={() => {
        sessionStorage.removeItem('token');
        props.history.push('/')
        setloggedin(false);
        }}>
        Logout</button>
      }
      
    </div>
  );
}