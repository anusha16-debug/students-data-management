//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

const route = require('./routes/route');

//connect to mongodb

mongoose.connect('mongodb://localhost:27017/studentdb');

//on connection
mongoose.connection.on('connected', () => {
    console.log('Successfully connected to database')
});

mongoose.connection.on('error', (err) => {
    if(err){
        console.log('Unable to connect database')
    }
});


var app = express();

//port no.
const port = 3000;

//testing server
app.get('/', (req, res) => {
    res.send('foobar');
});

//adding middleware cors
app.use(cors());
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

app.listen(port, ()=>{
    console.log('Server started at port:' +port)
});