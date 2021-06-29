import React, { useState, useEffect } from 'react'

export default function UseEffect() {
  const [name, setName]= useState("Shanaya")
  const [name2, setName2]= useState("Taniya")
  const [salary, setSalary]= useState(0)
  const [salary2, setSalary2]= useState(5000)

  const incrementClick=()=>{
    setSalary(salary+1);
  };
  const decrementClick =()=>{
    setSalary2(salary2-1);
  };
 useEffect(()=>{console.log(" useEffect Rendering")}, [salary2])
  return (
    <div>
    <h1>Employees Details</h1>
    <h2>Hi {name}, Your salary is {salary} </h2>
    <button onClick={incrementClick}>salary Increment</button>
    <h2>Hi {name2}, Your salary is {salary2} </h2>
    <button onClick={decrementClick}>salary Decrement</button>
    </div>
  )
}
