const router = require('express').Router()
const Offer = require('../model/Offer')

router.post("/add-offer", async (req, res) => {
    try {
        const { images, title, subtitle, exDate, oldPrice, newPrice } = req.body
        const offer = new Offer({ images, title, subtitle, exDate, oldPrice, newPrice })
        const result = await offer.save()
        res.status(200).json(result)
    } catch (error) {
        console.log(error)

    }

})
router.get("/get-offers", async (req, res) => {
    try {
        const result = await Offer.find()
        res.status(200).json(result)
    } catch (error) {

    }
})
router.delete("/delete-offer/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Offer.deleteOne({ "_id": id })
        res.status(200).end()
    } catch (error) {

    }
})


module.exports = router