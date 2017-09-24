const request = require('request');

var geocodeAddress = (address,callback) => {
  var ad = encodeURIComponent(address);
  //HTTP request
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBqPwbUFUbH2rsMQcQmWA8ugAzQclPIgho&address=${ad}`,
    json: true
  },(error, response, body) => {
    if(error){
      callback('Unable to connect to server')
    }else if (body.status == 'ZERO_RESULTS') {
      callback('Unable to find the address');
    }else if (body.status == 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng
      });
    }
  })
}

module.exports.geocodeAddress = geocodeAddress;
