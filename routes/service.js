const router = require('express').Router()
const Service = require('../model/Service')

router.post("/add-service", async (req, res) => {
    try {
        const { image, name, subtitle } = req.body
        const service = new Service({ image, name, subtitle })
        const result = await service.save()
        res.status(200).json(result)
    } catch (error) {

    }
})
router.get("/get-services", async (req, res) => {
    try {
        const result = await Service.find()
        res.status(200).json(result)
    } catch (error) {

    }
})
router.delete("/delete-service/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Service.deleteOne({ "_id": id })
        res.status(200).end()
    } catch (error) {

    }
})


module.exports = router