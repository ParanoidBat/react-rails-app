import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

// list all users

const Users = function(props){
  const [stateUsers, setUsers] = useState([]);
  
  const url = '/users/index';

  // on component mount/update, call rails API to fetch users
  useEffect(()=>{
    fetch(url).then(res => {
      if(res.ok){
        return res.json();
      }
      throw new Error("User nahi mile");
    })
    .then(res => setUsers(res))
    .catch(function(){
      props.history.push('/');
    })
  }, [stateUsers.length]); // do not use the hook if number of users hasn't changed

  // the links in below code block are handled by react routes
  return(
    <>
      <div>
        {stateUsers.map((user) => (
          <ul>
            <li key={user.id}>
              {user.username}
              <br/>
              <Link to={`/user/${user.id}`}>Show</Link>
            </li>
          </ul>
        ))}
      </div>

      <Link to="/">Home</Link>
      <br/>
      <Link to="/new">Create New</Link>
    </>
  )
}

export default Users;