declare module 'do-wrapper' {

    import CallbackAny = DigitalOcean.CallbackAny;
    import SSHKey = DigitalOcean.SSHKey;
    import Callback = DigitalOcean.Callback;
    import DropletResponse = DigitalOcean.DropletResponse;

    class DigitalOcean {

        constructor(apiKey: string, pageSize?: number);

        /** Get Account Information
         *  Info [https://developers.digitalocean.com/documentation/v2/#account account](https://developers.digitalocean.com/documentation/v2/#account account)
         *  **Parameters**
         *  **callback**: `*`, Function to execute on completion
         */
        public account(callback: CallbackAny): any;

        /** Get Account Actions
         *  **Parameters**
         *  **query**: `Object`, Query Options
         *  **callback**: `*`, Function to execute on completion
         */
        public accountGetActions(query: {}, callback: CallbackAny): any;

        /** Get Action Information for Account
         *  Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-action retrieve-an-existing-action](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-action retrieve-an-existing-action)
         *  **Parameters**
         *  **actionId**: `number`, The Id of the Action
         *  **callback**: `*`, Function to execute on completion
         */
        public accountGetAction(actionId: number, callback: CallbackAny): any;

        /** List all SSH Keys
         *  Info: [https://developers.digitalocean.com/documentation/v2/#list-all-keys list-all-keys](https://developers.digitalocean.com/documentation/v2/#list-all-keys list-all-keys)
         *  **Parameters**
         *  **query**: `Object`, Query Options
         *  **callback**: `*`, Function to execute on completion
         */
        public accountGetKeys(query: {}, callback: CallbackAny): any;

        /** Add a new SSH Key
         *  Info: [https://developers.digitalocean.com/documentation/v2/#create-a-new-key create-a-new-key](https://developers.digitalocean.com/documentation/v2/#create-a-new-key create-a-new-key)
         *  **Parameters**
         *  **configuration**: `*`, Information required to create SSH Key | {name: ?, public_key: ?}
         *  **callback**: `*`, Function to execute on completion
         */
        public accountAddKey(configuration: SSHKey, callback: CallbackAny): any;

        /** Get an SSH Key via its Id
         *  Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key retrieve-an-existing-key](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key retrieve-an-existing-key)
         *  **Parameters**
         *  **keyId**: `number`, The Id of the Key
         *  **callback**: `*`, Function to execute on completion
         */
        public accountGetKeyById(keyId: number, callback: CallbackAny): any;

        /** Get an SSH Key via its Fingerprint
         *  Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key retrieve-an-existing-key](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key retrieve-an-existing-key)
         *  **Parameters**
         *  **fingerprint**: `string`, The Fingerprint of the Key
         *  **callback**: `*`, Function to execute on completion
         */
        public accountGetKeyByFingerprint(fingerprint: string, callback: CallbackAny): any;

        /** Rename a SSH Key
         *  Info: [https://developers.digitalocean.com/documentation/v2/#update-a-key update-a-key](https://developers.digitalocean.com/documentation/v2/#update-a-key update-a-key)
         *  **Parameters**
         *  **keyIdentity**: `*`, The Id or Fingerprint of the SSH Key
         *  **keyName**: `string`, What to rename the SSH Key to
         *  **callback**: `*`, Function to execute on completion
         */
        public accountRenameKey(keyIdentity: any, keyName: string, callback: CallbackAny): any;

        /** Delete a SSH Key
         *  Info: [https://developers.digitalocean.com/documentation/v2/#destroy-a-key destroy-a-key](https://developers.digitalocean.com/documentation/v2/#destroy-a-key destroy-a-key)
         *  **Parameters**
         *  **keyIdentity**: `*`, The Id or Fingerprint of the SSH Key
         *  **callback**: `*`, Function to execute on completion
         */
        public accountDeleteKey(keyIdentity: any, callback: CallbackAny): any;

        /** Get a list of Droplets
         *  Info: [https://developers.digitalocean.com/documentation/v2/#list-all-droplets list-all-droplets](https://developers.digitalocean.com/documentation/v2/#list-all-droplets list-all-droplets)
         *  **Parameters**
         *  **query**: `Object`, Query Options
         *  **callback**: `*`, Function to execute on completion
         */
        public dropletsGetAll(query: {}, callback: Callback<DropletResponse>): any;

