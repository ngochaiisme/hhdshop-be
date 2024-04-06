const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//GET --- api/products
router.get('/products', productController.getAllProducts);

router.get('/test', (req, res) => {
    res.send('Hello');
});

module.exports = router;
