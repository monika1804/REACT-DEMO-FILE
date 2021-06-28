import React from 'react'
import Person from './Person'

export default function ListRendering() {
  const names = ['Monika', 'Vanshika', 'Sakshi', 'Monika' ]
  const persons = [
    {
      id: 1,
      name:'Monika',
      age:24,
      skills:'React Js'
    }, 
    {
      id: 2,
      name:'Vanshika',
      age: 13,
      skills:'React Hooks'
    } ,
    {
      id:3,
      name:'Sakshi',
      age:25,
      skills:'Python'
    }
  ]
  const nameList = names.map((name, index) => (                           // we are using index when we r using same value/name in multiple tym
   <h2 key={index}>{index} {name}</h2>
   ))

  // const personList = persons.map(persons => (
  //   <Person  key={persons.id} persons={persons}/>
  // ))
  return (
    <div>{nameList}</div>
 
  )
}
