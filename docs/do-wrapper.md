# Global





* * *

## Class: exports



## Class: DigitalOcean



## Class: DigitalOcean
Digital Ocean API Wrapper

### DigitalOcean.account(callback) 

Get Account Information
Info [https://developers.digitalocean.com/documentation/v2/#account account](https://developers.digitalocean.com/documentation/v2/#account account)

**Parameters**

**callback**: `*`, Function to execute on completion


### DigitalOcean.accountGetActions(query, callback) 

Get Account Actions

**Parameters**

**query**: `*`, Query Options

**callback**: `*`, Function to execute on completion


### DigitalOcean.accountGetAction(actionId, callback) 

Get Action Information for Account
Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-action retrieve-an-existing-action](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-action retrieve-an-existing-action)

**Parameters**

**actionId**: `number`, The Id of the Action

**callback**: `*`, Function to execute on completion


### DigitalOcean.accountGetKeys(query, callback) 

List all SSH Keys
Info: [https://developers.digitalocean.com/documentation/v2/#list-all-keys list-all-keys](https://developers.digitalocean.com/documentation/v2/#list-all-keys list-all-keys)

**Parameters**

**query**: `*`, Query Options

**callback**: `*`, Function to execute on completion


### DigitalOcean.accountAddKey(configuration, callback) 

Add a new SSH Key
Info: [https://developers.digitalocean.com/documentation/v2/#create-a-new-key create-a-new-key](https://developers.digitalocean.com/documentation/v2/#create-a-new-key create-a-new-key)

**Parameters**

**configuration**: `*`, Information required to create SSH Key | {name: ?, public_key: ?}

**callback**: `*`, Function to execute on completion


### DigitalOcean.accountGetKeyById(keyId, callback) 

Get an SSH Key via its Id
Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key retrieve-an-existing-key](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key retrieve-an-existing-key)

**Parameters**

**keyId**: `number`, The Id of the Key

**callback**: `*`, Function to execute on completion


### DigitalOcean.accountGetKeyByFingerprint(fingerprint, callback) 

Get an SSH Key via its Fingerprint
Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key retrieve-an-existing-key](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key retrieve-an-existing-key)

**Parameters**

**fingerprint**: `string`, The Fingerprint of the Key

**callback**: `*`, Function to execute on completion


### DigitalOcean.accountRenameKey(keyIdentity, keyName, callback) 

