import React from 'react'
import { useState } from "react";

export default function useToken(){
  const getToken = () => {
    const token = sessionStorage.getItem('token');
    const jsonToken = JSON.parse(token);
  
    return jsonToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token)
  }

  return {
    setToken: saveToken,
    token
  }
}