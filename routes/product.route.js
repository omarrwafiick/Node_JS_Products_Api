const express = require('express');  
const router = express.Router();
const { getProducts ,getProductById, CreateProduct, UpdateProduct, DeleteProduct} = require("../controller/product.controller");
 
router.get('/', getProducts); 

router.get('/:id', getProductById); 

router.post('/', CreateProduct); 

router.put('/:id', UpdateProduct);  

router.delete('/:id', DeleteProduct); 

module.exports = router;