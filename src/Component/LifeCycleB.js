import React, { Component } from 'react'

 class LifeCycleB extends Component {
   constructor(props) {                                                                   //First Method
     super(props)
   
     this.state = {
        name: 'Monika'
     }
     console.log("LifeCycleB constructor")
   }
  
   static getDerivedStateFromProps(props, state){                                      //Second Method
     console.log('LifeCycleB getDerivedStateFromProps')
    return null
   }

   componentDidMount(){                                                                //Fourth Method
     console.log('LifeCycleB componentDidMount')
   }
   shouldComponentUpdate(){                                                           //Second Method - update cycle method
    console.log('LifeCycleB shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(){                                                         //fourth method - update cycle method
    console.log('LifecycleB getSnapshotBeforeUpdate')
    return null
  }

componentDidUpdate(prevProps, prevState ,snapShot){
 console.log('LifecycleB componentDidUpdate')
}
  render() {                                                                            //Third Method
    console.log('LifeCycleB render')
    return (
      <div>
        LifeCycle B
      </div>
    )
  }
}

export default LifeCycleB
