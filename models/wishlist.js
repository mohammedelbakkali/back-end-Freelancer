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
});

const Wishlist = mongoose.model('Wishlist',postSchema);

module.exports = Wishlist;