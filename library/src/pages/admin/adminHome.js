// home page for admin 
import React, { useEffect } from 'react'
import Col from  'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "../../style/stype.css"
import {useSelector} from "react-redux"
// import BookList from '../../component/bookList';

import  { setBook } from '../../store/book';
import {  getbook } from '../../api/users';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import AdminList from '../../component/adminList';
import { addBook } from '../../api/admin';

// home page for user after login 

const AdminDash = ()=>{
    const [title,setTitle]= useState('')
    const [auteur,setAuteur]= useState('')
    const [desc,setDesc]= useState('')
    const [price,setPrice]= useState('')
    const [file,setFile]= useState('')
    const dispatch= useDispatch()
    const list = useSelector((state)=>state.Book)
    
   
   
    useEffect (()=>{
      getbook()
      .then((res)=>{
        dispatch( setBook(res.rslt))
      })
      .catch((err)=>{
        console.log(err);
      })
    },[])

      const handelSubmit = async()=>{

        // bech nesta3mel formdata 
        const formData = new FormData();

        formData.append("title",title);
        formData.append("authors",auteur);
        formData.append("description",desc);
        formData.append("price",Number(price));
        formData.append("img",file)
      
        await addBook(formData)
        .then((res)=>{
          console.log(res)
        })
        .catch((err)=>{
          console.log(err)
        })
      }

      
    
    return(
        <div className="admin" >  
        <br></br>
        {/* Ajouter un livre  */}
        <div className="ajout" style={{ backgroundColor:"rgba(141,39,40,0.2)",display:"flex",flexDirection:"column",alignItems:"center", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding:"80px"}}>
            <h1>Ajouter un Livre </h1>
            <div>
            <Form>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
         <h4>Titre:</h4>
        </Form.Label>
        <Col sm="13">
          <Form.Control type='email' name="title" placeholder="Title"  onChange={(event)=>setTitle(event.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
         <h4>Auteur:</h4>
        </Form.Label>
        <Col sm="13">
          <Form.Control type="text" name="authors" onChange={(event)=>setAuteur(event.target.value)} placeholder="Auteur" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
         <h4>Description:</h4>
        </Form.Label>
        <Col sm="13">
          <Form.Control type='text' name="description" onChange={(event)=>setDesc(event.target.value)} placeholder="Description"  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
        <h4> Prix:</h4>
        </Form.Label>
        <Col sm="13">
          <Form.Control type='text' name="price" placeholder="prix dt" onChange={(event)=>setPrice(event.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
        <h4>Image:</h4> 
        </Form.Label>
        <Col sm="13">
          <Form.Control type='file' name="img" placeholder="image"  onChange={(event)=>setFile(event.target.files[0])} />
        </Col>
      </Form.Group>
      
      </Form>
      <div>
      <Button  style={{background:"rgba(41, 27, 48, 0.9)",width:"500px",border:"none"}} onClick={()=>handelSubmit()}>Ajouter</Button> <br></br>
      </div>   
            </div>
        </div>
        {/* Supprimer un livre  */}
        <div className="ajout" style={{ backgroundColor:"rgba(141,39,40,0.2)",display:"flex",flexDirection:"column",alignItems:"center", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding:"80px"}}>
        <h1>Modifier un livre </h1>
            
      

       <div>
      <AdminList Book={list}/> 
      </div>
       


</div>

        </div>
    )
}


export default AdminDash