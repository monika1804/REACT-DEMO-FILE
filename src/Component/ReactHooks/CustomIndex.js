import React from 'react'
import useCustomHooks from './CustomHooks'


export default function CustomIndex() {
  const [salary, incrementSalary] = useCustomHooks();       
  const [salary2, incrementSalary2] = useCustomHooks();                                         // In Array form we passes the value in [] which we want to return in html without using data.anyvalue
  return (
    <div>
    <h1>Employees Details</h1>
    <h2>Hi User, Your salary is: {salary}</h2>
    <button onClick={incrementSalary}>Increment</button>

    <h1>Employees Details</h1>
    <h2>Hi User, Your salary is: {salary2}</h2>
    <button onClick={incrementSalary2}>Increment</button>
    </div>
  )
}

//   const data = useCustomHooks();                                                               //In object form we create data where we store the value of useCustomHook (other file) then return in html using {data.salary}
//   return (
//     <div>
//     <h1>Employees Details</h1>
//     <h2>Hi User, Your salary is: {data.salary}</h2>
//     <button onClick={data.incrementSalary}>Increment</button>
       
//     </div>
//   )
// }


// if(e.target.files.size > 10240){
//   console.log("File Size")
//   alert ("File size cannot exceed more than 10kb")
// }


