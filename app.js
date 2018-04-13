const express = require('express')
const app = express()
var path = require("path")


app.listen((process.env.PORT || 3000), () => console.log('listening on port 3000'));
module.exports = app;

app.get('/', function(req,res,next){
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/client', express.static(path.join(__dirname, 'client')));
app.use('/templates', express.static(path.join(__dirname, 'client', 'templates')));
