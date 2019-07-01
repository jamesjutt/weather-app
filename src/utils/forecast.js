const request = require("request");
const dotenv = require("dotenv");
dotenv.config();

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/${
    process.env.SECRET_KEY
  }/${encodeURIComponent(lat)},${encodeURIComponent(long)}`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.daily.data[0].summary} It is currently ${
          body.currently.temperature
        } degrees out. There is a ${
          body.currently.precipProbability
        }% chance of rain!`
      );
    }
  });
};

module.exports = forecast;
