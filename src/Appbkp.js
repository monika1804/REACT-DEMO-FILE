import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './robot';
import SearchBox from './SearchBox';

class App  extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  
  onSearchChange = (e)=> {
    this.setState({ searchfield : e.target.value })
  console.log(e);  
  }
  render(){
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
return(
  <div className="tc">
     <h1> Robo Frnds</h1>
      <SearchBox searchChange = {this.onSearchChange}/>
       <CardList robots= {filteredRobots}/>

  <h1>
);
}
}
export default App; 

// const App = () =>{
//   return(
//     <h1>
// <h1> Robo Frnds</h1>
// <SearchBox />
//  <CardList robots= {robots}/>
//     <h1>
//   );
//   }