const express = require('express');
const app = express();

app.use(express.static('client'));

let instruments = [ 'piano', 'concertina', 'double bass'];

app.get('/list', function (req, resp){
    resp.send(instruments);
});

app.listen(8090);
