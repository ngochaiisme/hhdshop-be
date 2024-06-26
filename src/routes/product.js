const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//GET --- api/products
router.get('/products', productController.getAllProducts);

router.get('/product/:id', productController.getProductById);

module.exports = router;
