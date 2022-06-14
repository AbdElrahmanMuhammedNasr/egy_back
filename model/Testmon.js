const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const TestmonSchema = Schema({
    image: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true

    }, subtitle: {
        type: String,
        require: true
    }

})


module.exports = mongoose.model("Testmon", TestmonSchema)