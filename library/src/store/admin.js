import { createSlice } from "@reduxjs/toolkit";

const initialState= {
  
orders:[{}]
 

  
}
    
const AdminSlice = createSlice({
    name:"admin",
    initialState,
    reducers:{
        setOrder:(state,action)=>{
           state.orders = action.payload
           return  state
        },
        
        removeBook:(state,action)=>{
            const itemId = action.payload;
            state.produit = state.produit.filter((item)=>
            item.id !== itemId)
        }
       


    }
})
 export const {removeBook,setOrder} = AdminSlice.actions ;
export default AdminSlice.reducer