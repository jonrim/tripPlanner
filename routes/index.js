'use strict';


function makeRouter(app, models) {
  var model = models.model;
  app.get('/', (req, res, next) => {
    var hotels = model('hotel').findAll;
    var restaurants = model('restaurant').findAll;
    var activities = model('activity').findAll;
    Promise.all([hotels, restaurants, activities]).spread( (hotelsQ, restaurantsQ, activitiesQ) => {
      res.render('index',{
        hotels: hotelsQ,
        restaurants: restaurantsQ,
        activities: activitiesQ
      })
    }).catch( err => console.error( err ) )
  })
}

module.exports = makeRouter;
