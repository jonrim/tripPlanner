'use strict';

var Promise = require('bluebird');
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

// var models = require('../models')

function makeRouter(app, models) {

  app.get('/', (req, res, next) => {
    // console.log(models.model('hotel').findAll.toString());
    var hotels = Hotel.findAll();
    var restaurants = Restaurant.findAll();
    var activities = Activity.findAll();
    Promise.all([hotels, restaurants, activities]).then( result =>  {
      console.log(result);
      res.render('selector.html',{
        hotels: result[0],
        restaurants: result[1],
        activities: result[2]
      })
    } ).catch( err => console.trace( err ) )
  })
}

module.exports = makeRouter;
