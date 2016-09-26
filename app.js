var express = require('express');
var app = express ();
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var routes = require('./routes/');
var bodyParser = require('body-parser');

nunjucks.configure('views', {noCache : true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

var server = app.listen(4000,function() {
	console.log('server is listening');
})


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(morgan('combined'));
app.use(express.static('public'));
app.use(routes);


