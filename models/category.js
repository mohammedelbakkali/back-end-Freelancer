const mongoose = require('mongoose');


const categorySchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    subCategoryListId: [ 

        {  
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SubCategory',
        }

        ]
}, { timestamps: true });

const Category = mongoose.model('Category',categorySchema);

module.exports = Category;