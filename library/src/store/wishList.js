import { createSlice } from "@reduxjs/toolkit";
const initialState= [{
    _id: 1
}]
    


const favSlice = createSlice({
    name:"List",
    initialState,
    reducers:{
      setWish:(state,action)=>{
        state= action.payload
        return state
      } 
    }

})
export const {setWish}= favSlice.actions
export default favSlice.reducer