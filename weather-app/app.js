const request = require('request');

request({
    url: "http://maps.googleapis.com/maps/api/geocode/json?address=impa%20jardim%20botanico%20rio%20de%20janeiro",
    json: true
}, (error, response, body) => {
    console.log(`Adress: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});