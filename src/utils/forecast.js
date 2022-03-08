const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7aeca1018021347a94a84f1204978331&query=' + latitude + ',' + longitude 

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. it is curently ' + body.current.temperature + ' degrees out. And the temperature feelslike ' + body.current.feelslike + ' degrees');
        }
    });
}

module.exports = forecast;