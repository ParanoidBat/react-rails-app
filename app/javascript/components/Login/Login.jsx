import { func } from 'prop-types';
import React, { useState } from 'react';

async function loginUser(credentials){
  const authToken = document.querySelector('meta[name="csrf-token"]').content;
  return fetch('/login', {
    method: 'POST',
    headers: {
      "X-CSRF-Token": authToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(res => res.json());
}

export default function Login({setToken}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();

    const {token} = await loginUser({username, password});

    if(token !== "Invalid Credentials"){
      setToken({token})
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}