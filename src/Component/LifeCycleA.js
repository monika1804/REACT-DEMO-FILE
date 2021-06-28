import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
   constructor(props) {                                                                   //First Method - Mount LifeCycle 
     super(props)
   
     this.state = {
        name: 'Monika'
     }
     console.log("LifeCycleA constructor")
   }
  
   static getDerivedStateFromProps(props, state){                                      //Second Method - Mount LifeCycle 
     console.log('LifeCycleA getDerivedStateFromProps')                               //First Method - update cycle method
    return null
   }

   componentDidMount(){                                                                //Fourth Method - Mount LifeCycle 
     console.log('LifeCycleA componentDidMount')
   }

   shouldComponentUpdate(){                                                           //Second Method - update cycle method
     console.log('LifeCycleA shouldComponentUpdate')
     return true
   }
   getSnapshotBeforeUpdate(){                                                         //fourth method - update cycle method
     console.log('LifecycleA getSnapshotBeforeUpdate')
     return null
   }

componentDidUpdate(prevProps, prevState ,snapShot){
  console.log('LifecycleA componentDidUpdate')
}
changeState = () => {
  this.setState({
    name:'codeevolution'
  })
}
  render() {                                                                            //Third Method - Mount LifeCycle 
    console.log('LifeCycleA render')                                                    //third Method - update cycle method
    return (
      <div>
      <div> LifeCycle A </div>
      <button onClick={this.changeState}>change state</button>
      <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
