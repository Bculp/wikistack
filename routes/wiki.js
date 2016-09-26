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

	var page = Page.build({
		title, content
	})
	page.save().then(function(savedObj) {
		res.json(savedObj)
	});
})

// retrieve add page form
router.get('/add', (req, res, next)=>{
	res.render('addpage');
})

module.exports = router;