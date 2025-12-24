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


//add new product
router.post('/add', (req, res) => {
    const newProducts = {
        id: products.length + 1,
        ...req.body
    }

    products.push(newProducts);
    res.status(201).json({
        msg: 'product added successfully',
        products
    });
});

//update a product 
router.put('/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(u => u.id === id);
    
    if (index === -1) {
      return res
        .status(404)
        .json({ error: 'User not found' });
    }
    
    products[index] = { id, ...req.body };
    res.json(products[index]);
  });

  

module.exports = router;