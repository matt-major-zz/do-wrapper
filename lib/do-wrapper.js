var RequestHelper = require('./request_helper'),
    api;

/**
 * Digital Ocean API Wrapper
 *
 * @param {string} accessToken - Your Private API Token
 * @param {number} per_page - Size of results to return
 *
 * @constructor
 */
var DigitalOcean = function (accessToken, per_page) {
  api = new RequestHelper(accessToken);
  this.per_page = per_page;
};

/**
 * Get Account Information
 * Info {@link https://developers.digitalocean.com/documentation/v2/#account account}
 *
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.account = function (callback) {

  var options = {
    actionPath: 'account'
  };

  api.request(options, callback);

};

/**
 * Get Actions for Account
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-actions list-all-actions}
 *
 * @param {*} query - Query Options
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.accountGetActions = function (query, callback) {

  var options = {
    actionPath: 'actions',
    key: 'actions',
    qs: {
      per_page: query.per_page || this.per_page,
      page: query.page || 1
    },
    includeAll: query.includeAll || false
  };

  api.request(options, callback);

};

/**
 * Get Action Information for Account
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-action retrieve-an-existing-action}
 *
 * @param {number} actionId - The Id of the Action
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.accountGetAction = function (actionId, callback) {

  var options = {
    actionPath: 'actions/' + actionId,
  };

  api.request(options, callback);

};

/**
 * Get a list of Droplets
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-droplets list-all-droplets}
 *
 * @param {*} query - Query Options
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.dropletsGetAll = function (query, callback) {

  var options = {
    actionPath: 'droplets',
    key: 'droplets',
    qs: {
      per_page: query.per_page || this.per_page,
      page: query.page || 1
    },
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
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.dropletsGetKernels = function (dropletId, query, callback) {

  var options = {
    actionPath: 'droplets/' + dropletId + '/kernels',
    key: 'kernels',
    qs: {
      per_page: query.per_page || this.per_page,
      page: query.page || 1
    },
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
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.dropletsGetSnapshots = function (dropletId, query, callback) {

  var options = {
    actionPath: 'droplets/' + dropletId + '/snapshots',
    key: 'snapshots',
    qs: {
      per_page: query.per_page || this.per_page,
      page: query.page || 1
    },
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
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.dropletsGetBackups = function (dropletId, query, callback) {

  var options = {
    actionPath: 'droplets/' + dropletId + '/backups',
    key: 'backups',
    qs: {
      per_page: query.per_page || this.per_page,
      page: query.page || 1
    },
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
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.dropletsGetActions = function (dropletId, query, callback) {

  var options = {
    actionPath: 'droplets/' + dropletId + '/actions',
    key: 'actions',
    qs: {
      per_page: query.per_page || this.per_page,
      page: query.page || 1
    },
    includeAll: query.includeAll || false
  };

  api.request(options, callback);

};

/**
 * Create a New Droplet
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-droplet}
 *
 * @param {*} configuration - Creation parameters, see info for more details.
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.dropletsCreate = function (configuration, callback) {

  var options = {
    actionPath: 'droplets',
    method: 'POST',
    body: configuration
  };

  api.request(options, callback);

};

/**
 * Get a Droplet by Id
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-droplet-by-id retrieve-an-existing-droplet-by-id}
 *
 * @param {number} dropletId - The Id of the Droplet
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.dropletsGetById = function (dropletId, callback) {

  var options = {
    actionPath: 'droplets/' + dropletId
  };

  api.request(options, callback);

};

/**
 * Delete a Droplet
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-droplet delete-a-droplet}
 *
 * @param {number} dropletId - The Id of the Droplet
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.dropletsDelete = function (dropletId, callback) {

  var options = {
    actionPath: 'droplets/' + dropletId,
    method: 'DELETE'
  };

  api.request(options, callback);

};

/**
 * Get a list of Droplet Neighbors
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-neighbors-for-a-droplet list-neighbors-for-a-droplet}
 *
 * @param {number} dropletId - The Id of the Droplet
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.dropletsGetNeighbors = function (dropletId, callback) {

  var options = {
    actionPath: 'droplets/' + dropletId + '/neighbors'
  };

  api.request(options, callback);

};

/**
 * Get a report of Droplets sharing the same hardware
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-droplet-neighbors list-all-droplet-neighbors}
 *
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.dropletsGetNeighborsReport = function (callback) {

  var options = {
    actionPath: 'reports/droplet_neighbors'
  };

  api.request(options, callback);

};

/**
 * Get a list of scheduled Droplet Upgrades
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-droplet-upgrades list-droplet-upgrades}
 *
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.dropletsGetUpgrades = function (callback) {

  var options = {
    actionPath: 'droplet_upgrades'
  };

  api.request(options, callback);

};

/**
 * Request an Action on a Droplet
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#droplet-actions droplet-actions}
 *
 * @param {number} dropletId - The Id of the Droplet
 * @param {*} action - Action Object
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.dropletsRequestAction = function (dropletId, action, callback) {

  var options = {
    actionPath: 'droplets/' + dropletId + '/actions',
    method: 'POST',
    body: action
  };

  api.request(options, callback);

};

/**
 * Get an Action for a Droplet
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-a-droplet-action retrieve-a-droplet-action}
 *
 * @param {number} dropletId - The Id of the Droplet
 * @param {number} actionId - The Id of the Action
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.dropletsGetAction = function (dropletId, actionId, callback) {

  var options = {
    actionPath: 'droplets/' + dropletId + '/actions/' + actionId
  };

  api.request(options, callback);

};

/**
 * Get all Domains
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-domains list-all-domains}
 *
 * @param {*} query - Query Options
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.domainsGetAll = function (query, callback) {

  var options = {
    actionPath: 'domains',
    qs: {
      per_page: query.per_page || this.per_page,
      page: query.page || 1
    }
  };

  api.request(options, callback);

};

/**
 * Add a new Domain
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-domain create-a-new-domain}
 *
 * @param {string} name - Domain Name
 * @param {string} ip - The Ip of the Droplet
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.domainsCreate = function (name, ip, callback) {

  var options = {
    actionPath: 'domains',
    method: 'POST',
    body: {name: name, ip_address: ip}
  };

  api.request(options, callback);

};

/**
 * Get a Domain
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain retrieve-an-existing-domain}
 *
 * @param {string} name - The Domain Name
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.domainsGet = function (name, callback) {

  var options = {
    actionPath: 'domains/' + name
  };

  api.request(options, callback);

};

/**
 * Delete a Domain
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-domain delete-a-domain}
 *
 * @param {string} name - The Domain Name
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.domainsDelete = function (name, callback) {

  var options = {
    actionPath: 'domains/' + name,
    method: 'DELETE'
  };

  api.request(options, callback);

};

/**
 * Get all Domain Records for a Domain
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-domain-records list-all-domain-records}
 *
 * @param {string} name - The Domain Name
 * @param {*} query - Query Options
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.domainRecordsGetAll = function (name, query, callback) {

  var options = {
    actionPath: 'domains/' + name + '/records',
    qs: {
      per_page: query.per_page || this.per_page,
      page: query.page || 1
    }
  };

  api.request(options, callback);

};

/**
 * Create a new Domain Record on a Domain
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-domain-record create-a-new-domain-record}
 *
 * @param {string} name - The Domain Name
 * @param {*} configuration - Data required to create the Domain Record
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.domainRecordsCreate = function (name, configuration, callback) {

  var options = {
    actionPath: 'domains/' + name + '/records',
    method: 'POST',
    body: configuration
  };

  api.request(options, callback);

};

/**
 * Get a single Domain Record
 * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain-record retrieve-an-existing-domain-record}
 *
 * @param {string} name - The Domain Name
 * @param {number} domainRecordId - The Id of the Domain Record
 * @param {*} callback - Function to execute on completion
 */
DigitalOcean.prototype.domainRecordsGet = function (name, domainRecordId, callback) {

  var options = {
    actionPath: 'domains/' + name + '/records/' + domainRecordId
  };

  api.request(options, callback);

};

module.exports = DigitalOcean;