        /** Get a list of Kernels available for a Droplet
         *  Info: [https://developers.digitalocean.com/documentation/v2/#list-all-available-kernels-for-a-droplet list-all-available-kernels-for-a-droplet](https://developers.digitalocean.com/documentation/v2/#list-all-available-kernels-for-a-droplet list-all-available-kernels-for-a-droplet)
         *  **Parameters**
         *  **dropletId**: `number`, The Id of the Droplet
         *  **query**: `Object`, Query Options
         *  **callback**: `*`, Function to execute on completion
         */
        public dropletsGetKernels(dropletId: number, query: {}, callback: CallbackAny): any;

        /** Get a list of Snapshots for a Droplet
         *  Info: [https://developers.digitalocean.com/documentation/v2/#list-snapshots-for-a-droplet retrieve-snapshots-for-a-droplet](https://developers.digitalocean.com/documentation/v2/#list-snapshots-for-a-droplet retrieve-snapshots-for-a-droplet)
         *  **Parameters**
         *  **dropletId**: `number`, The Id of the Droplet
         *  **query**: `Object`, Query Options
         *  **callback**: `*`, Function to execute on completion
         */
        public dropletsGetSnapshots(dropletId: number, query: {}, callback: CallbackAny): any;

        /** Get a list of Backups for a Droplet
         *  Info: [https://developers.digitalocean.com/documentation/v2/#list-backups-for-a-droplet list-backups-for-a-droplet](https://developers.digitalocean.com/documentation/v2/#list-backups-for-a-droplet list-backups-for-a-droplet)
         *  **Parameters**
         *  **dropletId**: `number`, The Id of the Droplet
         *  **query**: `Object`, Query Options
         *  **callback**: `*`, Function to execute on completion
         */
        public dropletsGetBackups(dropletId: number, query: {}, callback: CallbackAny): any;

        /** Get a list of Actions for a Droplet
         *  Info: [https://developers.digitalocean.com/documentation/v2/#list-actions-for-a-droplet list-actions-for-a-droplet](https://developers.digitalocean.com/documentation/v2/#list-actions-for-a-droplet list-actions-for-a-droplet)
         *  **Parameters**
         *  **dropletId**: `number`, The Id of the Droplet
         *  **query**: `Object`, Query Options
         *  **callback**: `*`, Function to execute on completion
         */
        public dropletsGetActions(dropletId: number, query: {}, callback: CallbackAny): any;

        /** Create a New Droplet
         *  Info: [https://developers.digitalocean.com/documentation/v2/#create-a-new-droplet create-a-new-droplet](https://developers.digitalocean.com/documentation/v2/#create-a-new-droplet create-a-new-droplet)
         *  **Parameters**
         *  **configuration**: `*`, Creation parameters, see info for more details.
         *  **callback**: `*`, Function to execute on completion
         */
        public dropletsCreate(configuration: any, callback: CallbackAny): any;

        /** Get a Droplet by Id
         *  Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-droplet-by-id retrieve-an-existing-droplet-by-id](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-droplet-by-id retrieve-an-existing-droplet-by-id)
         *  **Parameters**
         *  **dropletId**: `number`, The Id of the Droplet
         *  **callback**: `*`, Function to execute on completion
         */
        public dropletsGetById(dropletId: number, callback: CallbackAny): any;

        /** Delete a Droplet
         *  Info: [https://developers.digitalocean.com/documentation/v2/#delete-a-droplet delete-a-droplet](https://developers.digitalocean.com/documentation/v2/#delete-a-droplet delete-a-droplet)
         *  **Parameters**
         *  **dropletId**: `number`, The Id of the Droplet
         *  **callback**: `*`, Function to execute on completion
         */
        public dropletsDelete(dropletId: number, callback: CallbackAny): any;

