const router = require('express').Router()
const db = require('../models')
const hotels = db.models.hotel;
const activities = db.models.activity;
const restaurants = db.models.restaurant;

router.get('/', function(req, res, next){
	let h = hotels.findAll()
	let a = activities.findAll()
	let r = restaurants.findAll()
	let har = Promise.all([h,a,r])
	res.render('index', {hotels:har[0],activities:har[1],restaurants:har[2]})
})

router.get('/error', function(req, res, next){
	res.render('error')
})

module.exports = router
