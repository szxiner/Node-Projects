//5b440e7980d07101373217a19ed0fcfd
//https://api.darksky.net/forecast/[key]/[latitude],[longitude]
const request = require('request');
var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/5b440e7980d07101373217a19ed0fcfd/${lat},${lng}`,
    json: true
  },(error, response, body) => {
    if(error){
      callback('Unable to connect to forecast.io');
    }else if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    }else{
      callback('Unable to fetch weather');
    }
  });
}

module.exports.getWeather = getWeather;
