const Post = require('../models/post');
const Joi  = require('joi');
const multer = require('multer');
const addData = async (req,res)=>{
        try {

            const schemaGig =Joi.object().keys({
                gigtitle:Joi.string().required().min(10).max(100),
                CategoryId :Joi.string().regex(/^[0-9a-fA-F]{24}$/),
                subCategoryId:Joi.string().regex(/^[0-9a-fA-F]{24}$/),
                Positivekeywords:Joi.array().items(Joi.string()),
                description:Joi.string(),
                status:Joi.string(),
                photo :Joi.string(),
                userId:Joi.string()
            })
        
             const result = schemaGig.validate(req.body) 

             

             if(result.error){
                return res.status(400).json({ msg: 'Invalide data was provided', error: result.error.details[0].message });
                }else {
                    const post = await new Post(req.body);
                    const instanceSave = await post.save();
                    res.json(instanceSave).status(200);
                    return instanceSave;
                }

        }catch(err){
            res.json(err).status(500);
        }
        
}

const getOneById = async (req,res)=>{
            try {
                const post = await Post.findById(req.params.id).populate('CategoryId subCategoryId packId');
                res.json(post).status(200);
            }catch(err){
                res.json(err).status(500);
            }        
}

const getAll = async (req,res)=>{
            try{
                const posts = await Post.find({status : "active"}).populate('CategoryId subCategoryId userId packId');
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



//  gigtitle:Joi.string().min(15).max(100).required().alphanum().messages({
//     "string.base": `"the gigtitle" of the author should be a type of 'string'.`,
//     "string.min": `"should have a minimum length of 15'.`,
//     "string.max": `"should have a minimum length of 100'.`,
//     "string.empty": `"the gigtitle" of the author cannot be an empty field.`,
//     "any.required": `"the gigtitle" of the author is required.`,
// }),
// CategoryId :Joi.string().required().regex(/^[0-9a-fA-F]{24}$/),
// subCategoryId:Joi.string().required().regex(/^[0-9a-fA-F]{24}$/),
// Positivekeywords:Joi.array().items(Joi.string())