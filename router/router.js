let express = require('express');
let router = express.Router();
let controller = require('../controller/kittyController');


router.get('/', (req,res) => {
    controller.getCats(req,res);
});

router.post('/', (req,res)=>{
    controller.postCat(req,res);
});

router.delete('/', (req,res)=>{
    controller.deleteCat(req,res);
});

module.exports = router;