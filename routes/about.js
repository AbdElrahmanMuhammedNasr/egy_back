const router = require('express').Router()
const About = require('../model/About')

router.put("/update-about", async (req, res) => {
    try {
        const { title } = req.body;
        const result = await About.updateMany({}, { title })
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
})
router.get("/get-about", async (req, res) => {
    try {
        const result = await About.findOne({}, { __v: 0 });
        res.status(200).json(result)

    } catch (error) {

    }

})


module.exports = router