        /** Get a list of Droplet Neighbors
         *  Info: [https://developers.digitalocean.com/documentation/v2/#list-neighbors-for-a-droplet list-neighbors-for-a-droplet](https://developers.digitalocean.com/documentation/v2/#list-neighbors-for-a-droplet list-neighbors-for-a-droplet)
         *  **Parameters**
         *  **dropletId**: `number`, The Id of the Droplet
         *  **callback**: `*`, Function to execute on completion
         */
        public dropletsGetNeighbors(dropletId: number, callback: CallbackAny): any;

        /** Get a report of Droplets sharing the same hardware
         *  Info: [https://developers.digitalocean.com/documentation/v2/#list-all-droplet-neighbors list-all-droplet-neighbors](https://developers.digitalocean.com/documentation/v2/#list-all-droplet-neighbors list-all-droplet-neighbors)
         *  **Parameters**
         *  **callback**: `*`, Function to execute on completion
         */
        public dropletsGetNeighborsReport(callback: CallbackAny): any;

        /** Get a list of scheduled Droplet Upgrades
         *  Info: [https://developers.digitalocean.com/documentation/v2/#list-droplet-upgrades list-droplet-upgrades](https://developers.digitalocean.com/documentation/v2/#list-droplet-upgrades list-droplet-upgrades)
         *  **Parameters**
         *  **callback**: `*`, Function to execute on completion
         */
        public dropletsGetUpgrades(callback: CallbackAny): any;

        /** Request an Action on a Droplet
         *  Info: [https://developers.digitalocean.com/documentation/v2/#droplet-actions droplet-actions](https://developers.digitalocean.com/documentation/v2/#droplet-actions droplet-actions)
         *  **Parameters**
         *  **dropletId**: `number`, The Id of the Droplet
         *  **action**: `*`, Action Object
         *  **callback**: `*`, Function to execute on completion
         */
        public dropletsRequestAction(dropletId: number, action: {}, callback: CallbackAny): any;

        /** Get an Action for a Droplet
         *  Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-a-droplet-action retrieve-a-droplet-action](https://developers.digitalocean.com/documentation/v2/#retrieve-a-droplet-action retrieve-a-droplet-action)
         *  **Parameters**
         *  **dropletId**: `number`, The Id of the Droplet
         *  **actionId**: `number`, The Id of the Action
         *  **callback**: `*`, Function to execute on completion
         */
        public dropletsGetAction(dropletId: number, actionId: number, callback: CallbackAny): any;

        /** Get all Domains
         *  Info: [https://developers.digitalocean.com/documentation/v2/#list-all-domains list-all-domains](https://developers.digitalocean.com/documentation/v2/#list-all-domains list-all-domains)
         *  **Parameters**
         *  **query**: `Object`, Query Options
         *  **callback**: `*`, Function to execute on completion
         */
        public domainsGetAll(query: {}, callback: CallbackAny): any;

        /** Add a new Domain
         *  Info: [https://developers.digitalocean.com/documentation/v2/#create-a-new-domain create-a-new-domain](https://developers.digitalocean.com/documentation/v2/#create-a-new-domain create-a-new-domain)
         *  **Parameters**
         *  **name**: `string`, Domain Name
         *  **ip**: `string`, The Ip of the Droplet
         *  **callback**: `*`, Function to execute on completion
         */
        public domainsCreate(name: string, ip: string, callback: CallbackAny): any;

        /** Get a Domain
         *  Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain retrieve-an-existing-domain](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain retrieve-an-existing-domain)
         *  **Parameters**
         *  **name**: `string`, The Domain Name
         *  **callback**: `*`, Function to execute on completion
         */
        public domainsGet(name: string, callback: CallbackAny): any;

        /** Delete a Domain
         *  Info: [https://developers.digitalocean.com/documentation/v2/#delete-a-domain delete-a-domain](https://developers.digitalocean.com/documentation/v2/#delete-a-domain delete-a-domain)
         *  **Parameters**
         *  **name**: `string`, The Domain Name
         *  **callback**: `*`, Function to execute on completion
         */
        public domainsDelete(name: string, callback: CallbackAny): any;

