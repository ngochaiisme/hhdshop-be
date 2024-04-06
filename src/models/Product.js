const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            require: true,
        },
        imageUrl: {
            type: String,
            default: 'will update,not yet',
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', Schema);

module.exports = Product;
