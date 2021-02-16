import React, { useState } from 'react'
import { useMutation } from 'react-apollo';
import {Link} from 'react-router-dom';
import gql from 'graphql-tag';


const AddUser = gql`
  mutation ($username: String!, $password: String!) {
      addUser(username: $username, password: $password){
        id
      }
  }
`;

const NewUserForm = (props) => {
  const [stateUsername, setUsername] = useState('')
  const [statePassword, setPassword] = useState('')
  const [createUser, userResponse ] = useMutation(AddUser);

  // method to reflect the changes made in HTML DOM onto the react DOM
  const handleChange = (e) => {
    console.log(e);
    if (e.target.name == "password"){
      setPassword(e.target.value);
    }
    else if(e.target.name == "username"){
      setUsername(e.target.value)
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    createUser({ variables: { username: stateUsername, password: statePassword } })
    .then(res => {
      if (res.data){
        props.history.push(`/user/${res.data.addUser.id}`)
      }
      throw new Error("Ye to lol hogya");
    })
    .catch(err => console.log(err));

    // !loading && !error && props.history.push(`/user/${data.addUser.id}`)
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const url = '/users/create';

  //   const body = {
  //     user: {
  //       username: stateUsername,
  //       password: statePassword
  //     }
  //   };
  //   // rails requires an authenticity token with forms
  //   const token = document.querySelector('meta[name="csrf-token"]').content;
      
  //     fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "X-CSRF-Token": token,
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(body)
  //       })
  //       .then(res => {
  //         if(res.ok){
  //           return res.json();
  //         }
  //         throw new Error("Response not okay");
  //       })
  //       .then(function(res){
  //         props.history.push(`/user/${res.id}`)
  //       })
  //       .catch(error => console.log(error.message));
  // }

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