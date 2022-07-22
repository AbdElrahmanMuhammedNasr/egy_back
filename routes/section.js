const router = require('express').Router()
const Section = require('../model/Section')

router.post("/add-section", async (req, res) => {
    try {
        const { name } = req.body;
        const section = new Section({  name })
        const result = await section.save()
        res.status(200).json(result);
    } catch (error) {

    }
})

router.get("/get-section", async (req, res) => {
    try {
        const result = await Section.find()
        res.status(200).json(result);
    } catch (error) {

    }
})


router.delete("/delete-section/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Section.deleteOne({ "_id": id })
        res.status(200).end()
    } catch (error) {

    }
})
module.exports = router