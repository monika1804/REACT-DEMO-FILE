import React, { useState } from 'react'
import GuestEmployee from './GuestEmployee';
import WelcomEmployee from './WelcomEmployee';

function Employee() {
  const [isLoginIn, setIsLoginIn] = useState();

  if(isLoginIn){
    console.log("welcome")
    return <WelcomEmployee />
  }else{
    <GuestEmployee />
  }
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default Employee
