const Post = require('../models/post');

const addData = async (req,res)=>{
        try {
            const post = await new Post(req.body);
            const instanceSave = await post.save();
            res.json(instanceSave).status(200);
            return instanceSave;
            
        }catch(err){
            res.json(err).status(500);
        }
        
}

const getOneById = async (req,res)=>{
            try {
                const post = await Post.findById(req.params.id);
                res.json(post).status(200);
            }catch(err){
                res.json(err).status(500);
            }        
}

const getAll = async (req,res)=>{
            try{
                const posts = await Post.find({status : "active"});
                res.json(posts).status(200);
                return posts;
            }catch(err){
                res.json(err).status(500);

            }
}

const update = async (req,res)=>{
    try{
        const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(post).status(200);
    }catch(err){
        res.json(err).status(500);
    }
}

const deleteOne = async (req,res)=>{
    try{
        const post = await Post.findByIdAndUpdate(req.params.id , {$set : {status : "inactive"}},{new:true});
        res.json(post).status(200);
    }catch(err){
        res.json(err).status(500);
    }
}

module.exports = {
    addData,
    getOneById,
    getAll,
    update,
    deleteOne
 }