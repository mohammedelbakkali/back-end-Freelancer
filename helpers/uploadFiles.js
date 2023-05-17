const multer = require('multer')
const path = require('path')
const fs = require('fs');
const { object } = require('joi');

exports.uploadSingleFile=(destinationFolder,fieldname)=>{
     return (req,res,next)=>{
      

        const repDes =""+destinationFolder;
        //================= creation de storage ========================
        const storage = multer.diskStorage({
           
             destination : function(req,file,callback){
                if(!fs.existsSync(repDes)) {
                     fs.mkdirSync(repDes,{recursive:true})
                }
                callback(null,repDes)
             },
             filename : function(req,file,callback){
                callback(null, "1_" + file.fieldname + "-" + Date.now() + path.extname(file.originalname))
             }
        })
        //=============================================================

        const upload = multer({storage:storage}).single(fieldname);
        // upload(req, res, function (err) )
         upload(req,res,async(err)=>{
              if(err){
                 res.json(err).status(400);
              }else{
                 if(req.file){
                    // req.body[req.file.fieldname]=JSON.stringify(destinationFolder + '/' + req.file.filename)
                    req.body[req.file.fieldname] = JSON.stringify(destinationFolder + '/' + req.file.filename)
                    await this.parseData(req)
                     next()
                 }
              }  
         });

     } 



}

// module.exports.parseData = (req) => {
//     console.log(req.body)
//     let keys = Object.keys(req.body); // cette fonction return la table des keys 
//     // [ 'name', 'description', 'price', 'category', 'photo' ]

//  req.body.photo=JSON.parse(req.body[keys['photo']])
  
 
// };

module.exports.parseData = (req, res, next) => {
    let keys = Object.keys(req.body); // cette fonction return la table des keys 
    let myKeys = Object.keys(req.body);
    for (let i = 0 ; i < myKeys.length; i++) {
        if (myKeys[i]=='photo') {
            // req.body.photo = JSON.parse(req.body[keys[key]]);
            console.log(myKeys[i])
            req.body.photo=JSON.parse(req.body[keys[i]])
           
        }
    }
    console.log(req.body)

    // console.log(keys)
};