const mongoose = require('mongoose');
const Category = require('../models/category')
const User = require("../models/user")
const postSchema = mongoose.Schema({

    gigtitle : {
          type : String,
         
          trim : true,
          minlength : 5,
          maxlength : 100 
        },

        description : {
            type : String,
            trim : true,
 
        },

    photo: {
        type:String
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
        ],


          

    subCategoryId:  
        {  
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SubCategory',
        },    
        Positivekeywords :[{
             type:String
        }],   
    

        status : {
            type  :String,
            default :'active',
            enum : ['active','inactive']
        },

        userId:  
          {  
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
         },

}, { timestamps: true });


postSchema.post("save" ,async function(){
    
    var  userId = String(this.userId);
    console.log(userId)

   
       
 const a =  await  User.findByIdAndUpdate({_id : userId } , { $push: {posts: this._id }} )      
 
    
});



const Post = mongoose.model('Post',postSchema);

module.exports = Post;