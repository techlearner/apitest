'use strict';

var url = require('url');


var Register = require('./RegisterService');


module.exports.registrationManagerRegisterbusinessPost = function registrationManagerRegisterbusinessPost (req, res, next) {
  var entityId = req.swagger.params['entityId'].value;
  var entityType = req.swagger.params['entityType'].value;
  var firstName = req.swagger.params['firstName'].value;
  var address = req.swagger.params['address'].value;
  var city = req.swagger.params['city'].value;
  var state = req.swagger.params['state'].value;
  var country = req.swagger.params['country'].value;
  var pincode = req.swagger.params['pincode'].value;
  var publicKey = req.swagger.params['publicKey'].value;
  

  var result = Register.registrationManagerRegisterbusinessPost(entityId, entityType, firstName, address, city, state, country, pincode, publicKey);

console.log("SSSSSSSSSSSSSSS "+result)
  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
