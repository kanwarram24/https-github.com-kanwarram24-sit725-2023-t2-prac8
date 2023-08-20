let express = require('express');
let app = express();
let port = process.env.port || 3000;
require('./database/mongoDb')
let router = require('./router/router')

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat',router);

app.listen(port, ()=>{
    console.log('express server started');
});