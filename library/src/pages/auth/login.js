import Col from  'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "../../style/stype.css"
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { signIn } from '../../api/authApi';
import { Link, useNavigate } from 'react-router-dom';
import {  isAuthenticated, setAuthentification } from '../../helpers/auth';
import { AiOutlineClose } from "react-icons/ai";





function Connexion() {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const navigate = useNavigate()
const handelSubmit= async()=>{
  await signIn({email:email,password:password})
  .then((responce)=>{
    setAuthentification(responce.found,responce.token)
    console.log(responce)
    if(isAuthenticated() && isAuthenticated().role ==="user"){
      navigate('/useDash')
    }else if(isAuthenticated() && isAuthenticated().role ==="admin") {
     navigate('/adminDash')
    }
   
  })
  .catch((err)=>{
    console.log(err)})

}

  return (

   
      
    <div style={{display:"flex", justifyContent:"space-around",alignItems:"center" , marginTop:"80px"}} >
 <img src="https://us.123rf.com/450wm/hellodesignlovers/hellodesignlovers2309/hellodesignlovers230902117/214222069-pile-de-vieux-livres-isol%C3%A9s-sur-illustration-vectorielle-fond-blanc.jpg?ver=6" alt="background"/>
          
    <div  style={{ display:"flex",flexDirection:"column",
    alignItems:"center",backgroundColor:"rgba(141,39,40,0.2)", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius:"10%",padding:"80px"}}>
        
    <Form>
      <Link style={{paddingLeft:"300px",textDecoration:"none" , fontSize:"15px" , color:"black"}} to="/"> <AiOutlineClose /></Link>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email:
        </Form.Label>
        <Col sm="13">
          <Form.Control type='email' placeholder="Adresse E-mail" onChange={(e)=>setEmail(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password:
        </Form.Label>
        <Col sm="13">
          <Form.Control type="password" placeholder="Mot de passe"  onChange={(e)=>setPassword(e.target.value)}/>
        </Col>
      </Form.Group>
      </Form>
                    <div className='btn'>
                   
                    <Button onClick={()=>handelSubmit()}>Connexion</Button> <br></br>
                   
                    <Link to="/register">créer Nouveau compte </Link>
                   
                    </div>
                    </div>
	                
	         
   
     
    </div>
 
   
 
  
  )
}

export default Connexion;