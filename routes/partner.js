const router = require('express').Router()
const Partner = require('../model/Partner')

router.post("/add-partner", async (req, res) => {
    try {
        const { image, name } = req.body
        const partner = new Partner({ image, name })
        const result = await partner.save()
        res.status(200).json(result)
    } catch (error) {

    }
})
router.get("/get-partners", async (req, res) => {
    try {
        const result = await Partner.find()
        res.status(200).json(result)
    } catch (error) {

    }

})
router.delete("/delete-partner/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Partner.deleteOne({ "_id": id })
        res.status(200).end()
    } catch (error) {

    }
 })


module.exports = router 