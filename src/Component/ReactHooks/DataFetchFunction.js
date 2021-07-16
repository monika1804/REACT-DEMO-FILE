import React, {useState, useEffect} from 'react'

export default function DataFetchFunction() {
  const [characters, setCharacters] = useState({ })
  const [hasError, setHasError] = useState(false)

useEffect(() =>{
  async function fetchData(){
  const res = await fetch("http://hp-api.herokuapp.com/api/characters ")
    res
    .json()
    .then(res => setCharacters( res ))
    .catch(() => setHasError(true ));

  }
 

    fetchData();
},[])

  return (
    <div>  
    <h1>Emplyee From Function Component</h1>  
    <h3>Results:</h3>
        <div>{JSON.stringify(characters)}</div>
        <div>{JSON.stringify(hasError)}</div>
    </div>
  )
}

