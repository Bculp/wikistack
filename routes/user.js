var express = require('express');
var router = express.Router();
var models = require('../db/models');
var Page = models.Page;
var User = models.User;
var Promise = require('bluebird');

router.get('/', function(req, res) {
	User.findAll({
	})
	.then((users) => {
		res.render('users', {users})
	})
})

router.get('/:userId', (req,res,next)=>{
	var userId = req.params.userId;

	// query database to find actual user

	var promise1 = User.findOne({
		where: {
			id: userId
		}
	});
	var promise2 = Page.findAll({
		where: {
			authorId: userId
		}
	});

	Promise.all([promise1, promise2]).spread(function(singleUser, allPages) {
		var results = {};
		results.name = singleUser.name;
		results.email = singleUser.email;
		results.pages = allPages;
		res.render('singleUserPage', {results});
	})
	.catch(e => {
		throw e;
	})


})

module.exports = router;