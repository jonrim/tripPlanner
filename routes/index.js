'use strict';

var Promise = require('bluebird');
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var config = require('../assets/env/config.json');

// var models = require('../models')

function makeRouter(app) {

  app.get('/', (req, res, next) => {
    // console.log(models.model('hotel').findAll.toString());
    var hotels = Hotel.findAll();
    var restaurants = Restaurant.findAll();
    var activities = Activity.findAll();
    Promise.all([hotels, restaurants, activities]).then( result =>  {
      res.render('index',{
        hotels: result[0],
        restaurants: result[1],
        activities: result[2]
      })
    } ).catch( err => console.trace( err ) )
  })

  app.get('/map', (req, res, next) => {
    var hotels = Hotel.findAll();
    var restaurants = Restaurant.findAll();
    var activities = Activity.findAll();
    Promise.all([hotels, restaurants, activities]).then( result =>  {
      res.render('index',{
        hotels: result[0],
        restaurants: result[1],
        activities: result[2],
        mapKey: config.mapKey
      })
    } ).catch( err => console.trace( err ) )
  })
}

module.exports = makeRouter;
