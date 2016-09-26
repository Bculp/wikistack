var express = require('express');
var router = express.Router();
var app = express();
var models = require('../db/models');
var Page = models.Page;


router.get('/', function (req, res) {
	Page.findAll({
			attributes : ["title"]
		})
		.then((pages)=>{
			res.render('index', {pages})
		})
})



module.exports = router;