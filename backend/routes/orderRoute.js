const express = require('express');
const { isAuth } = require('../middelWares/isAuth');
const orderBook = require('../models/order')
const orderRoute = express.Router();


// create order 

orderRoute.post('/createorder',isAuth,(req,res)=>{
    const {id} = req.user
   const { bookId , Quantite,adress,paymentIntent,orderStatus }=req.body;
    // nesna3 kima card , selon card tsir lcreation mta3 order 
   const newOrder = new orderBook({ bookId , Quantite,adress,paymentIntent,orderStatus,
        
    orderby:id})
   newOrder.save()
   .then((rslt)=>{
    res.status(200).json({msg : "order create",rslt})
})
.catch((err)=>{
    console.log(err)
    res.status(500).json({msg : 'error'})
})


})
// get all order in database for admin 

orderRoute.get('/allOrders',(req,res)=>{
    orderBook.find({}).populate("orderby")
    .then((result)=>{
        res.status(200).json({msg:"all order list", result})
    }) 
    .catch((err)=>{
        res.status(500).json({msg:"server error while looking for order list"})
    })
})

// delete order
orderRoute.delete('/deletOrder/:id',(req,res)=>{
    const {id}=req.params;
    orderBook.deleteOne({_id:id})
    .then((rslt)=>{
        res.status(200).json({msg : "order delete :("})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

//update the status of order 
orderRoute.put('/upDateOrder/:id',(req,res)=>{
    const {id}=req.params;
    const {status}=req.body;
    orderBook.updateOne({_id:id},{$set: {orderStatus:status}},{new:true})
    .then((rslt)=>{
        res.status(200).json({msg:"order updated",rslt})
    })
    .catch((err)=>{
        res.status(500).json({msg:'error',err})
    })
})
module.exports =orderRoute