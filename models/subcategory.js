const mongoose = require('mongoose');
const Category = require('../models/category')

const subCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    CategoryId:  

    {  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
       
    }

      
  
},  { timestamps: true });

subCategorySchema.post("save" ,async function(){
    
    var  CategoryId = String(this.CategoryId);
    console.log(CategoryId)

   
       
 const a =  await     Category.findByIdAndUpdate({_id : CategoryId } , { $push: {subCategoryListId: this._id }} )      
 
    
});

const subCategory = mongoose.model('SubCategory',subCategorySchema);

module.exports = subCategory;





//[6745665656644454555,67567565656567567656,7656565656567556]