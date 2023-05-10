const mongoose = require('mongoose');


const wishlistSchema = mongoose.Schema({
      name : {
          type : String,
          required : true,
          trim : true,
          unique : true
        },
        description : {
            type : String 
        },
        gig:{
            type: mongoose.Schema.Types.String, 
            ref: 'post'
        }
} , { timestamps: true });

const Wishlist = mongoose.model('Wishlist',wishlistSchema);

module.exports = Wishlist;