const router = require('express').Router()
const Slider = require('../model/Slider')

router.post("/add-slider", async (req, res) => {
    try {
        const { image, title, subtitle } = req.body;
        const slider = new Slider({ image, title, subtitle })
        const result = await slider.save()
        res.status(200).json(result);
    } catch (error) {

    }
})
router.get("/get-sliders", async (req, res) => {

    try {
        const result = await Slider.find();
        res.status(200).json(result);

    } catch (error) {

    }

})
router.delete("/delete-slider/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Slider.deleteOne({ "_id": id })
        res.status(200).end()
    } catch (error) {

    }
})



module.exports = router