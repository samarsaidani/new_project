// parti de shopping card 
import "../style/stype.css"
import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { calculateTotals,remove,clearCart } from "../store/panier"
import { Button } from 'react-bootstrap';
import { IoMdClose } from "react-icons/io";


import Card from 'react-bootstrap/Card'
import { createCart, finishOrder } from "../api/users";






const Panier =()=>{
    const data = useSelector((state)=>state.Cart)
    const dispatch = useDispatch()
   
    console.log(data);
    const [adress,setAdress]=useState('')

     const valid =async()=>{
        await createCart({cart : data.cart})
        await finishOrder({adress:adress})
        .then((rslt)=>{
            console.log(rslt);

        })
        .catch((err)=>{
            console.log(err);
        })
     }

    useEffect(()=>{

        dispatch(calculateTotals() 
        ,[data])})

       
            

        
  
    return(
        <div className="panier"  >
            <h1 style={{marginLeft:"150px"}}>Pannier :</h1>
            
         {data.cart.map((item,index)=>{
            return (
               
                <div className="cart" key={index}>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                    <div style={{width:"900px" ,display:"flex",justifyContent:"space-between"}} >
                      <Card.Img variant="top" src={`https://books-06fn.onrender.com/public/image/${item.image}`} style={{width:"80px",height:"60px"}} />
                             :
                         <h3>{item.title}</h3>
                             :
                         <h3>{item.price}</h3>
                         <IoMdClose onClick={()=>dispatch(remove(item._id))}/>
        
     
                         </div>
                         </div>
                            <hr style={{color:"white"}}/>
                            

                </div>
                    )
             
            
                })}
          {/* <hr/>
          <h3> Total : {data.total}</h3> */}
           <h5 style={{display:"flex",justifyContent:"space-around",color:"black",paddingLeft:"600px"}}>Total :{data.total} Dt</h5>
           <input type="text" placeholder="Adress"  style={{width:"50px"}} onChange={(event)=>setAdress(event.target.value)} />
           <div style={{display:"flex",justifyContent:"center"}}>
       
      
       <Button style={{background:"rgba(41, 27, 48, 0.9)",border:"none",width: "500px"}} onClick={()=>valid()}>Acheter</Button>
         <Button  style={{background:"rgba(41, 27, 48, 0.9)",border:"none",width: "500px"}}  onClick={()=>dispatch(clearCart())}>Annuler</Button>
    </div>
  
     </div>
    )
}

export default Panier