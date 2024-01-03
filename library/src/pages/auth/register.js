import Col from  'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "../../style/stype.css"
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { signUp } from '../../api/authApi';
import { Link } from 'react-router-dom';






function Register() {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const handelSubmit=async()=>{
   await signUp({email:email,password:password})
  .then((responce)=>{
    console.log(responce)
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
                    <Button  onClick={()=>handelSubmit()}>Créer nouveau compte</Button><br></br>
                    <Link to="/login" >se connecter ?</Link>
                    </div>
                    </div>
	                
                   
	         
            
     
    </div>
 
   
   
  )
}

export default Register;