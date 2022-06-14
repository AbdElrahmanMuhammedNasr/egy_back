const router = require('express').Router()
const Testmon = require('../model/Testmon')

router.post("/add-testmon", async (req, res) => {
    try {
        const { image, name, subtitle } = req.body
        const testmon = new Testmon({ image, name, subtitle })
        const result = await testmon.save()
        res.status(200).json(result)
    } catch (error) {

    }
})
router.get("/get-testmons", async (req, res) => {
    try {
        const result = await Testmon.find()
        res.status(200).json(result)
    } catch (error) {

    }
})
router.delete("/delete-testmon/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Testmon.deleteOne({ "_id": id })
        res.status(200).end()
    } catch (error) {

    }
})


module.exports = router