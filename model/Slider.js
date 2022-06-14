const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const SliderSchema = Schema({
    image: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true

    }, subtitle: {
        type: String,
        require: true
    }

})

module.exports = mongoose.model("Slider", SliderSchema)