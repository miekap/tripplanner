const router = require('express').Router()

router.get('/', function(req, res, next){
	res.render('index')
})

router.get('/error', function(req, res, next){
	res.render('error')
})

module.exports = router
