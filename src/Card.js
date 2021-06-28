import React from 'react';
import './card.css';

const card = ({name, email, id }) =>{
  // const {name, email, id } = props;                 // define the props nd pass the props in function
   return(
<div className='big-light-green dib br3 pa3 ma2 grow'>
  <img  alt='robots'  src = {`https://robohash.org/${id}?200x200`}/>
  <h1>
    <h2>{name}</h2>
    <p>{email}</p>
  <h1>
<h1>
   );
}

export default card; 