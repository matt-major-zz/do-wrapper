var RequestHelper = require('./request_helper'),
    api;

var DigitalOcean = function(accessToken, pageSize) {
    api = new RequestHelper(accessToken);
    this.pageSize = pageSize;
};

module.exports = DigitalOcean;

/**
 * Get a list of Droplets
 * Info: {@link https://developers.digitalocean.com/#list-all-droplets list-all-droplets}
 *
 * @param {*} query - Query Options
 * @param {*} callback - Callback Function
 */
DigitalOcean.prototype.dropletsGetAll = function (query, callback) {

  var options = {
    actionPath: 'droplets',
    pageSize: query.pageSize || this.pageSize,
    pageNumber: query.pageNumber || 1
  };

  if (query.includeAll) {
    api.getAllPages('droplets', options, callback);
  } else {
    api.submitRequest(options, callback);
  }

};

/**
 * Get a list of Kernels available for a Droplet
 * Info: {@link https://developers.digitalocean.com/#list-all-available-kernels-for-a-droplet list-all-available-kernels-for-a-droplet}
 *
 * @param {number} dropletId - The Id of the Droplet
 * @param {*} query - Query Options
 * @param {*} callback - Callback Function
 */
DigitalOcean.prototype.dropletsGetKernels = function (dropletId, query, callback) {

  var options = {
    actionPath: 'droplets/' + dropletId + '/kernels',
    pageSize: query.pageSize || this.pageSize,
    pageNumber: query.pageNumber || 1
  };

  if (query.includeAll) {
    api.getAllPages('kernels', options, callback);
  } else {
    api.submitRequest(options, callback);
  }

};

/**
 * Get a list of Snapshots for a Droplet
 * Info: {@link https://developers.digitalocean.com/#retrieve-snapshots-for-a-droplet retrieve-snapshots-for-a-droplet}
 *
 * @param {number} dropletId - The Id of the Droplet
 * @param {*} query - Query Options
 * @param {*} callback - Callback Function
 */
DigitalOcean.prototype.dropletsGetSnapshots = function (dropletId, query, callback) {

  var options = {
    actionPath: 'droplets/' + dropletId + '/snapshots',
    pageSize: query.pageSize || this.pageSize,
    pageNumber: query.pageNumber || 1
  };

  if (query.includeAll) {
    api.getAllPages('snapshots', options, callback);
  } else {
    api.submitRequest(options, callback);
  }

};