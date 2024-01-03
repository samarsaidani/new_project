import axios from 'axios';
import { getCookie } from '../helpers/cookies';

// liste des api pour administrateur

// add book api(axios.post)
export const addBook =async(values)=>{
    const token =  getCookie("token")
    
    const config = {
        headers:{
            
            'Authorization':token,
            'Content-Type':'multipart/form-data'
            
        }
    }
    const {data}= await axios.post("http://localhost:5000/book/create",values,config)
     return data 
}




// remove book api (axios.delete)
export const deleteBook =async(values)=>{
    const token =  getCookie()
    const {data}= await axios.delete("http://localhost:5000/book/delete/",{Headers:{Authorization:token}},values)
     return data 
}


// get all user orders (axios.get)

export const getOrder =async()=>{
    const {data}= await axios.get("http://localhost:5000/order/allOrders")
     return data 
}
