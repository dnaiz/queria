const fs = require('fs');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const queries = require('./queries.js');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.set('view engine', 'hbs');


app.get('/',(req, res)=> {    
        
    res.render('home.hbs');
});

app.post('/',(req, res)=> {    
    console.log(req.body);
    //queries.writeData( req.query);    
    res.render('home.hbs');
});


app.listen(port);