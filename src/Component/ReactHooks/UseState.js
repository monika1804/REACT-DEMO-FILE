import React, {useState} from 'react'

export default function UseState() {
  const [name, setName] = useState("monika")
  const [empID, setEmpID] = useState("emp12")
  const [age, setAge] = useState("24")

  const handleClick =()=>{
    setName("vanshika");
    setEmpID("emp018");
    setAge("15");
  }

  return (
    <div>
      <h1>Employees Details</h1>
      <p>This is UseState Page</p>
      <h1>Your name:{name}</h1>
      <h1>Your name:{empID}</h1>
      <h1>Your name:{age}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
