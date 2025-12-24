const express = require('express');
const products = require('../models/productsModel');

const router = express.Router();

//get all products 
router.get('/', (req, res) => {
    res
    .status(200)
    .json(products);
});


//get a product
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(item => item.id === id);

    if(!product){
      return res
        .status(404)
        .json({msg : `Product not found`});
    }
    
    res.status(200).json(product)

});


module.exports = router;