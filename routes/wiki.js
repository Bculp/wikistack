var express = require('express');
var router = express.Router();

// retrieve all wiki pages
router.get('/', (req, res, next)=>{
	res.redirect('/');
})

// add page to db
router.post('/', (req, res, next)=>{
	res.json(req.body);

})

// retrieve add page form
router.get('/add', (req, res, next)=>{
	res.render('addpage');
})

module.exports = router;