        /** Get all Domain Records for a Domain
         *  Info: [https://developers.digitalocean.com/documentation/v2/#list-all-domain-records list-all-domain-records](https://developers.digitalocean.com/documentation/v2/#list-all-domain-records list-all-domain-records)
         *  **Parameters**
         *  **name**: `string`, The Domain Name
         *  **query**: `Object`, Query Options
         *  **callback**: `*`, Function to execute on completion
         */
        public domainRecordsGetAll(name: string, query: {}, callback: CallbackAny): any;

         /** Create a new Domain Record on a Domain
         *  Info: [https://developers.digitalocean.com/documentation/v2/#create-a-new-domain-record create-a-new-domain-record](https://developers.digitalocean.com/documentation/v2/#create-a-new-domain-record create-a-new-domain-record)
         *  **Parameters**
         *  **name**: `string`, The Domain Name
         *  **configuration**: `*`, Data required to create the Domain Record
         *  **callback**: `*`, Function to execute on completion
         */
        public domainRecordsCreate(name: string, configuration: {}, callback: CallbackAny): any;

        /** Get a single Domain Record
         *  Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain-record retrieve-an-existing-domain-record](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain-record retrieve-an-existing-domain-record)
         *  **Parameters**
         *  **name**: `string`, The Domain Name
         *  **domainRecordId**: `number`, The Id of the Domain Record
         *  **callback**: `*`, Function to execute on completion
         */
        public domainRecordsGet(name: string, domainRecordId: number, callback: CallbackAny): any;

        /** Update a Domain Record
         *  Info: [https://developers.digitalocean.com/documentation/v2/#update-a-domain-record update-a-domain-record](https://developers.digitalocean.com/documentation/v2/#update-a-domain-record update-a-domain-record)
         *  **Parameters**
         *  **name**: `string`, The Domain Name
         *  **domainRecordId**: `number`, The Id of the Domain Record
         *  **configuration**: `*`, Data required to update the Domain Record
         *  **callback**: `*`, Function to execute on completion
         */
        public domainRecordsUpdate(name: string, domainRecordId: number, configuration: {}, callback: CallbackAny): any;

        /** Delete a Domain Record
         *  Info: [https://developers.digitalocean.com/documentation/v2/#delete-a-domain-record delete-a-domain-record](https://developers.digitalocean.com/documentation/v2/#delete-a-domain-record delete-a-domain-record)
         *  **Parameters**
         *  **name**: `string`, The Domain Name
         *  **domainRecordId**: `number`, The Id of the Domain Record
         *  **callback**: `*`, Function to execute on completion
         */
        public domainRecordsDelete(name: string, domainRecordId: number, callback: CallbackAny): any;

        /** Get all Regions
         *  Info: [https://developers.digitalocean.com/documentation/v2/#list-all-regions list-all-regions](https://developers.digitalocean.com/documentation/v2/#list-all-regions list-all-regions)
         *  **Parameters**
         *  **query**: `Object`, Query Options
         *  **callback**: `*`, Function to execute on completion
         */
        public regionsGetAll(query: {}, callback: CallbackAny): any;

        /** Get all Droplet sizes
         *  Info: [https://developers.digitalocean.com/documentation/v2/#list-all-sizes list-all-sizes](https://developers.digitalocean.com/documentation/v2/#list-all-sizes list-all-sizes)
         *  **Parameters**
         *  **query**: `Object`, Query Options
         *  **callback**: `*`, Function to execute on completion
         */
        public sizesGetAll(query: {}, callback: CallbackAny): any;

        /** Get all Images
         *  Include type=[distribution,application] or private=true in the query object to limit results.
         *  Info: [https://developers.digitalocean.com/documentation/v2/#list-all-images list-all-images](https://developers.digitalocean.com/documentation/v2/#list-all-images list-all-images)
         *  **Parameters**
         *  **query**: `Object`, Query Options
         *  **callback**: `*`, Function to execute on completion
         */
        public imagesGetAll(query: {}, callback: CallbackAny): any;

        /** Get an Image using its Id
         *  Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-id retrieve-an-existing-image-by-id](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-id retrieve-an-existing-image-by-id)
         *  **Parameters**
         *  **imageId**: `number`, The Id of the Image
         *  **callback**: `*`, Function to execute on completion
         */
        public imagesGetById(imageId: number, callback: CallbackAny): any;

