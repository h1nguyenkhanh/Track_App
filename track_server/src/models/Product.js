const mongoose = require('mongoose');

const productSchema  = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

mongoose.model('Product', productSchema);