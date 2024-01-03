const mongoose = require("mongoose"); 

var cartSchema = new mongoose.Schema(
  {
    orders:[{
        Produit :{
            type : mongoose.Schema.Types.ObjectId ,
            ref:"Book"},
            
            price : Number
                        }
    
        
    ],
    cartTotal: Number,
    
    orderby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  }
);

module.exports = mongoose.model("Cart", cartSchema);
