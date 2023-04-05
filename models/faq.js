const mongoose = require('mongoose');


const faqSchema = mongoose.Schema({
    question : {
        type : String,
        required : true
    },
    answer : {
        type : String,
        required : true,
        minlength : 5,
        maxlenght: 300
    }
});

const Faq = mongoose.model('Faq',postSchema);

module.exports = Faq;