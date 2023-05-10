const mongoose = require('mongoose');
const Category = require('../models/category')

const postSchema = mongoose.Schema({
    gigtitle : {
          type : String,
          required : true,
          trim : true,
          minlength : 5,
          maxlength : 100 
        },

    CategoryId:  
        {  
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
        },

        packId:  [
              { 
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Pack'
            }
        ]
          

        ,

    subCategoryId:  
        {  
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SubCategory',
        },    
        Positivekeywords :[String],   
    
        description : {
            type : String,
            trim : true,
            minlength :50,
            maxlength : 900,    
        },
        status : {
            type  :String,
            default :'active',
            enum : ['active','inactive']
        }
}, { timestamps: true });

const Post = mongoose.model('Post',postSchema);

module.exports = Post;