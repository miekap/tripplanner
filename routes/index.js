const router = require('express').Router()
const db = require('./models')
const hotels = db.hotel;
const activities = db.models.activity;
const restaurants = db.models.restaurant;

router.get('/', function(req, res, next){
	let h = hotels.findAll()
	let a = activities.findAll()
	let r = restaurants.findAll()
	res.render('index', {hotels:h,activities:a,restaurants:r})
})

router.get('/error', function(req, res, next){
	res.render('error')
})

module.exports = router
