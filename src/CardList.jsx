import React from 'react';
import Card from './Card';


const ClassList = ({ robots }) =>{
  return(
<h1>
  {
    robots.map((user, i) =>{
    return  (
     <Card key = {i} 
    id={robots[i].id} 
    name={robots[i].name}
     email={robots[i].email}/>
     );
    })
  }
<h1>
  );
}


export default ClassList;