const express = require('express');
const app = express();

let names = [];
// parse JSON bodies, where they have the document type application/json
app.use(express.json());
app.use(express.static('client'));

app.get("/names", function(req, resp){
    resp.send(names);
});

app.post("/name", function(req, resp){
    console.log("request body", req.body);
    names.push(req.body.my_input);
    resp.send(names);
});

app.listen(8090);