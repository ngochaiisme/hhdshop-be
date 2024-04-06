const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        let allProducts = await Product.find();

        res.status(200).json({
            products: allProducts,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Có lỗi xảy ra',
            data: {
                error: err,
            },
        });
    }
};

const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findOne({ id: productId });
        if (!product) {
            return res.status(400).json({
                message: 'Product not found',
            });
        }
        res.status(200).json({
            product: product,
        });
    } catch (err) {
        res.status(500).json({
            message: `Error: ${err}`,
        });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
};
