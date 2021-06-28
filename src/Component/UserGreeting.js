import React, { Component } from 'react'

 class UserGreeting extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        isLoggedIn: true
     }
   }
   
  render() {
  return(
    this.state.isLoggedIn && <div>Hello its Login..!!</div>                     //4. Short cu
  )
    
    
    

      // return(                                                              //  3. Ternary Conditional Operator
    //   this.state.isLoggedIn ? 
    //   <div>Hello its Login..!!</div>  :
    //   <div>oops..!!! Its not Login</div>
    // )
    
    // let message                                                            // 2. Element variable 
    //   if(this.state.isLoggedIn){
    //   message = <div>Hello its Login..!!</div>
      
    //   }else {
    //      message =  <div>oops..!!! Its not Login</div>
    //   }
   
    //   return(
    //     <div>{message}</div>
    //   )
 


    // if(this.state.isLoggedIn){                                    //   1.  if/else condition
    //   return(
    //     <div>Welcome to my Page </div>
    //   )   
    // } else{
    //   return(
    //     <div>There is an Error</div>
    //   )    
    // }
    // return (
    //   <div>
    //     <div>Welcome to my Page </div>
    //     <div>There is an Error</div>
      
    //   </div>
    // )
  }
}

export default UserGreeting
