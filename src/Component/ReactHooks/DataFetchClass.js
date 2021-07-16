import React, { Component } from 'react'
import DataFetchFunction from './DataFetchFunction'

export class DataFetch extends Component {
  constructor(){
    super();
    this.state = {
      hasErrors: false,
      characters:{}
    }
  }
  componentDidMount(){
    fetch("http://hp-api.herokuapp.com/api/characters ")
    .then(res => res.json())
    .then(res => this.setState({ characters: res }))
    .catch(() => this.setState({ hasErrors: true }));
  }
  render() {
    return (
      <div>
        <h1>Emplyee from class Component</h1>
        <h3>Results:</h3>
        {/* <div>{JSON.stringify(this.state.characters)}</div> */}
        <DataFetchFunction />
      </div>
    )
  }
}  

export default DataFetch

