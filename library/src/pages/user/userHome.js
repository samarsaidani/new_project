// home page for user after login 
import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import  { setBook } from '../../store/book';
import { getbook } from '../../api/users';
import BookList from '../../component/bookList';

import '../../style/stype.css'






const UserDash = ()=>{
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
    return(
        <div>
           
           <BookList Book={list}/>
       
       
        </div>
    )
}


export default UserDash