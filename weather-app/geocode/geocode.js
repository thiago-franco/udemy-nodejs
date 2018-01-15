const request = require('request');

const geocodeAddress = (address, callback) => {
    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
        json: true
    }, (error, response, body) => {
        if(error) {
            callback(error);
        }
        else {
            //console.log(body.status);
            switch(body.status) {
                case "ZERO_RESULTS": 
                callback("No results were found");
                break;
                case "OK":
                callback(undefined, {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
                break;
                default: console.log("Unable to obtain information");
            }
        }
    });
}

module.exports.geocodeAddress = geocodeAddress;