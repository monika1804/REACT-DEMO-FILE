import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_EXCHANGE_QUERY } from "./queries"

function Home() {
  const [search,  setSearch] = useState();
  const [getExchange, { loading, data, error }] = useLazyQuery(GET_EXCHANGE_QUERY,{
    variables:{ currency: setSearch },
  });
  if (error) return <h1>Error Found</h1>;
  if (data) {
    console.log(data);
  }
  return (
    <div className="home">
      <h1>Search for weather</h1>
      <input type="text"  placeholder="City name.." onChange={(event)=> setSearch(event.target.value)}/>
      <button onClick={() => getExchange()}>Search</button>
      <div className="weather">
      {/* { data && (
        <React.Fragment>
        <h1>Currency name : {data.rates.currency} </h1>
      <h1>Rate :  {data.rates.rates} </h1>
      <h1>Name:  {data.rates.name} </h1>
      </React.Fragment>
      )} */}
    
      </div>

    </div>
  )
}

export default Home
