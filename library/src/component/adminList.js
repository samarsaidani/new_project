import React from 'react'
import AdminBook from './adminBook'

function AdminList({Book}) {
  return (
   
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around", marginTop:"50px"}}>

{Book.map((el,index)=>{
    return(
    <div key={index}>
        <AdminBook  book={el} />
    </div>)
})
}


        </div>
   
  )
}

export default AdminList
