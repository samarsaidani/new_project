// on affiche tous les ordres de tous l'utilisateur 
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrder } from '../../api/admin'
import { setOrder } from '../../store/admin'
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import { FaBook } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

function Stat() {
  const data = useSelector((state)=>state.admin.orders)
  console.log(data)
  const dispatch = useDispatch()

  useEffect(()=>{
 getOrder()
 .then((rslt)=>{
  dispatch(setOrder(rslt.result))})
  .catch((err)=>{
    console.log(err);
  })

  },[])
  return (
    <div style={{ margin:"20px 20px 0px 20px "}}>
     {data.map((el,index)=>{
      return(
        <div>
          <Table striped bordered>
      <thead>
        <tr>
          <th><FaBook /></th>
           <th>Email:</th>
          <th>Quantité:</th> 
          <th>Total:</th>
          <th>Adreasse:</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><FaRegCheckCircle /></td>
           <td>{el.email}</td>
          <td>{el.orders.length} livre</td> 
          <td>{el.total}</td>
          <td>{el.adress}</td>
         
         
          <Spinner animation="border" />
        </tr>
        <tr> 
        <th>Etat de commande :</th>
         <td>{el.orderStatus}</td>
          <th  colSpan={3}>
          <td> <Form.Check label={"En cour"}/> </td>
          <td> <Form.Check label={"Traitement de commande "}/> </td>
          <td> <Form.Check label={"Préparation de commande "}/> </td>
          <td> <Form.Check label={"Livraison de commande"}/></td>
          <td> <Form.Check label={"livrer"}/></td>
          </th>
        </tr>
        
      </tbody>
    </Table>
         
          </div>
      )
     })}
    </div>
  )
}

export default Stat
