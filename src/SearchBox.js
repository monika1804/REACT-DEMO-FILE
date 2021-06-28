import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
  return(
    <div className="pa2">  
<input
className="pa3 ba green"
 type= "search" 
placeholder = "search robot" 
onChange={searchChange()}

/>
<h1>
  );
}

export default SearchBox;