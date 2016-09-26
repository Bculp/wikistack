var express = require('express');
var router = express.Router();
var models = require('../db/models');
var Page = models.Page;
var User = models.User;

// retrieve all wiki pages
router.get('/', (req, res, next)=>{
	res.redirect('/');
})

// add page to db
router.post('/', (req, res, next)=>{
	var title = req.body.title;
	var content = req.body.content;
	var name = req.body.name;
	var email = req.body.email;

	User.findOrCreate({where : {name: name, email: email}})
	.spread(function(user, created) {
		var page = Page.build({
			title, content, authorId : user.id
		})
		page.save()
			.then(function(savedObj) {
				res.redirect(this.urlTitle)
			})
			.catch(next);
		})
	
	})


// retrieve add page form
router.get('/add', (req, res, next)=>{
	res.render('addpage');
})

router.get('/:articleTitle', (req,res,next)=>{
	var articleTitle = req.params.articleTitle;

	// query database to find actual page

	Page.findOne({
		where: {
			urlTitle: articleTitle
		}
	}).then((result)=>{
		// found result
		// res.send(result);
		res.render('wikipage', {result});
	}).catch(next); // catch if no result

})

module.exports = router;
