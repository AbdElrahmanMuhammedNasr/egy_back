const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const OfferSchema = Schema({
    images: {
        type: Array,
        require: true
    },
    title: {
        type: String,
        require: true

    }, subtitle: {
        type: String,
        require: true
    },
    exDate: {
        type: Date,
        require: true
    }, oldPrice: {
        type: Number,
        require: true
    }, newPrice: {
        type: Number,
        require: true
    },

})

module.exports = mongoose.model("Offer", OfferSchema)