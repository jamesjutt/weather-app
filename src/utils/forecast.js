const request = require("request");
const dotenv = require("dotenv");
dotenv.config();

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/038f4c6fb545c8fb41ecf47cfdf2debc/${encodeURIComponent(
    lat
  )},${encodeURIComponent(long)}`;

  request({ url, json: true }, (err, response) => {
    if (err) {
      callback("Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        response.body.currently
        // "Summary: " +
        //   response.body.daily.data[0].summary +
        //   " Time: " +
        //   response.body.currently.time +
        //   " PrecipitationIntensity: " +
        //   response.body.currently.precipIntensity +
        //   " PrecipitationProbability: " +
        //   response.body.currently.precipProbability +
        //   " Temperature: " +
        //   response.body.currently.temperature +
        //   " Feelslike: " +
        //   response.body.currently.apparentTemperature +
        //   " DewPoint: " +
        //   response.body.currently.dewPoint +
        //   " Humidity: " +
        //   response.body.currently.humidity +
        //   " Pressure: " +
        //   response.body.currently.pressure +
        //   " WindSpeed: " +
        //   response.body.currently.windSpeed +
        //   " WindGust: " +
        //   response.body.currently.windGust +
        //   " WindBearing: " +
        //   response.body.currently.windBearing +
        //   " CloudCover: " +
        //   response.body.currently.cloudCover +
        //   " UVIndex: " +
        //   response.body.currently.uvIndex +
        //   " Visibility: " +
        //   response.body.currently.visibility +
        //   " Ozone: " +
        //   response.body.currently.ozone
      );
    }
  });
};

module.exports = forecast;
