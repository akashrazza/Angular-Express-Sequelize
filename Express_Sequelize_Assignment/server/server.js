var express = require('express');
var cors = require('cors');

let app = express();

app.use(express.json());
app.use(cors());
require('./Routes')(app);

app.listen(8000,()=>{
    console.log("Server Started");
})
