import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function ShowUser(props){
  const [stateUser, setUser] = useState({user: {username: ""}})

  // the id is sent in props
  const {
    match: {
      params: {id}
    }
  } = props;

  const showUrl = `/show/${id}`;
  const deleteUrl = `/destroy/${id}`;

  // when component is mounted. get user data through rails API
  useEffect(() => {
    fetch(showUrl).then(res => {
      if (res.ok){
        return res.json();
      }
      throw new Error("Couldn't get user");
    })
    .then(res => setUser(res))
    .catch(function(){
      props.history.push("/users")
    })
  }, [stateUser.username]); // do not reuse the hook if username hasn't changed

  const deleteUser = function(){
    const token = document.querySelector('meta[name="csrf-token"]').content;
    
    fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.ok){
        return res.json();
      }
      throw new Error("Nai bhai. nai karna delete");
    })
    .then(function(){
      props.history.push("/users")
    })
    .catch(error => console.log(error))
  }
  
  return(
    <>
    <h2>{stateUser.username}</h2>
    <button type="button" className="btn btn-danger mb-1" onClick={deleteUser}>Delete</button>
    <br/>
    <Link to="/users" className="btn btn-primary mb-1">All Users</Link>
    </>
  )
}

export default ShowUser;