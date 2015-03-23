var RequestHelper = require('./request_helper'),
    api;

/**
 * Digital Ocean API Wrapper
 *
 * @param {string} accessToken - Your Private API Token
 * @param {number} pageSize - Size of results to return
 *
 * @constructor
 */
var DigitalOcean = function(accessToken, pageSize) {
    api = new RequestHelper(accessToken);
    this.pageSize = pageSize;
};

/**
 * Get a list of Droplets
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-droplets list-all-droplets}
 *
 * @param {*} query - Query Options
 * @param {*} callback - Callback Function
 */
DigitalOcean.prototype.dropletsGetAll = function (query, callback) {

  var options = {
    actionPath: 'droplets',
    key: 'droplets',
    pageSize: query.pageSize || this.pageSize,
    pageNumber: query.pageNumber || 1,
    includeAll: query.includeAll || false
  };

  api.request(options, callback);

};

/**
 * Get a list of Kernels available for a Droplet
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-available-kernels-for-a-droplet list-all-available-kernels-for-a-droplet}
 *
 * @param {number} dropletId - The Id of the Droplet
 * @param {*} query - Query Options
 * @param {*} callback - Callback Function
 */
DigitalOcean.prototype.dropletsGetKernels = function (dropletId, query, callback) {

  var options = {
    actionPath: 'droplets/' + dropletId + '/kernels',
    key: 'kernels',
    pageSize: query.pageSize || this.pageSize,
    pageNumber: query.pageNumber || 1,
    includeAll: query.includeAll || false
  };

  api.request(options, callback);

};

/**
 * Get a list of Snapshots for a Droplet
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-snapshots-for-a-droplet retrieve-snapshots-for-a-droplet}
 *
 * @param {number} dropletId - The Id of the Droplet
 * @param {*} query - Query Options
 * @param {*} callback - Callback Function
 */
DigitalOcean.prototype.dropletsGetSnapshots = function (dropletId, query, callback) {

  var options = {
    actionPath: 'droplets/' + dropletId + '/snapshots',
    key: 'snapshots',
    pageSize: query.pageSize || this.pageSize,
    pageNumber: query.pageNumber || 1,
    includeAll: query.includeAll || false
  };

  api.request(options, callback);

};

/**
 * Get a list of Backups for a Droplet
 * Info: {@https://developers.digitalocean.com/documentation/v2/#list-backups-for-a-droplet list-backups-for-a-droplet}
 *
 * @param {number} dropletId - The Id of the Droplet
 * @param {*} query - Query Options
 * @param {*} callback - Callback Function
 */
DigitalOcean.prototype.dropletsGetBackups = function (dropletId, query, callback) {

  var options = {
    actionPath: 'droplets/' + dropletId + '/backups',
    key: 'backups',
    pageSize: query.pageSize || this.pageSize,
    pageNumber: query.pageNumber || 1,
    includeAll: query.includeAll || false
  };

  api.request(options, callback);

};

/**
 * Get a list of Actions for a Droplet
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-actions-for-a-droplet list-actions-for-a-droplet}
 *
 * @param {number} dropletId - The Id of the Droplet
 * @param {*} query - Query Options
 * @param {*} callback - Callback Function
 */
DigitalOcean.prototype.dropletsGetActions = function (dropletId, query, callback) {

  var options = {
    actionPath: 'droplets/' + dropletId + '/actions',
    key: 'actions',
    pageSize: query.pageSize || this.pageSize,
    pageNumber: query.pageNumber || 1,
    includeAll: query.includeAll || false
  };

  api.request(options, callback);

};

/**
 * Create a New Droplet
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-droplet}
 *
 * @param {*} configuration - Creation parameters, see info for more details.
 * @param {*} callback - Callback Function
 */
DigitalOcean.prototype.dropletsCreate = function (configuration, callback) {

  var options = {
    actionPath: 'droplets',
    method: 'POST',
    body: configuration
  };

  api.request(options, callback);

};

module.exports = DigitalOcean;