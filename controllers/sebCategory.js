const SubCategory = require('../models/subcategory');

const addSubCategory =async (req,res)=>{
    try {
        const data = req.body;
        const newInstance =await new SubCategory(data);
        const dataSave =await newInstance.save();
        res.json(dataSave).status(200)
    }catch(err){
        res.json(err).status(500)
    }
}

getOneSubCategory = async (req, res)=>{
     try{
        const data = await SubCategory.findById(req.params.id).populate('posts');
        res.send(data).status(200)

     }catch(err){
        res.send(err).status(500)
     }
}

getAllSubCategory = async (req, res)=>{
    try{
       const data = await SubCategory.find({});
       res.send(data).status(200)

    }catch(err){
       res.send(err).status(500)
    }
}

module.exports = {
    addSubCategory,getOneSubCategory,getAllSubCategory
}