const express = require('express')
const app = express()
const port = process.env.PORT||3000
const path = require('path'); 
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))