var express = require('express');
var app = express ();
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var routes = require('./routes/');
var wikiRoutes = require('./routes/wiki.js');
var bodyParser = require('body-parser');
var db = require('./db/models');

nunjucks.configure('views', {noCache : true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

db.sync
	.then(function() {
		app.listen(4000,function() {
			console.log("server is listening");
		})
	})


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(morgan('combined'));
app.use(express.static('public'));
app.use('/', routes);
app.use('/wiki', wikiRoutes);

