const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// set up our express app
const app = express();
app.use(cors());

// connect to mongodb
mongoose.connect('mongodb://mongodb/websitecd', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(express.json());
// initialize routes
app.use('/search/api', require('./api'));

// error handling middleware
app.use(function (err, req, res, next) {
    //console.log(err);
    res.status(422).send({error: err.message});
});

app.get('/health/ready', (req, res) => {
    res.send('ready')
});

// listen for requests
app.listen(process.env.port || 4000, function () {
    console.log('Ready to Go!');
});
