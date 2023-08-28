let collection = require('../models/kitty')

const getCats = (req,res)=> {
    collection.getCats((err,result)=>{
        if (!err) {
            res.json({statusCode:200, data:result, message:'get all cats successful'});
        }
    });
}


const postCat = (req,res)=>{
    let cat = req.body;
    collection.postCat(cat, (err, result) => {
        if (!err) {
            res.json({statusCode:201, data:result, message:'success'});
        }
    });
}

const deleteCat = (req,res)=>{
    let cat = req.body;
    collection.deleteCat(cat, (err, result) => {
        if (!err) {
            res.json({statusCode:200, data:result, message:'Cat Deleted Succesfully'});
        }
    });
}

module.exports = {getCats,postCat, deleteCat}