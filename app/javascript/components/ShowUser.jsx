import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function ShowUser(props){
  const [stateUser, setUser] = useState({user: {username: ""}})

  const {
    match: {
      params: {id}
    }
  } = props;

  const url = `/show/${id}`;

  useEffect(() => {
    fetch(url).then(res => {
      if (res.ok){
        return res.json();
      }
      throw new Error("Couldn't get user");
    })
    .then(res => setUser(res))
    .catch(function(){
      props.history.push("/users")
    })
  }, [stateUser.username]);
  
  return(
    <>
      {stateUser.username}
    </>
  )
}

export default ShowUser;