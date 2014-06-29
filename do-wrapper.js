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
*   Provides authentication.
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

/*
*   Helper method to perform API DELETE.
*   Provides authentication.
*/
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
*   Type: Droplet
*   Action: Return a list of all active Droplets on your Digital Ocean account.
*   More Information: https://developers.digitalocean.com/#list-all-droplets
*/
DigitalOcean.prototype.dropletsGetAll = function(callback) {
    this._get('droplets/', function(err, body) {
        callback(err, body);
    });
};

/*
*   Type: Droplet
*   Action: Retrieve a list of available Kernels for a Droplet.
*   More Information: https://developers.digitalocean.com/#list-all-available-kernels-for-a-droplet
*/
DigitalOcean.prototype.dropletsGetKernelsForDroplet = function(dropletID, callback) {
    var url = 'droplets/' + dropletID + '/kernels';
    this._get(url, function(err, body) {
        callback(err, body);
    });
};

/*
*   Type: Droplet
*   Action: Retrieve a list of snapshots that have been created for a Droplet.
*   More Information: https://developers.digitalocean.com/#retrieve-snapshots-for-a-droplet
*/
DigitalOcean.prototype.dropletsGetSnapshotsForDroplet = function(dropletID, callback) {
    var url = 'droplets/' + dropletID + '/snapshots';
    this._get(url, function(err, body) {
        callback(err, body);
    });
};

/*
*   Type: Droplet
*   Action: Retrieve a list of backups that have been created for a Droplet.
*   More Information: https://developers.digitalocean.com/#retrieve-backups-for-a-droplet
*/
DigitalOcean.prototype.dropletsGetBackupsForDroplet = function(dropletID, callback) {
    var url = 'droplets/' + dropletID + '/backups';
    this._get(url, function(err, body) {
        callback(err, body);
    });
};

/*
*   Type: Droplet
*   Action: Retrieve a list of executed actions on a Droplet.
*   More Information: https://developers.digitalocean.com/#retrieve-actions-for-a-droplet
*/
DigitalOcean.prototype.dropletsGetActionsForDroplet = function(dropletID, callback) {
    var url = "droplets/" + dropletID + '/actions';
    this._get(url, function(err, body) {
        callback(err, body);
    });
};

/*
*   Type: Droplet
*   Action: Create a new Droplet based on parameters.
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
*   Type: Droplet
*   Action: Retrieve an existing Droplet
*   More Information: https://developers.digitalocean.com/#retrieve-an-existing-droplet-by-id
*/
DigitalOcean.prototype.dropletsGetDropletById = function(dropletID, callback) {
    var url = 'droplets/' + dropletID;
    this._get(url, function(err, body) {
        callback(err, body);
    });
};

/*
*   Type: Droplet
*   Action: Delete an Existing Droplet
*   More Information: https://developers.digitalocean.com/#delete-a-droplet
*/
DigitalOcean.prototype.dropletsDeleteDroplet = function(dropletID, callback) {
    var url = 'droplets/' + dropletID;
    this._delete(url, function(err, body) {
        callback(err, body);
    });
};

/*
*    Type: Droplet Action
*    Action: Performs a given action against a given Droplet
*    More Information: https://developers.digitalocean.com/#droplet-actions
*/
DigitalOcean.prototype.dropletActionRequest = function(dropletID, action, options, callback) {
    var url = 'droplets/' + dropletID + '/actions',
        action = {"type": action};

    action = extend(action, options);

    this._post(url, action, function(err, body) {
        callback(err, body.action);
    });
};

/*
*    Type: Droplet Action
*    Action: Retrieve status of a given action against a given Droplet
*    More Information: https://developers.digitalocean.com/#retrieve-a-droplet-action
*/
DigitalOcean.prototype.dropletActionGetStatus = function(dropletID, actionID, callback) {
    var url = 'droplets/' + dropletID + '/actions/' + actionID;
    this._get(url, function(err, body) {
        callback(err, body);
    });
};

/*
*   Type: Domain
*   Action: List All Domains
*   More Information: https://developers.digitalocean.com/#list-all-domains
*/
DigitalOcean.prototype.domainGetAll = function(callback) {
    var url = 'domains/';
    this._get(url, function(err, body) {
        callback(err, body);
    });
};

/*
*   Type: Domain
*   Action: Add a New Domain
*   More Information: https://developers.digitalocean.com/#create-a-new-domain
*/
DigitalOcean.prototype.domainAddNew = function(domain, ip, callback) {
    var url = 'domains/',
        options = {"name": domain, "ip_address": ip};
    this._post(url, options, function(err, body) {
        callback(err, body);
    });
};

/*
*   Type: Domain
*   Action: Retrieve an Existing Domain
*   More Information: https://developers.digitalocean.com/#retrieve-an-existing-domain
*/
DigitalOcean.prototype.domainGetByName = function(domain, callback) {
    var url = 'domains/' + domain;
    this._get(url, function(err, body) {
        callback(err, body);
    });
}

/*
 *   Type: Domain
 *   Action: Delete an Existing Domain
 *   More Information: https://developers.digitalocean.com/#delete-a-domain
 */
DigitalOcean.prototype.domainDeleteDomain = function(domain, callback) {
    var url = 'domains/' + domain;
    this._delete(url, function(err, body) {
        callback(err, body);
    });
};

/*
*   Type: Domain Record
*   Action: List All Domain Records
*   More Information: https://developers.digitalocean.com/#list-all-domain-records
*/
DigitalOcean.prototype.domainRecordsGetAll = function(domain, callback) {
    var url = 'domains/' + domain + '/records';
    this._get(url, function(err, body) {
        callback(err, body);
    });
};

/*
*   Type: Domain Record
*   Action: Add New Domain Record
*   More Information: https://developers.digitalocean.com/#create-a-new-domain-record
*/
DigitalOcean.prototype.domainRecordsAddnew = function(domain, type, options, callback) {
    var url = 'domains/' + domain + '/records',
        body = {"type": type};

    body = extend(body, options);

    this._post(url, body, function(err, body) {
        callback(err, body);
    });
};

/*
*   Type: Domain Record
*   Action: Retrieve Domain Record
*   More Information: https://developers.digitalocean.com/#retrieve-an-existing-domain-record
*/
DigitalOcean.prototype.domainRecordsGetRecord = function(domain, recordID, callback) {
    var url = 'domains/' + domain + '/records/' + recordID;
    this._get(url, function(err, body) {
        callback(err, body);
    });
};

/*
*   Type: Domain Record
*   Action: Remove Existing Record
*   More Information: https://developers.digitalocean.com/#delete-a-domain-record
*/
DigitalOcean.prototype.domainRecordsDeleteRecord = function(domain, recordID, callback) {
    var url = 'domains/' + domain + '/records/' + recordID;
    this._delete(url, function(err, body) {
        callback(err, body);
    });
};

/*
*   Type: Region
*   Action: List All Regions
*   More Information: https://developers.digitalocean.com/#list-all-regions
*/
DigitalOcean.prototype.regionsGetAll = function(callback) {
    var url = 'regions/';
    this._get(url, function(err, body) {
        callback(err, body);
    });
};

/*
*   Type: Sizes
*   Action: List All Sizes
*   More Information: https://developers.digitalocean.com/#list-all-sizes
*/
DigitalOcean.prototype.sizesGetAll = function(callback) {
    var url = 'sizes/';
    this._get(url, function(err, body) {
        callback(err, body);
    });
};