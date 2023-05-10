const Category = require('../models/category');

const addCategory =async (req,res)=>{
    try {
        const data = req.body;
        const newInstance =await new Category(data);
        const dataSave =await newInstance.save();
        res.json(dataSave).status(200)
    }catch(err){
        res.json(err).status(500)
    }
}

getOneCategory = async (req, res)=>{
     try{
        const data = await Category.findById(req.params.id).populate('subCategoryListId');
        res.send(data).status(200)

     }catch(err){
        res.send(err).status(500)
     }
}

getAllCategory = async (req, res)=>{
    try{
       const data = await Category.find({}).populate('subCategoryListId');
       res.send(data).status(200)

    }catch(err){
       res.send(err).status(500)
    }
}



module.exports = {
    addCategory,getOneCategory,getAllCategory
}