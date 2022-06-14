const router = require('express').Router()
const Project = require('../model/project')

router.post("/add-project", async (req, res) => {
    try {
        const { images, name, link } = req.body
        const project = new Project({ images, name, link })
        const result = await project.save()
        res.status(200).json(result)
    } catch (error) {

    }
})
router.get("/get-project", async (req, res) => {
    try {
        const result = await Project.find()
        res.status(200).json(result)
    } catch (error) {

    }
})
router.delete("/delete-project/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Project.deleteOne({ "_id": id })
        res.status(200).end()
    } catch (error) {

    }
})


module.exports = router