        /** Get an Image using its Slug
         *  Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-slug retrieve-an-existing-image-by-slug](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-slug retrieve-an-existing-image-by-slug)
         *  **Parameters**
         *  **slug**: `string`, The Slug of the Image
         *  **callback**: `*`, Function to execute on completion
         */
        public imagesGetBySlug(slug: string, callback: CallbackAny): any;

        /** Get all Actions for an Image
         *  Info: [https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-an-image list-all-actions-for-an-image](https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-an-image list-all-actions-for-an-image)
         *  **Parameters**
         *  **imageId**: `number`, The Id of the Image
         *  **query**: `Object`, Query Options
         *  **callback**: `*`, Function to execute on completion
         */
        public imagesGetActions(imageId: number, query: {}, callback: CallbackAny): any;

        /** Update the name of an Image
         *  Info: [https://developers.digitalocean.com/documentation/v2/#update-an-image update-an-image](https://developers.digitalocean.com/documentation/v2/#update-an-image update-an-image)
         *  **Parameters**
         *  **imageId**: `number`, The Id of the Image
         *  **name**: `string`, The Name to update the Image to
         *  **callback**: `*`, Function to execute on completion
         */
        public imagesUpdate(imageId: number, name: string, callback: CallbackAny): any;

        /** Delete an Image
         *  Info: [https://developers.digitalocean.com/documentation/v2/#delete-an-image delete-an-image](https://developers.digitalocean.com/documentation/v2/#delete-an-image delete-an-image)
         *  **Parameters**
         *  **imageId**: `number`, The Id of the Image
         *  **callback**: `*`, Function to execute on completion
         */
        public imagesDelete(imageId: number, callback: CallbackAny): any;

        /** Request an Action on an Image
         *  Info: [https://developers.digitalocean.com/documentation/v2/#image-actions image-actions](https://developers.digitalocean.com/documentation/v2/#image-actions image-actions)
         *  **Parameters**
         *  **imageId**: `number`, The Id of the Image
         *  **action**: `*`, Action Options
         *  **callback**: `*`, Function to execute on completion
         */
        public imagesRequestAction(imageId: number, action: {}, callback: CallbackAny): any;

        /** Get the status of an Action
         *  Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-action retrieve-an-existing-image-action](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-action retrieve-an-existing-image-action)
         *  **Parameters**
         *  **imageId**: `number`, The Id of the Image
         *  **actionId**: `number`, The Id of the Action
         *  **callback**: `*`, Function to execute on completion
         */
        public imagesGetAction(imageId: number, actionId: number, callback: CallbackAny): any;

        /** Get all Floating IPs
         *  Info: [https://developers.digitalocean.com/documentation/v2/#list-all-floating-ips list-all-floating-ips](https://developers.digitalocean.com/documentation/v2/#list-all-floating-ips list-all-floating-ips)
         *  **Parameters**
         *  **query**: `Object`, Query Options
         *  **callback**: `*`, Function to execute on completion
         */
        public floatingIpsGetAll(query: {}, callback: CallbackAny): any;

         /** Create and assign a Floating IP to a specific droplet.
         *  Info: [https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet create-a-new-floating-ip-assigned-to-a-droplet](https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet create-a-new-floating-ip-assigned-to-a-droplet)
         *  **Parameters**
         *  **dropletId**: `number`, The ID of Droplet that the Floating IP will be assigned to.
         *  **callback**: `*`, Function to execute on completion
         */
        public floatingIpsAssignDroplet(dropletId: number, callback: CallbackAny): any;

         /** Create and assign a Floating IP to a region.
         *  Info: [https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet create-a-new-floating-ip-assigned-to-a-droplet](https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet create-a-new-floating-ip-assigned-to-a-droplet)
         *  **Parameters**
         *  **region**: `string`, The slug identifier for the region the Floating IP will be reserved to.
         *  **callback**: `*`, Function to execute on completion
         */
        public floatingIpsAssignRegion(region: string, callback: CallbackAny): any;

