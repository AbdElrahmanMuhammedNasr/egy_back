const multer = require('multer')
const fs = require('fs');
// const router = require('./Order/Order');
const upload = multer({ dest: 'uploads/' })
const router = require('express').Router()

router.post('/image', upload.single("picture"), async (req, res) => {

    var src = fs.createReadStream(req.file.path);

    var image_path = Date.now() + req.file.originalname;


    var dest = fs.createWriteStream('uploads/' + image_path);
    src.pipe(dest);

    src.on('end', function () {
        fs.unlinkSync(req.file.path);
        res.status(200).send("uploads/" + image_path);
    });

})

module.exports = router
