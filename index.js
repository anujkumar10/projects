var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

var MONGO_URL = 'mongodb+srv://anujkumar_678:BuKL1EKh0aUf86xt@cluster0-rgi3j.mongodb.net/test?retryWrites=true&w=majority';



mongoose.connect(MONGO_URL, {useNewUrlParser: true, useFindAndModify: false})
mongoose.connection
.once('open', () => console.log('connection established'))
.on('error', (error) => console.log('error in estabilishing connection', error));

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/project_routes')(app);

app.listen(process.env.port || 3400 , () => console.log('server started'));