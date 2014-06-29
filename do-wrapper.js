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
    extend = require('xtend'),
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
*   Helper method to perform API GET.
*   Provides authentication.
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
*   Helper method to perform API POST.
*   Providers authentication.
*/
DigitalOcean.prototype._post = function(action, body, callback) {
    var finalURL = API + action;
    request.post({
            url: finalURL,
            body: body,
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

DigitalOcean.prototype._delete = function(action, callback) {
    var finalURL = API + action;
    request.del({
            url: finalURL,
            headers: this.headers,
            strictSSL: true,
            json: true
        },
        function(err, response) {
            callback(err, response || {});
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

/*
*   Retrieve a list of available Kernels for a Droplet.
*   More Information: https://developers.digitalocean.com/#list-all-available-kernels-for-a-droplet
*/
DigitalOcean.prototype.dropletsGetKernelsForDroplet = function(dropletID, callback) {
    var url = 'droplets/' + dropletID + '/kernels';
    this._get(url, function(err, body) {
        callback(err, body.kernels);
    });
};

/*
*   Retrieve a list of snapshots that have been created for a Droplet.
*   More Information: https://developers.digitalocean.com/#retrieve-snapshots-for-a-droplet
*/
DigitalOcean.prototype.dropletsGetSnapshotsForDroplet = function(dropletID, callback) {
    var url = 'droplets/' + dropletID + '/snapshots';
    this._get(url, function(err, body) {
        callback(err, body.snapshots);
    });
};

/*
*   Retrieve a list of backups that have been created for a Droplet.
*   More Information: https://developers.digitalocean.com/#retrieve-backups-for-a-droplet
*/
DigitalOcean.prototype.dropletsGetBackupsForDroplet = function(dropletID, callback) {
    var url = 'droplets/' + dropletID + '/backups';
    this._get(url, function(err, body) {
        callback(err, body.backups);
    });
};

/*
*   Retrieve a list of executed actions on a Droplet.
*   More Information: https://developers.digitalocean.com/#retrieve-actions-for-a-droplet
*/
DigitalOcean.prototype.dropletsGetActionsForDroplet = function(dropletID, callback) {
    var url = "droplets/" + dropletID + '/actions';
    this._get(url, function(err, body) {
        callback(err, body.actions);
    });
};

/*
*   Create a new Droplet based on parameters.
*   More Information: https://developers.digitalocean.com/#create-a-new-droplet
*/
DigitalOcean.prototype.dropletsCreateNewDroplet = function(name, region, size, image, extras, callback) {
    var options = {
            "name": name,
            "region": region,
            "size": size,
            "image": image
        },
        url = '/droplets';

    options = extend(options, extras);

    this._post(url, options, function(err, body) {
        callback(err, body);
    });
};

/*
*   Retrieve an existing Droplet
*   More Information: https://developers.digitalocean.com/#retrieve-an-existing-droplet-by-id
*/
DigitalOcean.prototype.dropletsGetDropletById = function(dropletID, callback) {
    var url = 'droplets/' + dropletID;
    this._get(url, function(err, body) {
        callback(err, body.droplet);
    });
};

/*
    Delete an Existing Droplet
    More Information: https://developers.digitalocean.com/#delete-a-droplet
*/
DigitalOcean.prototype.dropletsDeleteDroplet = function(dropletID, callback) {
    var url = 'droplets/' + dropletID;
    this._delete(url, function(err, response) {
        callback(err, response);
    });
};