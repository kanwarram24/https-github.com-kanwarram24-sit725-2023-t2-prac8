let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/'));

app.get('/', (req, res)=>{
    res.render('pages/index.ejs');
});


app.listen(port, ()=>{
    console.log('server is ON');
});