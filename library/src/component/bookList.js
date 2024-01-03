import BasicExample from "./bookCard";






const BookList =({Book})=>{
    
    
    return(
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around", marginTop:"50px"}}>

{Book.map((el,index)=>{
    return(
    <div key={index}>
        <BasicExample  book={el} />
    </div>)
})
}


        </div>
    )
}
export default BookList ;