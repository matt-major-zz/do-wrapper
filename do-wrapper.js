/*
 The MIT License (MIT)

 Copyright (c) 2014 Matt Major

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/

var request = require('request'),
    API = 'https://api.digitalocean.com/v2/';

/*
*   Digital Ocean API v2 Client Constructor.
*   Requires accessToken to construct header.
*/
var DigitalOcean = function(accessToken) {
    this.headers = {
        'authorization': 'Bearer ' + accessToken,
        'content_type': 'application/json'
    };
};
module.exports = DigitalOcean;

/*
*   Helper method to perform API call.
*   Provides authentication in header.
*/
DigitalOcean.prototype._get = function(action, callback) {
    var finalURL = API + action;
    request.get({
        url: finalURL,
        headers: this.headers,
        strictSSL: true,
        json: true
    },
    function(err, response, body) {
        if (!err && !!body.status && body.status !== 'OK') {
            err = new Error(body.description || body);
        }
        callback(err, body || {});
    });
};

/*
*   Return a list of all active Droplets on your Digital Ocean account.
*   More Information: https://developers.digitalocean.com/#list-all-droplets
*/
DigitalOcean.prototype.dropletsGetAll = function(callback) {
    this._get('droplets/', function(err, body) {
        callback(err, body.droplets);
    });
};