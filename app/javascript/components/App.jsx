import React from 'react';
import Routes from '../react-routes/index';
import Login from './Login/Login'
import useToken from './useToken'

export default (props) => {
  const {token, setToken} = useToken();

  if(!token){
    return <Login setToken={setToken} />
  }

  return(
    <>
      {Routes}
    </>
  );
}