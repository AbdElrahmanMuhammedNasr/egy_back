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
const service = require('./routes/service')
const upload = require('./routes/upload')



app.use('/about', about);
app.use('/offer', offer);
app.use('/partner', partner);
app.use('/project', project);
app.use('/slider', slider);
app.use('/testmon', testmon);
app.use('/service', service);
app.use('/upload', upload);


// mongodb+srv://abdoNasr:<password>@cluster0.vf0qx.mongodb.net/?retryWrites=true&w=majority

// mongodb://172.17.0.2:27017/egy
mongoose.connect('mongodb+srv://abdoNasr:123456789Abdo@cluster0.vf0qx.mongodb.net/Egy?retryWrites=true&w=majority', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(result => {
        server.listen(port)
        console.log("ok")

    }).catch(err => {
        console.log("error")
        console.log(err.message)
    })
