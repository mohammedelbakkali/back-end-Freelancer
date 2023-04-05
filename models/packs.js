const mongoose = require('mongoose');


const packsSchema = mongoose.Schema({
        type : {
          type : String,
          required : true,
          enum : ['basic','standard','premium']
        },
        name : {
            type : String,
            required : true
        },
        description : {
            type  :String,
            required : true,
            minlength :10,
            maxlength : 100,  
        },
        deliveryTime : {
            type : Number,
            required : true,
            min : 1
        },
        price : {
            type : Number,
            required : true,
            min : 1
        }
});

const Packs = mongoose.model('Packs',postSchema);

module.exports = Packs;