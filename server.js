

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/onnet-sga'));

app.get("/*" , function(req , res){
    res.send(path.join(__dirname+'onnet-sga/index.html'));
})


app.listen(process.env.PORT || 3040);