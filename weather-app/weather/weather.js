const request = require('request');

const getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/82e49c9fc77cd55319d19e2d5dc5ea08/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, body.daily.summary);
        }
        else {
            callback('Unable to connect to weather server.');
        }
    })
};

module.exports.getWeather = getWeather;