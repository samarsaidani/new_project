import React, { useEffect } from 'react'
import { Container  , Nav,NavLink,Navbar as NavbarBs } from "react-bootstrap"
import {useSelector,useDispatch} from "react-redux"
import { setBook } from '../../store/book';
import { getbook } from '../../api/users';
import '../../style/stype.css'
import BookList from '../../component/bookList';
import Search from '../../component/filterBook';
import {Link} from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";



function Home() {


    const list = useSelector((state)=>state.Book)
  console.log(' list :',list);

  const dispatch = useDispatch()
  
  useEffect (()=>{
    getbook()
    .then((res)=>{
      dispatch( setBook(res.rslt))
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div>
      
    <div >
            <NavbarBs  fixed='top' className="bg-white shadow-sm nb-4">
             
             
                <Container>
                <Nav  >
              <img src="https://books-06fn.onrender.com/public/image/Kitabi.png"  style={{ height:"100px",width:"100px" }}/>
              </Nav>
                    <Nav className="me-auto">
                    <Nav.Link  as={NavLink} style={{fontSize:"30px", color:"black"}}> Kitabi La Bibliothèque électronique Du Tunis</Nav.Link>
                        <Nav.Link href="#home" as={NavLink} style={{fontSize:"30px", color:"black"}}>accueil </Nav.Link>
                       
                        
                       
                        
                    </Nav> 
                    <Link to="/login" style={{fontSize:"30px", color:"black"}}><MdOutlineAccountCircle /></Link>
                        
                    
                </Container>

            </NavbarBs>
            <div className='home' >
           <h1 style={{paddingTop:"370px" ,paddingLeft:"80px"}}>  Bienvenue sur Kitabi pour tous!</h1>
            </div>
            <Search/>
             <BookList Book={list}/>
             
          
      
    </div>
    </div>
  )
}

export default Home
