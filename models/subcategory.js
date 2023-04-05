const mongoose = require('mongoose');


const subCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Category: [ 

       {  type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required:true}
    ]
      
  
});

const subCategory = mongoose.model('subCategory',postSchema);

module.exports = subCategory;


//[6745665656644454555,67567565656567567656,7656565656567556]