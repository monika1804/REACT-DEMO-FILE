import React from 'react'



const FRInput = React.forwardRef((props, ref) =>{                    //arrow function passesd as a paremeter to the forward ref method
  return(
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
}) 
// export default function FRInput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   )
// }
 export default FRInput