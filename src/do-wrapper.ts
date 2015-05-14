import RequestHelper = require('./request-helper');

/**
 * Digital Ocean API Wrapper Interface
 */
interface IDigitalOcean {
  account(callback: () => any): void;
}

/**
 * Digital Ocean API Wrapper
 */
class DigitalOcean implements IDigitalOcean {

  /**
   * Number of results per page
   */
  private perPage: number;

  /**
   * Request Helper Instance
   */
  private requestHelper: any;

  /**
   * Digital Ocean API Wrapper
   *
   * @param {string} token - Your Private API Token
   * @param {number} perPage - Size of results to return
   *
   * @constructor
   */
  constructor(token: string, perPage: number) {
    this.perPage = perPage;
    this.requestHelper = new RequestHelper(token);
  }

  /**
   * Get Account Information
   * Info {@link https://developers.digitalocean.com/documentation/v2/#account account}
   *
   * @param {*} callback - Function to execute on completion
   */
  public account(callback: () => any): void {
    var options: any = {actionPath: 'account'};
    this.requestHelper.request(options, callback);
  }

  public accountGetActions(query: any, callback: () => any): void {
    var options: any = {
      actionPath: 'actions',
      key: 'actions',
      qs: {
        per_page: query.per_page || this.perPage,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get Action Information for Account
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-action retrieve-an-existing-action}
   *
   * @param {number} actionId - The Id of the Action
   * @param {*} callback - Function to execute on completion
   */
  public accountGetAction(actionId: number, callback: () => any): void {
    var options: any = {
      actionPath: 'actions/' + actionId,
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * List all SSH Keys
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-keys list-all-keys}
   *
   * @param {*} query - Query Options
   * @param {*} callback - Function to execute on completion
   */
  public accountGetKeys(query: any, callback: () => any): void {
    var options: any = {
      actionPath: 'account/keys',
      key: 'ssh_keys',
      qs: {
        per_page: query.per_page || this.perPage,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Add a new SSH Key
   * Info: {@https://developers.digitalocean.com/documentation/v2/#create-a-new-key create-a-new-key}
   *
   * @param {*} configuration - Information required to create SSH Key | {name: ?, public_key: ?}
   * @param {*} callback - Function to execute on completion
   */
  public accountAddKey(configuration: any, callback: () => any): void {
    var options: any = {
      actionPath: 'account/keys',
      method: 'POST',
      body: configuration
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get an SSH Key via its Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key retrieve-an-existing-key}
   *
   * @param {number} keyId - The Id of the Key
   * @param {*} callback - Function to execute on completion
   */
  public accountGetKeyById(keyId: number, callback: () => any): void {
    var options: any = {
      actionPath: 'account/keys/' + keyId
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get an SSH Key via its Fingerprint
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key retrieve-an-existing-key}
   *
   * @param {string} fingerprint - The Fingerprint of the Key
   * @param {*} callback - Function to execute on completion
   */
  public accountGetKeyByFingerprint(fingerprint: string, callback: () => any): void {
    var options: any = {
      actionPath: 'account/keys/' + fingerprint
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Rename a SSH Key
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-a-key update-a-key}
   *
   * @param {*} keyIdentity - The Id or Fingerprint of the SSH Key
   * @param {string} keyName - What to rename the SSH Key to
   * @param {*} callback - Function to execute on completion
   */
  public accountRenameKey(keyIdentity: any, keyName: string, callback: () => any): void {
    var options: any = {
      actionPath: 'account/keys/' + keyIdentity,
      method: 'PUT',
      body: {
        name: keyName
      }
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Delete a SSH Key
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#destroy-a-key destroy-a-key}
   *
   * @param {*} keyIdentity - The Id or Fingerprint of the SSH Key
   * @param {*} callback - Function to execute on completion
   */
  public accountDeleteKey(keyIdentity: any, callback: () => any): void {
    var options: any = {
      actionPath: 'account/keys/' + keyIdentity,
      method: 'DELETE'
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get a list of Droplets
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-droplets list-all-droplets}
   *
   * @param {*} query - Query Options
   * @param {*} callback - Function to execute on completion
   */
  public dropletsGetAll(query: any, callback: () => any): void {
    var options: any = {
      actionPath: 'droplets',
      key: 'droplets',
      qs: {
        per_page: query.per_page || this.perPage,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get a list of Kernels available for a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-available-kernels-for-a-droplet list-all-available-kernels-for-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {*} query - Query Options
   * @param {*} callback - Function to execute on completion
   */
  public dropletsGetKernels(dropletId: number, query: any, callback: () => any): void {
    var options: any = {
      actionPath: 'droplets/' + dropletId + '/kernels',
      key: 'kernels',
      qs: {
        per_page: query.per_page || this.perPage,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get a list of Snapshots for a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-snapshots-for-a-droplet retrieve-snapshots-for-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {*} query - Query Options
   * @param {*} callback - Function to execute on completion
   */
  public dropletsGetSnapshots(dropletId: number, query: any, callback: () => any): void {
    var options: any = {
      actionPath: 'droplets/' + dropletId + '/snapshots',
      key: 'snapshots',
      qs: {
        per_page: query.per_page || this.perPage,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get a list of Backups for a Droplet
   * Info: {@https://developers.digitalocean.com/documentation/v2/#list-backups-for-a-droplet list-backups-for-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {*} query - Query Options
   * @param {*} callback - Function to execute on completion
   */
  public dropletsGetBackups(dropletId: number, query: any, callback: () => any): void {
    var options: any = {
      actionPath: 'droplets/' + dropletId + '/backups',
      key: 'backups',
      qs: {
        per_page: query.per_page || this.perPage,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get a list of Actions for a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-actions-for-a-droplet list-actions-for-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {*} query - Query Options
   * @param {*} callback - Function to execute on completion
   */
  public dropletsGetActions(dropletId: number, query: any, callback: () => any): void {
    var options: any = {
      actionPath: 'droplets/' + dropletId + '/actions',
      key: 'actions',
      qs: {
        per_page: query.per_page || this.perPage,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Create a New Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-droplet}
   *
   * @param {*} configuration - Creation parameters, see info for more details.
   * @param {*} callback - Function to execute on completion
   */
  public dropletsCreate(configuration: any, callback: () => any): void {
    var options: any = {
      actionPath: 'droplets',
      method: 'POST',
      body: configuration
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get a Droplet by Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-droplet-by-id retrieve-an-existing-droplet-by-id}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {*} callback - Function to execute on completion
   */
  public dropletsGetById(dropletId: number, callback: () => any): void {
    var options: any = {
      actionPath: 'droplets/' + dropletId
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Delete a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-droplet delete-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {*} callback - Function to execute on completion
   */
  public dropletsDelete(dropletId: number, callback: () => any): void {
    var options: any = {
      actionPath: 'droplets/' + dropletId,
      method: 'DELETE'
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get a list of Droplet Neighbors
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-neighbors-for-a-droplet list-neighbors-for-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {*} callback - Function to execute on completion
   */
  public dropletsGetNeighbors(dropletId: number, callback: () => any): void {
    var options: any = {
      actionPath: 'droplets/' + dropletId + '/neighbors'
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get a report of Droplets sharing the same hardware
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-droplet-neighbors list-all-droplet-neighbors}
   *
   * @param {*} callback - Function to execute on completion
   */
  public dropletsGetNeighborsReport(callback: () => any): void {
    var options: any = {
      actionPath: 'reports/droplet_neighbors'
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get a list of scheduled Droplet Upgrades
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-droplet-upgrades list-droplet-upgrades}
   *
   * @param {*} callback - Function to execute on completion
   */
  public dropletsGetUpgrades(callback: () => any): void {
    var options: any = {
      actionPath: 'droplet_upgrades'
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Request an Action on a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#droplet-actions droplet-actions}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {*} action - Action Object
   * @param {*} callback - Function to execute on completion
   */
  public dropletsRequestAction(dropletId: number, action: any, callback: () => any): void {
    var options: any = {
      actionPath: 'droplets/' + dropletId + '/actions',
      method: 'POST',
      body: action
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get an Action for a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-a-droplet-action retrieve-a-droplet-action}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {number} actionId - The Id of the Action
   * @param {*} callback - Function to execute on completion
   */
  public dropletsGetAction(dropletId: number, actionId: number, callback: () => any): void {
    var options: any = {
      actionPath: 'droplets/' + dropletId + '/actions/' + actionId
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get all Domains
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-domains list-all-domains}
   *
   * @param {*} query - Query Options
   * @param {*} callback - Function to execute on completion
   */
  public domainsGetAll(query: any, callback: () => any): void {
    var options: any = {
      actionPath: 'domains',
      key: 'domains',
      qs: {
        per_page: query.per_page || this.perPage,
        page: query.page || 1
      }
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Add a new Domain
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-domain create-a-new-domain}
   *
   * @param {string} name - Domain Name
   * @param {string} ip - The Ip of the Droplet
   * @param {*} callback - Function to execute on completion
   */
  public domainsCreate(name: string, ip: string, callback: () => any): void {
    var options: any = {
      actionPath: 'domains',
      method: 'POST',
      body: {name: name, ip_address: ip}
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get a Domain
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain retrieve-an-existing-domain}
   *
   * @param {string} name - The Domain Name
   * @param {*} callback - Function to execute on completion
   */
  public domainsGet(name: string, callback: () => any): void {
    var options: any = {
      actionPath: 'domains/' + name
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Delete a Domain
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-domain delete-a-domain}
   *
   * @param {string} name - The Domain Name
   * @param {*} callback - Function to execute on completion
   */
  public domainsDelete(name: string, callback: () => any): void {
    var options: any = {
      actionPath: 'domains/' + name,
      method: 'DELETE'
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get all Domain Records for a Domain
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-domain-records list-all-domain-records}
   *
   * @param {string} name - The Domain Name
   * @param {*} query - Query Options
   * @param {*} callback - Function to execute on completion
   */
  public domainRecordsGetAll(name: string, query: any, callback: () => any): void {
    var options: any = {
      actionPath: 'domains/' + name + '/records',
      key: 'domain_records',
      qs: {
        per_page: query.per_page || this.perPage,
        page: query.page || 1
      }
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Create a new Domain Record on a Domain
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-domain-record create-a-new-domain-record}
   *
   * @param {string} name - The Domain Name
   * @param {*} configuration - Data required to create the Domain Record
   * @param {*} callback - Function to execute on completion
   */
  public domainRecordsCreate(name: string, configuration: any, callback: () => any): void {
    var options: any = {
      actionPath: 'domains/' + name + '/records',
      method: 'POST',
      body: configuration
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get a single Domain Record
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain-record retrieve-an-existing-domain-record}
   *
   * @param {string} name - The Domain Name
   * @param {number} domainRecordId - The Id of the Domain Record
   * @param {*} callback - Function to execute on completion
   */
  public domainRecordsGet(name: string, domainRecordId: number, callback: () => any): void {
    var options: any = {
      actionPath: 'domains/' + name + '/records/' + domainRecordId
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Update a Domain Record
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-a-domain-record update-a-domain-record}
   *
   * @param {string} name - The Domain Name
   * @param {number} domainRecordId - The Id of the Domain Record
   * @param {*} configuration - Data required to update the Domain Record
   * @param {*} callback - Function to execute on completion
   */
  public domainRecordsUpdate(name: string, domainRecordId: number, configuration: any, callback: () => any): void {
    var options: any = {
      actionPath: 'domains/' + name + '/records/' + domainRecordId,
      method: 'PUT',
      body: configuration
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Delete a Domain Record
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-domain-record delete-a-domain-record}
   *
   * @param {string} name - The Domain Name
   * @param {number} domainRecordId - The Id of the Domain Record
   * @param {*} callback - Function to execute on completion
   */
  public domainRecordsDelete(name: string, domainRecordId: number, callback: () => any): void {
    var options: any = {
      actionPath: 'domains/' + name + '/records/' + domainRecordId,
      method: 'DELETE'
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get all Regions
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-regions list-all-regions}
   *
   * @param {*} query - Query Options
   * @param {*} callback - Function to execute on completion
   */
  public regionsGetAll(query: any, callback: () => any): void {
    var options: any = {
      actionPath: 'regions',
      key: 'regions',
      qs: {
        per_page: query.per_page || this.perPage,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get all Droplet Sizes
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-sizes list-all-sizes}
   *
   * @param {*} query - Query Options
   * @param {*} callback - Function to execute on completion
   */
  public sizesGetAll(query: any, callback: () => any): void {
    var options: any = {
      actionPath: 'sizes',
      key: 'sizes',
      qs: {
        per_page: query.per_page || this.perPage,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get all Images
   * Include type=[distribution,application] or private=true in the query object to limit results.
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-images list-all-images}
   *
   * @param {*} query - Query Options
   * @param {*} callback - Function to execute on completion
   */
  public imagesGetAll(query: any, callback: () => any): void {
    var options: any = {
      actionPath: 'images',
      key: 'images',
      qs: {
        per_page: query.per_page || this.perPage,
        page: query.page || 1,
        private: query.private || false,
        type: query.type || null
      },
      includeAll: query.includeAll || false
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get an Image using its Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-id retrieve-an-existing-image-by-id}
   *
   * @param {number} imageId - The Id of the Image
   * @param {*} callback - Function to execute on completion
   */
  public imagesGetById(imageId: number, callback: () => any): void {
    var options: any = {
      actionPath: 'images/' + imageId
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get an Image using its Slug
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-slug retrieve-an-existing-image-by-slug}
   *
   * @param {string} slug - The Slug of the Image
   * @param {*} callback - Function to execute on completion
   */
  public imagesGetBySlug(slug: string, callback: () => any): void {
    var options: any = {
      actionPath: 'images/' + slug
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get all Actions for an Image
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-an-image list-all-actions-for-an-image}
   *
   * @param {number} imageId - The Id of the Image
   * @param {*} query - Query Options
   * @param {*} callback - Function to execute on completion
   */
  public imagesGetActions(imageId: number, query: any, callback: () => any): void {
    var options: any = {
      actionPath: 'images/' + imageId + '/actions',
      key: 'actions',
      qs: {
        per_page: query.per_page || this.perPage,
        page: query.page || 1
      },
      includeAll: query.includeAll || false
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Update the name of an Image
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-an-image update-an-image}
   *
   * @param {number} imageId - The Id of the Image
   * @param {string} name - The Name to update the Image to
   * @param {*} callback - Function to execute on completion
   */
  public imagesUpdate(imageId: number, name: string, callback: () => any): void {
    var options: any = {
      actionPath: 'images/' + imageId,
      body: {name: name},
      method: 'PUT'
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Delete an Image
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-an-image delete-an-image}
   *
   * @param {number} imageId - The Id of the Image
   * @param {*} callback - Function to execute on completion
   */
  public imagesDelete(imageId: number, callback: () => any): void {
    var options: any = {
      actionPath: 'images/' + imageId,
      method: 'DELETE'
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Request an Action on an Image
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#image-actions image-actions}
   *
   * @param {number} imageId - The Id of the Image
   * @param {*} action - Action Options
   * @param {*} callback - Function to execute on completion
   */
  public imagesRequestAction(imageId: number, action: any, callback: () => any): void {
    var options: any = {
      actionPath: 'images/' + imageId + '/actions',
      method: 'POST',
      body: action
    };
    this.requestHelper.request(options, callback);
  }

  /**
   * Get the status of an Action
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-action retrieve-an-existing-image-action}
   *
   * @param {number} imageId - The Id of the Image
   * @param {number} actionId - The Id of the Action
   * @param {*} callback - Function to execute on completion
   */
  public imagesGetAction(imageId: number, actionId: number, callback: () => any): void {
    var options: any = {
      actionPath: 'images/' + imageId + '/actions/' + actionId
    };
    this.requestHelper.request(options, callback);
  }

}

export = DigitalOcean;