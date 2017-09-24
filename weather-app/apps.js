const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

//Encode and Decode
const argv = yargs
  .options({
    a:{
      demand: true, //need input
      alias: 'address', //--address
      describe: 'Address to fetch',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;
//console.log(argv);
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  }else {
    console.log('===========================');
    console.log('Weather Report');
    console.log('---------------------------');
    console.log(results.address);
    weather.getWeather(results.lat,results.lng, (errorMessage,weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      }else {
        console.log(`It is currently ${weatherResults.temperature} F. `);
        console.log(`It feels like ${weatherResults.apparentTemperature} F`);
        console.log('===========================');
      }
    });
  }
});
