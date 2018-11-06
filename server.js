let path = require('path');
let bodyParser = require('body-parser');
let express = require('express');
let app = express();



app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({Extended: true }));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/signIn', function(req, res) {
    res.render('signIn');
});

app.post('/signIn', function (req, res) {

    let users =[{user: 'moshe' ,password: 1234},
        {user: 'jak' ,password: 1235}];
    let mangers =[{user: 'dov' ,password: 1234},
        {user: 'ofir' ,password: 1235}];
    let workers =[{user: 'avi' ,password: 1234},
        {user: 'jak' ,password: 125}];

    let i;
    for(i=0;i<2;i++)
    {
        if(users[i].user == req.param('UserName') && users[i].password == req.param('Password'))
            res.render('user');
        if(mangers[i].user == req.param('UserName') && mangers[i].password == req.param('Password'))
            res.render('manger');
        if(workers[i].user == req.param('UserName') && workers[i].password == req.param('Password'))
            res.send('worker');
    }
    res.send('not good');
});


app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
