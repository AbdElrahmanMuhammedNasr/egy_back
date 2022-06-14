const express = require('express')
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const http = require('http')

const app = express();

const path = require('path')
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const server = http.createServer(app)



app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(express.json())






const about = require('./routes/about')
const offer = require('./routes/offer')
const partner = require('./routes/partner')
const project = require('./routes/project')
const slider = require('./routes/slider')
const testmon = require('./routes/testmon')
const upload = require('./routes/upload')



app.use('/about', about);
app.use('/offer', offer);
app.use('/partner', partner);
app.use('/project', project);
app.use('/slider', slider);
app.use('/testmon', testmon);
app.use('/upload', upload);



mongoose.connect('mongodb://172.17.0.2:27017/egy', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(result => {
        server.listen(port)
        console.log("ok")

    }).catch(err => {
        console.log(err.message)
    })
