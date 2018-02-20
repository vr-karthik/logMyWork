const express = require('express');
const app = new express();

app.listen(3000, function() {
    console.log('node server started and listening on port 3000');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})