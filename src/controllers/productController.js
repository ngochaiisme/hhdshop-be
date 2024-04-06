const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        let allProducts = await Product.find();

        res.status(200).json({
            message: 'Success',
            data: {
                products: allProducts,
            },
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

module.exports = {
    getAllProducts,
};
