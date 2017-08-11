const Sequelize = require('sequelize')
const db = require('./_db')
const Place = require('./place.js')
const Hotel = require('./hotel.js')
const Restaurant = require('./restaurant.js')
const Activity = require('./activity.js')

Hotel.belongsTo(Place)
Activity.belongsTo(Place)
Restaurant.belongsTo(Place)

module.exports = db
