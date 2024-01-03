import React from 'react'
import Card from 'react-bootstrap/Card';
import { MdOutlineCreate } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

function AdminBook({book}) {
  return (

<div >
    
         < div  >
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                    <div style={{width:"500px" ,display:"flex",justifyContent:"space-between"}} >
                      <Card.Img variant="top" src={`http://localhost:5000/public/image/${book.image}`} style={{width:"90px",height:"90px"}} />
                         <h3>{book.title}</h3>
                          <div>
                          <MdOutlineCreate />
                         <MdDeleteOutline />
                          </div>
                        
        
     
                         </div>
                         </div>
                            <hr style={{color:"white"}}/>
                            

                </div>
          
        
</div>

      
   
  )
}

export default AdminBook
