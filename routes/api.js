var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express'); // ok
var jwt = require('jsonwebtoken');

var router = express.Router();

var User = require("../models/User");



var flag=false;

router.post('/signup', function(req, res) {
  User.findOne({
    email: (req.body.email).toLowerCase()
  }, function(err, user) {

    if (err) throw err;

    if (!user) {

     // Create a variable

     var newUser = new User({
       username: req.body.username,
       email: (req.body.email).toLowerCase(),
       password: req.body.password
  });

      newUser.save(function(err) {
        if (err) {
          console.log('Error while saving');
          res.json({success: false, msg: 'Email already exists.'});
        }
        console.log('*** I think the user is created ***');
        res.json({success: true, msg: 'Successful created new user.'});
      });
  }
});
});

// Sign In Component
router.post('/signin', function(req, res) {
  User.findOne({
    email: (req.body.email).toLowerCase()
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

// // API to fetch Events from database

// router.get('/event', passport.authenticate('jwt', { session: false}), function(req, res) {
//   var token = getToken(req.headers);
//   if (token) {
//     Event.find(function (err, events) {
//       if (err) return next(err);
//       res.json(events);
//     });
//   } else {
//     return res.status(403).send({success: false, msg: 'Unauthorized.'});
//   }
// });

// // API to add Events to the database

// router.post('/event', passport.authenticate('jwt', { session: false}), function(req, res) {
//   var token = getToken(req.headers);
//   if (token) {
//     console.log(req.body);
//     var newEvent = new Event({
//       eventId: req.body.eventId,
//       eventName: req.body.eventName,
//       eventLocation: req.body.eventLocation,
//       zipcode: req.body.eventDate,
//       eventDescription:req.body.eventDescription
//     });

//     newEvent.save(function(err) {
//       if (err) {
//         return res.json({success: false, msg: 'Event Creation Failed.'});
//       }
//       res.json({success: true, msg: 'Successful created new event.'});
//     });
//   } else {
//     return res.status(403).send({success: false, msg: 'Unauthorized.'});
//   }
// });


getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
