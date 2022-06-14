const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const ProjectSchema = Schema({
    images: {
        type: Array,
        require: true
    }, section: {
        type: String,
        require: true

    },
    name: {
        type: String,
        require: true

    }, link: {
        type: String,
        require: true
    }

})

module.exports = mongoose.model("Project", ProjectSchema)