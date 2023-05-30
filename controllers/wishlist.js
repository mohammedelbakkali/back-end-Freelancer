const Wishlist = require('../models/wishlist');

const addData =async (req,res)=>{
    try {
        const data = req.body;
        const newInstance =await new Wishlist(data);
        const dataSave =await newInstance.save();
        res.json(dataSave).status(200)
    }catch(err){
        res.json(err).status(500)
    }
}

getAllData = async (req, res)=>{
    try{
       const data = await Wishlist.find({}).populate('Post');
       res.send(data).status(200)

    }catch(err){
       res.send(err).status(500)
    }
}

const deleteOne = async (req,res)=>{
    try{
        const data = await Wishlist.findByIdAndDelete(req.params.id ,{new:true});
        res.json(data).status(200);
    }catch(err){
        res.json(err).status(500);
    }
}

module.exports = {
    addData,getAllData,deleteOne
}