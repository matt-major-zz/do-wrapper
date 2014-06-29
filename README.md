do-wrapper
==========
Digital Ocean API v2 - Node.js Wrapper

**Work in progress, aiming to cover all API calls in the new version.**

## Usage

```
//Import
var DigitalOcean = require('do-wrapper');

//Add your Digital Ocean API Access Token
var key = 'xxxxx';

//Create a new instance with your Access Token
var api = new DigitalOcean(key);
```

**Example - Return all Droplets**
```
api.dropletsGetAll(function(err, droplets) {
    console.log(droplets);
});
```

## Methods
###Droplets
Some Droplet methods require additional parameters, for this we pass in "extras".

If the method you are using requires no additional parameters pass in ```{}```.

**Example**
```js
var options = {"private_networking": true};
api.dropletsCreateNewDroplet("a-droplet-test", "nyc2", "512mb", 1601, options, function(err, droplet) {
    console.log(droplet.id);
});
```

Available Methods
```js
dropletsGetAll(callback)
dropletsGetKernelsForDroplet(dropletID, callback)
dropletsGetBackupsForDroplet(dropletID, callback)
dropletsGetActionsForDroplet(dropletID, callback)
dropletsCreateNewDroplet(name, region, size, image, extras, callback)
dropletsGetDropletById(dropletID, callback)
dropletsDeleteDroplet(dropletID, callback)
```
###Droplet Actions
Some Droplet Actions require more than one parameter, for this we pass in the "options".

If the method you are using requires no additional parameters pass in ```{}```.

**Example**
```js
var options = {"name": "ny2-njs"};
api.dropletActionRequest(1805584, 'rename', options, function(err, action) {
    console.log(action);
});
```
Available Methods
```js
dropletActionRequest(dropletID, action, options, callback)
dropletActionGetStatus(dropletID, actionID, callback)
```
###Domains
Available Methods
```js
domainGetAll(callback)
domainAddNew(domain, ip, callback)
domainDeleteDomain(domain, callback)
```
###Domain Records
Some Domain Records require additional parameters.

If the method you are using requires no additional parameters pass in ```{}```.

**Example**
```js
var options = {"name": "subdomain", "data": "2001:db8::ff01:52:8339"};
api.domainRecordsAddnew('test.com', 'A', options, function(err, record) {
    console.log(record);
});
```
Available Methods
```js
domainRecordsGetAll(domain, callback)
domainRecordsAddnew(domain, type, options, callback)
domainRecordsGetRecord(domain, recordID, callback)
domainRecordsDeleteRecord(domain, recordID, callback)
```
###Images
Available Methods
```js
Coming soon...
```
###Image Actions
Available Methods
```js
Coming soon...
```
###Keys
Available Methods
```js
Coming soon...
```
###Regions
Available Methods
```js
regionsGetAll(callback)
```
###Sizes
Available Methods
```js
sizesGetAll(callback)
```

##License
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