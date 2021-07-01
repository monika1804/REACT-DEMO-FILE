import React, {useState, UsersContext}  from 'react'

export default function CustomHooks() {
  const [salary, setSalary] = useState(0);
  
  const incrementSalary = () =>{
    setSalary(salary+500);
  }
  return (
    
    // {salary, incrementSalary}  object
    [salary, incrementSalary]
  
  )
}


