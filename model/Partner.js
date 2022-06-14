const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const PartnerSchema = Schema({

    image: {
        type: String,
        require: true

    }, name: {
        type: String,
        require: true,
        unique : true
    }
})

module.exports = mongoose.model("Partner", PartnerSchema)