        /** Retrieve an existing Floating IP
         *  Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip retrieve-an-existing-floating-ip](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip retrieve-an-existing-floating-ip)
         *  **Parameters**
         *  **ipAddress**: `string`, Floating IP address.
         *  **callback**: `*`, Function to execute on completion
         */
        public floatingIpsGet(ipAddress: string, callback: CallbackAny): any;

        /** Delete a Floating IP
         *  Info: [https://developers.digitalocean.com/documentation/v2/#delete-a-floating-ips delete-a-floating-ips](https://developers.digitalocean.com/documentation/v2/#delete-a-floating-ips delete-a-floating-ips)
         *  **Parameters**
         *  **ipAddress**: `string`, Floating IP address
         *  **callback**: `*`, Function to execute on completion
         */
        public floatingIpsDelete(ipAddress: string, callback: CallbackAny): any;

        /** Request an action on a Floating IP
         *  Info: [https://developers.digitalocean.com/documentation/v2/#floating-ip-actions floating-ip-actions](https://developers.digitalocean.com/documentation/v2/#floating-ip-actions floating-ip-actions)
         *  **Parameters**
         *  **ipAddress**: `string`, Floating IP address
         *  **action**: `*`, Action options
         *  **callback**: `*`, Function to execute on completion
         */
        public floatingIpsRequestAction(ipAddress: string, action: {}, callback: CallbackAny): any;

        /** List all actions for a Floating IP
         *  Info: [https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-a-floating-ip list-all-actions-for-a-floating-ip](https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-a-floating-ip list-all-actions-for-a-floating-ip)
         *  **Parameters**
         *  **ipAddress**: `string`, Floating IP address
         *  **query**: `Object`, Query Options
         *  **callback**: `*`, Function to execute on completion
         */
        public floatingIpsGetActions(ipAddress: string, query: {}, callback: CallbackAny): any;

        /** Retrieve an existing Floating IP action
         *  Info: [https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip-action retrieve-an-existing-floating-ip-action](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip-action retrieve-an-existing-floating-ip-action)
         *  **Parameters**
         *  **ipAddress**: `string`, Floating IP address
         *  **actionId**: `number`, The Id of the action
         *  **callback**: `*`, Function to execute on completion
         */
        public floatingIpsGetAction(ipAddress: string, actionId: number, callback: CallbackAny): any;
    }

    export = DigitalOcean;
}

declare namespace DigitalOcean {

    export type CallbackAny = (err: any, res: any, body: any) => void;

    export type Callback<T> = (err: any, res: any, body: T) => void;

    export interface SSHKey {
        name: string,
        publicKey: string
    }

    export interface DropletResponse {
        droplets: Droplet[];
        links: Links;
        meta: Meta;
    }

    export interface Kernel {
        id: number;
        name: string;
        version: string;
    }

    export interface Image {
        id: number;
        name: string;
        distribution: string;
        slug: string;
        public: boolean;
        regions: string[];
        created_at: Date;
        type: string;
        min_disk_size: number;
        size_gigabytes: number;
    }

    export interface Size {
    }

    export interface V4 {
        ip_address: string;
        netmask: string;
        gateway: string;
        type: string;
    }

    export interface V6 {
        ip_address: string;
        netmask: number;
        gateway: string;
        type: string;
    }

    export interface Networks {
        v4: V4[];
        v6: V6[];
    }

    export interface Region {
        name: string;
        slug: string;
        sizes: any[];
        features: string[];
        available?: any;
    }

    export interface Droplet {
        id: number;
        name: string;
        memory: number;
        vcpus: number;
        disk: number;
        locked: boolean;
        status: string;
        kernel: Kernel;
        created_at: Date;
        features: string[];
        backup_ids: number[];
        snapshot_ids: any[];
        image: Image;
        volumes: any[];
        size: Size;
        size_slug: string;
        networks: Networks;
        region: Region;
        tags: any[];
    }

    export interface Pages {
        last: string;
        next: string;
    }

    export interface Links {
        pages: Pages;
    }

    export interface Meta {
        total: number;
    }


}