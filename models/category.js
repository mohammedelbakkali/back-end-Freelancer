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

        ],
        posts:[{ //posts == gigs
            type: mongoose.Schema.Types.ObjectId,
            ref:'Post'
        }],
}, { timestamps: true });

const Category = mongoose.model('Category',categorySchema);

module.exports = Category;