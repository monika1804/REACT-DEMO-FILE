import React, { Component } from 'react'
import MemoComponent from './Memo'

export class ParentComp extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       name: 'vanshika'
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        name:'Tutorials website'
      })
    }, 2000)
  }

  render() {
    console.log('*************Parent component render************')
    return (
      <div>
        <h1>Parent Component: {this.state.name}</h1>
        {/* <MemoComp name={this.state.name}  /> */}
        <MemoComponent name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
