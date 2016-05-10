var Sequelize = require('sequelize');
var db = new Sequelize('postgres://postgres:password@localhost:5432/tripplanner', {
	logging: false
});
// db.model.place = require('./place');
// db.model.hotel = require('./hotel');
// db.model.activity = require('./activity');
// db.model.restaurant = require('./restaurant');

module.exports = db;