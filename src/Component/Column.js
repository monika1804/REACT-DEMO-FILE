import React from 'react'

function Column() {
  const items = []
  return (
    <>   
      <td>Name</td>
      <td>Vanshika</td>
    </>
  )
}

export default Column


// {
//   items.map( item => (
//     <React.Fragment keys={item.id}>
//     <h1>Title</h1>
//     <p>{item.title}</p>

//     </React.Fragment>
//   ))
// }