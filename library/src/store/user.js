// import { createSlice } from "@reduxjs/toolkit";
// const initialState= [{
  
//     cart:[],
   
//     total:0
// }]
    


// const ShopSlice = createSlice({
//     name:"shopping",
//     initialState,
//     reducers:{
    //   setshopping:(state,action)=>{
    //     state= action.payload
    //     return state
    //   }
    //   , 
    //   removeItem:(state,action)=>{
    //     const itemId = action.payload;
    //     state = {...state}.filter((item)=>
    //     item.id !== itemId)
    // },
    // increase:(state,action)=>{
    //     const Item = state.find((item)=>item.id === action.payload)
    // Item.qte = Item.qte + 1
    // },
    // decrease:(state,action)=>{
    //     const Item = state.find((item)=>item.id === action.payload)
    //     Item.qte = Item.qte - 1
    // },
    // addToCart:(state,action)=>{

    //     // bech nlawej book mawjoud fel panier m loul wella le 
    //     let found = state.cart.findIndex((item)=>item._id === action.payload._id);
    //     // ken mawjoud ki n3awed nenzel na7ih 
    //     if(found >= 0){
    //      state.cart.pop(action.payload)
    //    // si mech mawjoud nzidou lel cart
    //     }else{
    //      state.cart.unshift(action.payload)
    //     }
    //  },
    
    // calculateTotals:(state,action)=>{
    //     let qte=0;
    //     let total = 0;
    //     state.forEach((item)=>{
    //         qte+= item.qte;
    //         total+= item.qte * item.price;
    //     });
    //     state.qte = qte;
    //     state.total = total;
    //     },
//     }


// })
// export const { }=  ShopSlice.actions
// export default  ShopSlice.reducer