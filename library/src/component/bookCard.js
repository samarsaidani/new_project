
import Card from 'react-bootstrap/Card';
import ReactStars from "react-stars";
import Button from 'react-bootstrap/Button';
import { SlBasket } from "react-icons/sl";
import { MdOutlineBookmarkAdded,MdBookmark } from "react-icons/md";
import {addToCart} from '../store/panier'
import "../style/stype.css"
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addToFav, myFavList, rateBook } from '../api/users';
import { getCookie } from '../helpers/cookies';
import Example from './box';
import { setWish } from '../store/wishList';

function BasicExample({book}) {
 
  const result = useSelector((state)=>state.wishlist)
  
  const dispatch = useDispatch()
  // hetha lel modal li yatla3 wa9et n7eb na3mel rate w ena non connecté
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const token =  getCookie("token");

  const added =  result.find((item)=> item._id === book._id );

  // function for rating calling the api

  const ratingChanged = async(newRating) => {
 
  // console.log(typeof(newRating));
    if(token){
    await rateBook({bookId:book._id , star:newRating})
    .then((res)=>{
      console.log(res);
    
    })
    .catch((err)=>{
      console.log(err);
    })
  }else{
    setShow(true)
    handleShow()
  }
    
  }

  // add to favorite list 

  const handelWishList = async()=>{
    if(token){
      addToFav({bookId: book._id})
      .then((res)=>{
      console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
    }else{
      setShow(true)
      handleShow()
    }
    
  
  }

  useEffect(()=>{
   if(token){
    myFavList()
    .then((res)=>{
    dispatch(setWish(res.User.wishlist))
    })
    .catch((err)=>{
     console.log(err);
    })
   }
  },[])
  return (
    <div>
      {/* composant box permet l'affichage des messages avant rating w addtoWishlist*/}
      <Example handleClose={handleClose} show={show}/>

      <Card style={{ width: '17rem' , height:'24rem' ,borderRadius:"20px" }}>
        <div className='cadre'>
          <Button variant='white' > 
          <Card.Img    style={{ width: '190px' , height:'190px' , borderRadius:'30px'  }}src={`https://books-06fn.onrender.com/public/image/${book.image}`} />

          </Button>
        </div>
     
        <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>livre de :{book.authors}</Card.Text>
                <Card.Text>date de sortie : {book.date} </Card.Text>
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
       
            {/* 3malet houni les stars */}
            {<ReactStars
                        name="simple"
                        count={5}
                        value={book.totalRating}
                        size={24}
                        color={"#ffd700"}
                        edit={true}
                        onChange={ratingChanged}     
                        
                        />
                    }
         <SlBasket onClick={()=>dispatch( addToCart(book))} /> 
         {/* // hedhi en principe maktouba bel ghalet */}
          
           {added ? <MdBookmark onClick={()=>handelWishList()} />:<MdOutlineBookmarkAdded  onClick={()=>handelWishList()}/>}
          
         
         <p>{book.price}</p>
         <p>DT</p>
        </div>
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default BasicExample;