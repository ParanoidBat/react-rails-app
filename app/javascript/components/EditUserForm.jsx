import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';

const NewUserForm = (props) => {
  const [stateUsername, setUsername] = useState('')
  const {id} = props.match.params;

  useEffect(() => {
    let url = `/show/${id}`;

    fetch(url).then(res => {
      if (res.ok){
        return res.json();
      }
      throw new Error("User data unretrievable");
    })
    .then(res => (
      setUsername(res.username)
    ))
    .catch(error => console.log(error));
  }, [])

  const handleChange = (e) => {
    if(e.target.name == "username"){
      setUsername(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `/show/${id}`;

    const body = {
      user: {
        username: stateUsername
      }
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
      
      fetch(url, {
        method: "PUT",
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
          props.history.push(`/user/${id}`)
        })
        .catch(error => console.log(error.message));
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username" onChange={handleChange} value={stateUsername} required />
        </div>
        <button type="submit">Jan dyo</button>
      </form>
      <Link to="/">Home</Link>
    </>
  );
}

export default NewUserForm;