Rename a SSH Key
Info: [https://developers.digitalocean.com/documentation/v2/#update-a-key update-a-key](https://developers.digitalocean.com/documentation/v2/#update-a-key update-a-key)

**Parameters**

**keyIdentity**: `*`, The Id or Fingerprint of the SSH Key

**keyName**: `string`, What to rename the SSH Key to

**callback**: `*`, Function to execute on completion


### DigitalOcean.accountDeleteKey(keyIdentity, callback) 

Delete a SSH Key
Info: [https://developers.digitalocean.com/documentation/v2/#destroy-a-key destroy-a-key](https://developers.digitalocean.com/documentation/v2/#destroy-a-key destroy-a-key)

**Parameters**

**keyIdentity**: `*`, The Id or Fingerprint of the SSH Key

**callback**: `*`, Function to execute on completion


### DigitalOcean.dropletsGetAll(query, callback) 

Get a list of Droplets
Info: [https://developers.digitalocean.com/documentation/v2/#list-all-droplets list-all-droplets](https://developers.digitalocean.com/documentation/v2/#list-all-droplets list-all-droplets)

**Parameters**

**query**: `*`, Query Options

**callback**: `*`, Function to execute on completion


### DigitalOcean.dropletsGetKernels(dropletId, query, callback) 

Get a list of Kernels available for a Droplet
Info: [https://developers.digitalocean.com/documentation/v2/#list-all-available-kernels-for-a-droplet list-all-available-kernels-for-a-droplet](https://developers.digitalocean.com/documentation/v2/#list-all-available-kernels-for-a-droplet list-all-available-kernels-for-a-droplet)

**Parameters**

**dropletId**: `number`, The Id of the Droplet

**query**: `*`, Query Options

**callback**: `*`, Function to execute on completion


### DigitalOcean.dropletsGetSnapshots(dropletId, query, callback) 

Get a list of Snapshots for a Droplet
Info: [https://developers.digitalocean.com/documentation/v2/#list-snapshots-for-a-droplet retrieve-snapshots-for-a-droplet](https://developers.digitalocean.com/documentation/v2/#list-snapshots-for-a-droplet retrieve-snapshots-for-a-droplet)

**Parameters**

**dropletId**: `number`, The Id of the Droplet

**query**: `*`, Query Options

**callback**: `*`, Function to execute on completion


### DigitalOcean.dropletsGetBackups(dropletId, query, callback) 

Get a list of Backups for a Droplet
Info: [https://developers.digitalocean.com/documentation/v2/#list-backups-for-a-droplet list-backups-for-a-droplet](https://developers.digitalocean.com/documentation/v2/#list-backups-for-a-droplet list-backups-for-a-droplet)

**Parameters**

**dropletId**: `number`, The Id of the Droplet

**query**: `*`, Query Options

**callback**: `*`, Function to execute on completion


### DigitalOcean.dropletsGetActions(dropletId, query, callback) 

Get a list of Actions for a Droplet
Info: [https://developers.digitalocean.com/documentation/v2/#list-actions-for-a-droplet list-actions-for-a-droplet](https://developers.digitalocean.com/documentation/v2/#list-actions-for-a-droplet list-actions-for-a-droplet)

**Parameters**

**dropletId**: `number`, The Id of the Droplet

**query**: `*`, Query Options

**callback**: `*`, Function to execute on completion


### DigitalOcean.dropletsCreate(configuration, callback) 

Create a New Droplet
Info: [https://developers.digitalocean.com/documentation/v2/#create-a-new-droplet create-a-new-droplet](https://developers.digitalocean.com/documentation/v2/#create-a-new-droplet create-a-new-droplet)

**Parameters**

**configuration**: `*`, Creation parameters, see info for more details.

**callback**: `*`, Function to execute on completion


### DigitalOcean.dropletsGetById(dropletId, callback) 

Get a Droplet by Id
Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-droplet-by-id retrieve-an-existing-droplet-by-id](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-droplet-by-id retrieve-an-existing-droplet-by-id)

**Parameters**

**dropletId**: `number`, The Id of the Droplet

**callback**: `*`, Function to execute on completion


### DigitalOcean.dropletsDelete(dropletId, callback) 

Delete a Droplet
Info: [https://developers.digitalocean.com/documentation/v2/#delete-a-droplet delete-a-droplet](https://developers.digitalocean.com/documentation/v2/#delete-a-droplet delete-a-droplet)

**Parameters**

**dropletId**: `number`, The Id of the Droplet

**callback**: `*`, Function to execute on completion


### DigitalOcean.dropletsGetNeighbors(dropletId, callback) 

Get a list of Droplet Neighbors
Info: [https://developers.digitalocean.com/documentation/v2/#list-neighbors-for-a-droplet list-neighbors-for-a-droplet](https://developers.digitalocean.com/documentation/v2/#list-neighbors-for-a-droplet list-neighbors-for-a-droplet)

**Parameters**

**dropletId**: `number`, The Id of the Droplet

**callback**: `*`, Function to execute on completion


### DigitalOcean.dropletsGetNeighborsReport(callback) 

Get a report of Droplets sharing the same hardware
Info: [https://developers.digitalocean.com/documentation/v2/#list-all-droplet-neighbors list-all-droplet-neighbors](https://developers.digitalocean.com/documentation/v2/#list-all-droplet-neighbors list-all-droplet-neighbors)

**Parameters**

**callback**: `*`, Function to execute on completion


### DigitalOcean.dropletsGetUpgrades(callback) 

Get a list of scheduled Droplet Upgrades
Info: [https://developers.digitalocean.com/documentation/v2/#list-droplet-upgrades list-droplet-upgrades](https://developers.digitalocean.com/documentation/v2/#list-droplet-upgrades list-droplet-upgrades)

**Parameters**

**callback**: `*`, Function to execute on completion


### DigitalOcean.dropletsRequestAction(dropletId, action, callback) 

Request an Action on a Droplet
Info: [https://developers.digitalocean.com/documentation/v2/#droplet-actions droplet-actions](https://developers.digitalocean.com/documentation/v2/#droplet-actions droplet-actions)

**Parameters**

**dropletId**: `number`, The Id of the Droplet

**action**: `*`, Action Object

**callback**: `*`, Function to execute on completion


### DigitalOcean.dropletsGetAction(dropletId, actionId, callback) 

Get an Action for a Droplet
Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-a-droplet-action retrieve-a-droplet-action](https://developers.digitalocean.com/documentation/v2/#retrieve-a-droplet-action retrieve-a-droplet-action)

**Parameters**

**dropletId**: `number`, The Id of the Droplet

**actionId**: `number`, The Id of the Action

**callback**: `*`, Function to execute on completion


### DigitalOcean.domainsGetAll(query, callback) 

Get all Domains
Info: [https://developers.digitalocean.com/documentation/v2/#list-all-domains list-all-domains](https://developers.digitalocean.com/documentation/v2/#list-all-domains list-all-domains)

**Parameters**

**query**: `*`, Query Options

**callback**: `*`, Function to execute on completion


### DigitalOcean.domainsCreate(name, ip, callback) 

Add a new Domain
Info: [https://developers.digitalocean.com/documentation/v2/#create-a-new-domain create-a-new-domain](https://developers.digitalocean.com/documentation/v2/#create-a-new-domain create-a-new-domain)

**Parameters**

**name**: `string`, Domain Name

**ip**: `string`, The Ip of the Droplet

**callback**: `*`, Function to execute on completion


### DigitalOcean.domainsGet(name, callback) 

Get a Domain
Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain retrieve-an-existing-domain](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain retrieve-an-existing-domain)

**Parameters**

**name**: `string`, The Domain Name

**callback**: `*`, Function to execute on completion


### DigitalOcean.domainsDelete(name, callback) 

Delete a Domain
Info: [https://developers.digitalocean.com/documentation/v2/#delete-a-domain delete-a-domain](https://developers.digitalocean.com/documentation/v2/#delete-a-domain delete-a-domain)

**Parameters**

**name**: `string`, The Domain Name

**callback**: `*`, Function to execute on completion


### DigitalOcean.domainRecordsGetAll(name, query, callback) 

Get all Domain Records for a Domain
Info: [https://developers.digitalocean.com/documentation/v2/#list-all-domain-records list-all-domain-records](https://developers.digitalocean.com/documentation/v2/#list-all-domain-records list-all-domain-records)

**Parameters**

**name**: `string`, The Domain Name

**query**: `*`, Query Options

**callback**: `*`, Function to execute on completion


### DigitalOcean.domainRecordsCreate(name, configuration, callback) 

Create a new Domain Record on a Domain
Info: [https://developers.digitalocean.com/documentation/v2/#create-a-new-domain-record create-a-new-domain-record](https://developers.digitalocean.com/documentation/v2/#create-a-new-domain-record create-a-new-domain-record)

**Parameters**

**name**: `string`, The Domain Name

**configuration**: `*`, Data required to create the Domain Record

**callback**: `*`, Function to execute on completion


### DigitalOcean.domainRecordsGet(name, domainRecordId, callback) 

Get a single Domain Record
Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain-record retrieve-an-existing-domain-record](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain-record retrieve-an-existing-domain-record)

**Parameters**

**name**: `string`, The Domain Name

**domainRecordId**: `number`, The Id of the Domain Record

**callback**: `*`, Function to execute on completion


### DigitalOcean.domainRecordsUpdate(name, domainRecordId, configuration, callback) 

Update a Domain Record
Info: [https://developers.digitalocean.com/documentation/v2/#update-a-domain-record update-a-domain-record](https://developers.digitalocean.com/documentation/v2/#update-a-domain-record update-a-domain-record)

**Parameters**

**name**: `string`, The Domain Name

**domainRecordId**: `number`, The Id of the Domain Record

**configuration**: `*`, Data required to update the Domain Record

**callback**: `*`, Function to execute on completion


### DigitalOcean.domainRecordsDelete(name, domainRecordId, callback) 

Delete a Domain Record
Info: [https://developers.digitalocean.com/documentation/v2/#delete-a-domain-record delete-a-domain-record](https://developers.digitalocean.com/documentation/v2/#delete-a-domain-record delete-a-domain-record)

**Parameters**

**name**: `string`, The Domain Name

**domainRecordId**: `number`, The Id of the Domain Record

**callback**: `*`, Function to execute on completion


### DigitalOcean.regionsGetAll(query, callback) 

Get all Regions
Info: [https://developers.digitalocean.com/documentation/v2/#list-all-regions list-all-regions](https://developers.digitalocean.com/documentation/v2/#list-all-regions list-all-regions)

**Parameters**

**query**: `*`, Query Options

**callback**: `*`, Function to execute on completion


### DigitalOcean.sizesGetAll(query, callback) 

Get all Droplet sizes
Info: [https://developers.digitalocean.com/documentation/v2/#list-all-sizes list-all-sizes](https://developers.digitalocean.com/documentation/v2/#list-all-sizes list-all-sizes)

**Parameters**

**query**: `*`, Query Options

**callback**: `*`, Function to execute on completion


### DigitalOcean.imagesGetAll(query, callback) 

Get all Images
Include type=[distribution,application] or private=true in the query object to limit results.
Info: [https://developers.digitalocean.com/documentation/v2/#list-all-images list-all-images](https://developers.digitalocean.com/documentation/v2/#list-all-images list-all-images)

**Parameters**

**query**: `*`, Query Options

**callback**: `*`, Function to execute on completion


### DigitalOcean.imagesGetById(imageId, callback) 

Get an Image using its Id
Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-id retrieve-an-existing-image-by-id](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-id retrieve-an-existing-image-by-id)

**Parameters**

**imageId**: `number`, The Id of the Image

**callback**: `*`, Function to execute on completion


### DigitalOcean.imagesGetBySlug(slug, callback) 

Get an Image using its Slug
Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-slug retrieve-an-existing-image-by-slug](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-slug retrieve-an-existing-image-by-slug)

**Parameters**

**slug**: `string`, The Slug of the Image

**callback**: `*`, Function to execute on completion


### DigitalOcean.imagesGetActions(imageId, query, callback) 

Get all Actions for an Image
Info: [https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-an-image list-all-actions-for-an-image](https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-an-image list-all-actions-for-an-image)

**Parameters**

**imageId**: `number`, The Id of the Image

**query**: `*`, Query Options

**callback**: `*`, Function to execute on completion


### DigitalOcean.imagesUpdate(imageId, name, callback) 

Update the name of an Image
Info: [https://developers.digitalocean.com/documentation/v2/#update-an-image update-an-image](https://developers.digitalocean.com/documentation/v2/#update-an-image update-an-image)

**Parameters**

**imageId**: `number`, The Id of the Image

**name**: `string`, The Name to update the Image to

**callback**: `*`, Function to execute on completion


### DigitalOcean.imagesDelete(imageId, callback) 

Delete an Image
Info: [https://developers.digitalocean.com/documentation/v2/#delete-an-image delete-an-image](https://developers.digitalocean.com/documentation/v2/#delete-an-image delete-an-image)

**Parameters**

**imageId**: `number`, The Id of the Image

**callback**: `*`, Function to execute on completion


### DigitalOcean.imagesRequestAction(imageId, action, callback) 

Request an Action on an Image
Info: [https://developers.digitalocean.com/documentation/v2/#image-actions image-actions](https://developers.digitalocean.com/documentation/v2/#image-actions image-actions)

**Parameters**

**imageId**: `number`, The Id of the Image

**action**: `*`, Action Options

**callback**: `*`, Function to execute on completion


### DigitalOcean.imagesGetAction(imageId, actionId, callback) 

Get the status of an Action
Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-action retrieve-an-existing-image-action](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-action retrieve-an-existing-image-action)

**Parameters**

**imageId**: `number`, The Id of the Image

**actionId**: `number`, The Id of the Action

**callback**: `*`, Function to execute on completion


### DigitalOcean.floatingIpsGetAll(query, callback) 

Get all Floating IPs
Info: [https://developers.digitalocean.com/documentation/v2/#list-all-floating-ips list-all-floating-ips](https://developers.digitalocean.com/documentation/v2/#list-all-floating-ips list-all-floating-ips)

**Parameters**

**query**: `*`, Query Options

**callback**: `*`, Function to execute on completion


### DigitalOcean.floatingIpsAssignDroplet(dropletId, callback) 

Create and assign a Floating IP to a specific droplet.
Info: [https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet create-a-new-floating-ip-assigned-to-a-droplet](https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet create-a-new-floating-ip-assigned-to-a-droplet)

**Parameters**

**dropletId**: `number`, The ID of Droplet that the Floating IP will be assigned to.

**callback**: `*`, Function to execute on completion


### DigitalOcean.floatingIpsAssignRegion(region, callback) 

Create and assign a Floating IP to a region.
Info: [https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet create-a-new-floating-ip-assigned-to-a-droplet](https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet create-a-new-floating-ip-assigned-to-a-droplet)

**Parameters**

**region**: `string`, The slug identifier for the region the Floating IP will be reserved to.

**callback**: `*`, Function to execute on completion


### DigitalOcean.floatingIpsGet(ipAddress, callback) 

Retrieve an existing Floating IP
Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip retrieve-an-existing-floating-ip](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip retrieve-an-existing-floating-ip)

**Parameters**

**ipAddress**: `string`, Floating IP address.

**callback**: `*`, Function to execute on completion


### DigitalOcean.floatingIpsDelete(ipAddress, callback) 

Delete a Floating IP
Info: [https://developers.digitalocean.com/documentation/v2/#delete-a-floating-ips delete-a-floating-ips](https://developers.digitalocean.com/documentation/v2/#delete-a-floating-ips delete-a-floating-ips)

**Parameters**

**ipAddress**: `string`, Floating IP address

**callback**: `*`, Function to execute on completion


### DigitalOcean.floatingIpsRequestAction(ipAddress, action, callback) 

Request an action on a Floating IP
Info: [https://developers.digitalocean.com/documentation/v2/#floating-ip-actions floating-ip-actions](https://developers.digitalocean.com/documentation/v2/#floating-ip-actions floating-ip-actions)

**Parameters**

**ipAddress**: `string`, Floating IP address

**action**: `*`, Action options

**callback**: `*`, Function to execute on completion


### DigitalOcean.floatingIpsGetActions(ipAddress, query, callback) 

List all actions for a Floating IP
Info: [https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-a-floating-ip list-all-actions-for-a-floating-ip](https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-a-floating-ip list-all-actions-for-a-floating-ip)

**Parameters**

**ipAddress**: `string`, Floating IP address

**query**: `*`, Query options

**callback**: `*`, Function to execute on completion


### DigitalOcean.floatingIpsGetAction(ipAddress, actionId, callback) 

Retrieve an existing Floating IP action
Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip-action retrieve-an-existing-floating-ip-action](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip-action retrieve-an-existing-floating-ip-action)

**Parameters**

**ipAddress**: `string`, Floating IP address

**actionId**: `number`, The Id of the action

**callback**: `*`, Function to execute on completion




* * *










