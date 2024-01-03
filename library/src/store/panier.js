import { createSlice } from "@reduxjs/toolkit";
const initialState= {
  
    cart:[],
    total:0,
  
}
    
const panierSlice = createSlice({
    name:"shopping",
    initialState,
    reducers:{
        addToCart:(state,action)=>{

            // bech nlawej book mawjoud fel panier m loul wella le 
            let found = state.cart.findIndex((item)=>item._id === action.payload._id);
            // ken mawjoud ki n3awed nenzel na7ih 
            if(found >= 0){
             state.cart.pop(action.payload)
            
           // si mech mawjoud nzidou lel cart
            }else{
             state.cart.unshift(action.payload)
            }
         },
         remove:(state,action)=>{
                const itemId = action.payload;
                state.cart = state.cart.filter((item)=>
                item._id !== itemId)
                

         }
         ,clearCart:(state,action)=>{
            state.cart = []
        },
        
        calculateTotals:(state,action)=>{
            
            let Total = 0;
           
            state.cart.forEach((item)=>{
                
                Total+=  item.price;
               
            });
            state.total = Total;
            
            },
            
        }
    })

export const {addToCart ,calculateTotals,remove,clearCart} = panierSlice.actions ;
export default panierSlice.reducer