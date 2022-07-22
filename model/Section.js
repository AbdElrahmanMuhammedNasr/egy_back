const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const SectionSchema = Schema({

    name: {
        type: String,
        require: true

    }
})

module.exports = mongoose.model("Section", SectionSchema)