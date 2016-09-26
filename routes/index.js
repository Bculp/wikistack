var express = require('express');
var router = express.Router();
var app = express();
var models = require('../db/models');
var Page = models.Page;
var User = models.User;


router.get('/', function (req, res) {
	Page.findAll({
			attributes : ["title"]
		})
		.then((pages)=>{
			res.render('index', {pages})
		})
})

router.get('/users', function(req, res) {
	User.findAll({
	})
	.then((users) => {
		res.render('users', {users})
	})
})



module.exports = router;