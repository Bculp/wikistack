var express = require('express');
var router = express.Router();
var models = require('../db/models');
var Page = models.Page;
var User = models.User;

router.get('/', function(req, res) {
	User.findAll({
	})
	.then((users) => {
		res.render('users', {users})
	})
})

router.get('/:usersId', (req,res,next)=>{
	var userId = req.params.userId;

	// query database to find actual user

	User.findOne({
		where: {
			id: userId
		}
	}).then((users)=>{
		// found result
		// res.send(result);
		res.render('userPage', {users});
	}).catch(next); // catch if no result

})

module.exports = router;