const request = require("request");
const dotenv = require("dotenv");
dotenv.config();

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiamFtZXNqdXR0IiwiYSI6ImNqeGtrY2tiOTFhbzQzeG10a2o2OXVuNHMifQ.LNJwmt-sIDbbf3roxgK95w`;
  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("Unable to connect to location services", undefined);
    } else if (body.features.length === 0) {
      callback("Invalid location", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geoCode;
