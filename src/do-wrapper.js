'use strict';

import RequestHelper from './request-helper';

export default class DigitalOcean {
  /**
   * Digital Ocean API Wrapper
   * @param {string} token - Your Private API Token
   * @param {number} size - Page Size of results to return
   * @constructor
   */
  constructor(token, size) {
    this.per_page = size;
    this.requestHelper = new RequestHelper(token);
  }

  /**
   * Get Account Information
   * Info {@link https://developers.digitalocean.com/documentation/v2/#account account}
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  account(callback) {
    let options = {actionPath: 'account'};
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get Account Actions
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  accountGetActions(query, callback) {
    let options = {
      actionPath: 'actions',
      key: 'actions',
      qs: {
        tag_name: query.tag_name || '',
        per_page: query.per_page || this.per_page,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get Action Information for Account
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-action retrieve-an-existing-action}
   *
   * @param {number} actionId - The Id of the Action
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  accountGetAction(actionId, callback) {
    let options = {
      actionPath: 'actions/' + encodeURIComponent(actionId)
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * List all SSH Keys
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-keys list-all-keys}
   *
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  accountGetKeys(query, callback) {
    let options = {
      actionPath: 'account/keys',
      key: 'ssh_keys',
      qs: {
        tag_name: query.tag_name || '',
        per_page: query.per_page || this.per_page,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Add a new SSH Key
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-key create-a-new-key}
   *
   * @param {*} configuration - Information required to create SSH Key | {name: ?, public_key: ?}
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  accountAddKey(configuration, callback) {
    let options = {
      actionPath: 'account/keys',
      method: 'POST',
      body: configuration
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get an SSH Key via its Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key retrieve-an-existing-key}
   *
   * @param {number} keyId - The Id of the Key
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  accountGetKeyById(keyId, callback) {
    let options = {
      actionPath: 'account/keys/' + encodeURIComponent(keyId)
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get an SSH Key via its Fingerprint
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key retrieve-an-existing-key}
   *
   * @param {string} fingerprint - The Fingerprint of the Key
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  accountGetKeyByFingerprint(fingerprint, callback) {
    let options = {
      actionPath: 'account/keys/' + encodeURIComponent(fingerprint)
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Rename a SSH Key
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-a-key update-a-key}
   *
   * @param {*} keyIdentity - The Id or Fingerprint of the SSH Key
   * @param {string} keyName - What to rename the SSH Key to
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  accountRenameKey(keyIdentity, keyName, callback) {
    let options = {
      actionPath: 'account/keys/' + encodeURIComponent(keyIdentity),
      method: 'PUT',
      body: {
        name: keyName
      }
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Delete a SSH Key
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#destroy-a-key destroy-a-key}
   *
   * @param {*} keyIdentity - The Id or Fingerprint of the SSH Key
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  accountDeleteKey(keyIdentity, callback) {
    let options = {
      actionPath: 'account/keys/' + encodeURIComponent(keyIdentity),
      method: 'DELETE'
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get a list of Droplets
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-droplets list-all-droplets}
   *
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  dropletsGetAll(query, callback) {
    let options = {
      actionPath: 'droplets',
      key: 'droplets',
      qs: {
        tag_name: query.tag_name || undefined,
        per_page: query.per_page || this.per_page,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get a list of Kernels available for a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-available-kernels-for-a-droplet list-all-available-kernels-for-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  dropletsGetKernels(dropletId, query, callback) {
    let options = {
      actionPath: 'droplets/' + encodeURIComponent(dropletId) + '/kernels',
      key: 'kernels',
      qs: {
        tag_name: query.tag_name || '',
        per_page: query.per_page || this.per_page,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get a list of Snapshots for a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-snapshots-for-a-droplet retrieve-snapshots-for-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  dropletsGetSnapshots(dropletId, query, callback) {
    let options = {
      actionPath: 'droplets/' + encodeURIComponent(dropletId) + '/snapshots',
      key: 'snapshots',
      qs: {
        tag_name: query.tag_name || '',
        per_page: query.per_page || this.per_page,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get a list of Backups for a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-backups-for-a-droplet list-backups-for-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  dropletsGetBackups(dropletId, query, callback) {
    let options = {
      actionPath: 'droplets/' + encodeURIComponent(dropletId) + '/backups',
      key: 'backups',
      qs: {
        tag_name: query.tag_name || '',
        per_page: query.per_page || this.per_page,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get a list of Actions for a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-actions-for-a-droplet list-actions-for-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  dropletsGetActions(dropletId, query, callback) {
    let options = {
      actionPath: 'droplets/' + encodeURIComponent(dropletId) + '/actions',
      key: 'actions',
      qs: {
        tag_name: query.tag_name || '',
        per_page: query.per_page || this.per_page,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Create a New Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-droplet create-a-new-droplet}
   *
   * @param {*} configuration - Creation parameters, see info for more details.
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  dropletsCreate(configuration, callback) {
    let options = {
      actionPath: 'droplets',
      method: 'POST',
      body: configuration
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get a Droplet by Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-droplet-by-id retrieve-an-existing-droplet-by-id}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  dropletsGetById(dropletId, callback) {
    let options = {
      actionPath: 'droplets/' + encodeURIComponent(dropletId)
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Delete a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-droplet delete-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  dropletsDelete(dropletId, callback) {
    let options = {
      actionPath: 'droplets/' + encodeURIComponent(dropletId),
      method: 'DELETE'
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get a list of Droplet Neighbors
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-neighbors-for-a-droplet list-neighbors-for-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  dropletsGetNeighbors(dropletId, callback) {
    let options = {
      actionPath: 'droplets/' + encodeURIComponent(dropletId) + '/neighbors'
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get a report of Droplets sharing the same hardware
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-droplet-neighbors list-all-droplet-neighbors}
   *
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  dropletsGetNeighborsReport(callback) {
    let options = {
      actionPath: 'reports/droplet_neighbors'
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get a list of scheduled Droplet Upgrades
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-droplet-upgrades list-droplet-upgrades}
   *
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  dropletsGetUpgrades(callback) {
    let options = {
      actionPath: 'droplet_upgrades'
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Request an Action on a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#droplet-actions droplet-actions}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {*} action - Action Object
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  dropletsRequestAction(dropletId, action, callback) {
    let options = {
      actionPath: 'droplets/' + encodeURIComponent(dropletId) + '/actions',
      method: 'POST',
      body: action
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get an Action for a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-a-droplet-action retrieve-a-droplet-action}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {number} actionId - The Id of the Action
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  dropletsGetAction(dropletId, actionId, callback) {
    let options = {
      actionPath: 'droplets/' + encodeURIComponent(dropletId) + '/actions/' + encodeURIComponent(actionId)
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get all Domains
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-domains list-all-domains}
   *
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  domainsGetAll(query, callback) {
    let options = {
      actionPath: 'domains',
      key: 'domains',
      qs: {
        tag_name: query.tag_name || '',
        per_page: query.per_page || this.per_page,
        page: query.page || 1
      }
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Add a new Domain
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-domain create-a-new-domain}
   *
   * @param {string} name - Domain Name
   * @param {string} ip - The Ip of the Droplet
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  domainsCreate(name, ip, callback) {
    let options = {
      actionPath: 'domains',
      method: 'POST',
      body: {name: name, ip_address: ip}
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get a Domain
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain retrieve-an-existing-domain}
   *
   * @param {string} name - The Domain Name
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  domainsGet(name, callback) {
    let options = {
      actionPath: 'domains/' + encodeURIComponent(name)
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Delete a Domain
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-domain delete-a-domain}
   *
   * @param {string} name - The Domain Name
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  domainsDelete(name, callback) {
    let options = {
      actionPath: 'domains/' + encodeURIComponent(name),
      method: 'DELETE'
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get all Domain Records for a Domain
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-domain-records list-all-domain-records}
   *
   * @param {string} name - The Domain Name
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  domainRecordsGetAll(name, query, callback) {
    let options = {
      actionPath: 'domains/' + encodeURIComponent(name) + '/records',
      key: 'domain_records',
      qs: {
        tag_name: query.tag_name || '',
        per_page: query.per_page || this.per_page,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Create a new Domain Record on a Domain
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-domain-record create-a-new-domain-record}
   *
   * @param {string} name - The Domain Name
   * @param {*} configuration - Data required to create the Domain Record
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  domainRecordsCreate(name, configuration, callback) {
    let options = {
      actionPath: 'domains/' + encodeURIComponent(name) + '/records',
      method: 'POST',
      body: configuration
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get a single Domain Record
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain-record retrieve-an-existing-domain-record}
   *
   * @param {string} name - The Domain Name
   * @param {number} domainRecordId - The Id of the Domain Record
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  domainRecordsGet(name, domainRecordId, callback) {
    let options = {
      actionPath: 'domains/' + encodeURIComponent(name) + '/records/' + encodeURIComponent(domainRecordId)
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Update a Domain Record
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-a-domain-record update-a-domain-record}
   *
   * @param {string} name - The Domain Name
   * @param {number} domainRecordId - The Id of the Domain Record
   * @param {*} configuration - Data required to update the Domain Record
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  domainRecordsUpdate(name, domainRecordId, configuration, callback) {
    let options = {
      actionPath: 'domains/' + encodeURIComponent(name) + '/records/' + encodeURIComponent(domainRecordId),
      method: 'PUT',
      body: configuration
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Delete a Domain Record
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-domain-record delete-a-domain-record}
   *
   * @param {string} name - The Domain Name
   * @param {number} domainRecordId - The Id of the Domain Record
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  domainRecordsDelete(name, domainRecordId, callback) {
    let options = {
      actionPath: 'domains/' + encodeURIComponent(name) + '/records/' + encodeURIComponent(domainRecordId),
      method: 'DELETE'
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get all Regions
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-regions list-all-regions}
   *
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  regionsGetAll(query, callback) {
    let options = {
      actionPath: 'regions',
      key: 'regions',
      qs: {
        tag_name: query.tag_name || '',
        per_page: query.per_page || this.per_page,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get all Droplet sizes
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-sizes list-all-sizes}
   *
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  sizesGetAll(query, callback) {
    let options = {
      actionPath: 'sizes',
      key: 'sizes',
      qs: {
        tag_name: query.tag_name || '',
        per_page: query.per_page || this.per_page,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get all Images
   * Include type=[distribution,application] or private=true in the query object to limit results.
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-images list-all-images}
   *
   * @param {{per_page: number, page: number, includeAll: boolean, private: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  imagesGetAll(query, callback) {
    let options = {
      actionPath: 'images',
      key: 'images',
      qs: {
        tag_name: query.tag_name || '',
        per_page: query.per_page || this.per_page,
        page: query.page || 1,
        private: query.private || false,
        type: query.type || null
      },
      includeAll: query.includeAll || false
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get an Image using its Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-id retrieve-an-existing-image-by-id}
   *
   * @param {number} imageId - The Id of the Image
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  imagesGetById(imageId, callback) {
    let options = {
      actionPath: 'images/' + encodeURIComponent(imageId)
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get an Image using its Slug
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-slug retrieve-an-existing-image-by-slug}
   *
   * @param {string} slug - The Slug of the Image
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  imagesGetBySlug(slug, callback) {
    let options = {
      actionPath: 'images/' + encodeURIComponent(slug)
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get all Actions for an Image
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-an-image list-all-actions-for-an-image}
   *
   * @param {number} imageId - The Id of the Image
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  imagesGetActions(imageId, query, callback) {
    let options = {
      actionPath: 'images/' + encodeURIComponent(imageId) + '/actions',
      key: 'actions',
      qs: {
        tag_name: query.tag_name || '',
        per_page: query.per_page || this.per_page,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Update the name of an Image
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-an-image update-an-image}
   *
   * @param {number} imageId - The Id of the Image
   * @param {string} name - The Name to update the Image to
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  imagesUpdate(imageId, name, callback) {
    let options = {
      actionPath: 'images/' + encodeURIComponent(imageId),
      body: {name: name},
      method: 'PUT'
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Delete an Image
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-an-image delete-an-image}
   *
   * @param {number} imageId - The Id of the Image
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  imagesDelete(imageId, callback) {
    let options = {
      actionPath: 'images/' + encodeURIComponent(imageId),
      method: 'DELETE'
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Request an Action on an Image
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#image-actions image-actions}
   *
   * @param {number} imageId - The Id of the Image
   * @param {*} action - Action Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  imagesRequestAction(imageId, action, callback) {
    let options = {
      actionPath: 'images/' + encodeURIComponent(imageId) + '/actions',
      method: 'POST',
      body: action
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get the status of an Action
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-action retrieve-an-existing-image-action}
   *
   * @param {number} imageId - The Id of the Image
   * @param {number} actionId - The Id of the Action
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  imagesGetAction(imageId, actionId, callback) {
    let options = {
      actionPath: 'images/' + encodeURIComponent(imageId) + '/actions/' + encodeURIComponent(actionId)
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get all Floating IPs
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-floating-ips list-all-floating-ips}
   *
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  floatingIpsGetAll(query, callback) {
    let options = {
      actionPath: 'floating_ips',
      key: 'floating_ips',
      qs: {
        tag_name: query.tag_name || '',
        per_page: query.per_page || this.per_page,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Create and assign a Floating IP to a specific droplet.
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet create-a-new-floating-ip-assigned-to-a-droplet}
   *
   * @param {number} dropletId - The ID of Droplet that the Floating IP will be assigned to.
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  floatingIpsAssignDroplet(dropletId, callback) {
    let options = {
      actionPath: 'floating_ips',
      method: 'POST',
      body: {
        droplet_id: dropletId
      }
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Create and assign a Floating IP to a region.
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet create-a-new-floating-ip-assigned-to-a-droplet}
   *
   * @param {string} region - The slug identifier for the region the Floating IP will be reserved to.
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  floatingIpsAssignRegion(region, callback) {
    let options = {
      actionPath: 'floating_ips',
      method: 'POST',
      body: {
        region: region
      }
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Retrieve an existing Floating IP
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip retrieve-an-existing-floating-ip}
   *
   * @param {string} ipAddress - Floating IP address.
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  floatingIpsGet(ipAddress, callback) {
    let options = {
      actionPath: 'floating_ips/' + encodeURIComponent(ipAddress)
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Delete a Floating IP
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-floating-ips delete-a-floating-ips}
   *
   * @param {string} ipAddress - Floating IP address
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  floatingIpsDelete(ipAddress, callback) {
    let options = {
      actionPath: 'floating_ips/' + encodeURIComponent(ipAddress),
      method: 'DELETE'
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Request an action on a Floating IP
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#floating-ip-actions floating-ip-actions}
   *
   * @param {string} ipAddress - Floating IP address
   * @param {*} action - Action options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  floatingIpsRequestAction(ipAddress, action, callback) {
    let options = {
      actionPath: 'floating_ips/' + encodeURIComponent(ipAddress) + '/actions',
      method: 'POST',
      body: action
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * List all actions for a Floating IP
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-a-floating-ip list-all-actions-for-a-floating-ip}
   *
   * @param {string} ipAddress - Floating IP address
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  floatingIpsGetActions(ipAddress, query, callback) {
    let options = {
      actionPath: 'floating_ips/' + encodeURIComponent(ipAddress) + '/actions',
      key: 'actions',
      qs: {
        tag_name: query.tag_name || '',
        per_page: query.per_page || this.per_page,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Retrieve an existing Floating IP action
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip-action retrieve-an-existing-floating-ip-action}
   *
   * @param {string} ipAddress - Floating IP address
   * @param {number} actionId - The Id of the action
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  floatingIpsGetAction(ipAddress, actionId, callback) {
    let options = {
      actionPath: 'floating_ips/' + encodeURIComponent(ipAddress) + '/actions/' + encodeURIComponent(actionId)
    };
    return this.requestHelper.request(options, callback);
  }

    /**
   * Add a new Tag
   * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#create-a-new-tag create-a-new-tag}
   *
   * @param {string} name - Tag Name
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  tagsCreate(name, callback) {
    let options = {
      actionPath: 'tags',
      method: 'POST',
      body: {name: name}
    };
    return this.requestHelper.request(options, callback);
  }

    /**
   * Delete a Tag
   * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#delete-a-tag delete-a-tag}
   *
   * @param {string} name - Tag Name
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  tagsDelete(name, callback) {
    let options = {
      actionPath: 'tags/' + encodeURIComponent(name),
      method: 'DELETE'
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get a Tag
   * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#retrieve-a-tag retrieve-a-tag}
   *
   * @param {string} name - The Tag Name
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  tagsGet(name, callback) {
    let options = {
      actionPath: 'tags/' + encodeURIComponent(name)
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get all Tags
   * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#list-all-tags list-all-tags}
   *
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  tagsGetAll(query, callback) {
    let options = {
      actionPath: 'tags',
      key: 'tags',
      qs: {
        tag_name: query.tag_name || '',
        per_page: query.per_page || this.per_page,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Tag resources
   * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#tag-a-resource tag-a-resource}
   *
   * @param {string} name - The Tag Name
   * @param {*} configuration - Array of objects which identify the resources to tag
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  tagsAddResources(name, configuration, callback) {
    let options = {
      actionPath: 'tags/' + encodeURIComponent(name) + '/resources',
      method: 'POST',
      body: configuration
    };
    return this.requestHelper.request(options, callback);
  }

  /**
   * Untag a resource
   * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#untag-a-resource untag-a-resource}
   *
   * @param {string} name - The Tag Name
   * @param {*} configuration - Array of objects which identify the resources to untag
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  tagsDeleteResource(name, configuration, callback) {
    let options = {
      actionPath: 'tags/' + encodeURIComponent(name) + '/resources',
      method: 'DELETE',
      body: configuration
    };
    return this.requestHelper.request(options, callback);
  }

    /**
   * Get Droplets by Tag
   *
   * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#listing-droplets-by-tag listing-droplets-by-tag}
   *
   * @param {string} name - The Tag Name
      * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  tagsGetDroplets(name, query, callback) {
    let options = {
      actionPath: 'droplets',
      key: 'droplets',
      qs: {
        per_page: query.per_page || this.per_page,
        page: query.page || 1,
        tag_name: name
      },
      includeAll: query.includeAll || false
    };
    return this.requestHelper.request(options, callback);
  }

    /**
   * Delete Droplets by Tag
   *
   * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#deleting-droplets-by-tag deleting-droplets-by-tag}
   *
   * @param {string} name - The Tag Name
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  tagsDeleteDroplets(name, callback) {
    let options = {
      actionPath: 'droplets',
      method: 'DELETE',
      qs: {
        tag_name: name
      }
    };
    return this.requestHelper.request(options, callback);
  }

    /**
   * Request an Action on a tag's Droplets
   * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#acting-on-tagged-droplets acting-on-tagged-droplets}
   *
   * @param {string} name - The Tag Name
   * @param {*} action - Action Object
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  tagsRequestAction(name, action, callback) {
    let options = {
      actionPath: 'droplets/actions',
      method: 'POST',
      qs: {
        tag_name: name
      },
      body: action
    };
    return this.requestHelper.request(options, callback);
  }
}
