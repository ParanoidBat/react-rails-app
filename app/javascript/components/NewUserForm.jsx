import React, { useState } from 'react'
import {Link} from 'react-router-dom';

const NewUserForm = (props) => {
  const [stateUsername, setUsername] = useState('')
  const [statePassword, setPassword] = useState('')

  const handleChange = (e) => {
    if (e.target.name == "password"){
      setPassword(e.target.value);
    }
    else if(e.target.name == "username"){
      setUsername(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = '/users/create';

    const body = {
      user: {
        username: stateUsername,
        password: statePassword
      }
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
      
      fetch(url, {
        method: "POST",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
        })
        .then(res => {
          if(res.ok){
            return res.json();
          }
          throw new Error("Response not okay");
        })
        .then(function(){
          props.history.push('/')
        })
        .catch(error => console.log(error.message));
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username" onChange={handleChange} required />
        </div>
        <div>
          <input type="password" name="password" onChange={handleChange} required />
        </div>
        <button type="submit">Jan dyo</button>
      </form>
      <Link to="/">Home</Link>
    </>
  );
}

export default NewUserForm;