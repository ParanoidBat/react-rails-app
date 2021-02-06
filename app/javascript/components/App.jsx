import React from 'react';
import Routes from '../react-routes/index';
import Login from './Login/Login'
import useToken from './useToken'

export default (props) => {
  const {token, setToken} = useToken();

  // if user is not logged in. render login page. (not redirect)
  if(!token){
    return <Login setToken={setToken} />
  }

  // render the react routes
  return(
    <>
      {Routes}
    </>
  );
}