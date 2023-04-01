const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
      title : {
          type : String,
          required : true,
          trim : true,
          minlength : 5,
          maxlength : 100 
        },
        description : {
            type : String,
            required : true,
            trim : true,
            minlength :50,
            maxlength : 900,    
        },
        status : {
            type  :String,
            default :'active',
            enum : ['active','inactive']
        }
});

const Post = mongoose.model('Post',postSchema);

module.exports = Post;