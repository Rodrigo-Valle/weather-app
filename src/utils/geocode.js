const request = require('postman-request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoicm9kcmlnby12YWxsZSIsImEiOiJjbDBiZGw2aG8wNTBqM2NwbHZtcXFlYmc0In0.bhpCRclTzn8Sbl-mXf7Ceg&limit=1'

    request( { url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect with the location service', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find a location with the terms used, try with another term', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
}

module.exports = geocode;