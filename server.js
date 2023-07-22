let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res)=>{
    res.render('index.html');
});

app.get('/addNumbers',(req,res)=>{
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let sum = parseInt(num1) + parseInt(num2);
    let obj = {message:'Result is', data:sum}

    res.json(obj);
});

app.get('/subtractNumbers',(req,res)=>{
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let sum = parseInt(num1) - parseInt(num2);
    let obj = {message:'Result is', data:sum}

    res.json(obj);
});

app.get('/multiplyNumbers',(req,res)=>{
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let sum = parseInt(num1) * parseInt(num2);
    let obj = {message:'Result is', data:sum}

    res.json(obj);
});

app.listen(port, ()=>{
    console.log('server is ON');
});