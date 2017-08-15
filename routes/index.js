const router = require('express').Router()
const db = require('../models')
const hotels = db.models.hotel;
const activities = db.models.activity;
const restaurants = db.models.restaurant;

router.get('/', function(req, res, next){
	let h, a, r

	// let h = hotels.findAll()
	// let a = activities.findAll()
	// let r = restaurants.findAll()
	// Promise.all([h,a,r])
	// 	.then(function(har){
	// 		res.render(index, {hotels:har[0],activities:har[1],restaurants:har[2]})
	// 	})

	hotels.findAll()
		.then(function(hotels){
			h = hotels;
			return activities.findAll()
		})
		.then(function(acts){
			a = acts;
			return restaurants.findAll()
		})
		.then(function(res){
			r=res;
		})
		.then(function(){
			res.render('index', {hotels:h,activities:a,restaurants:r})
		})
	// res.render('index', {hotels:har[0],activities:har[1],restaurants:har[2]})
})

router.get('/error', function(req, res, next){
	res.render('error')
})

module.exports = router
