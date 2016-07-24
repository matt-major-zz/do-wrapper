'use strict';

import request from 'request';

export default class RequestHelper {
  /**
   * Request Helper
   * @param {string} token - Your Private API Token
   * @constructor
   */
  constructor(token) {
    this.headers = {
      'authorization': 'Bearer ' + token,
      'content_type': 'application/json'
    };
    this.apiUrl = 'https://api.digitalocean.com/v2/';
  }

  /**
   * Check the required Request & Trigger
   * @param {*} options - Request Options
   * @param {*} callback - Function to execute on completion
   */
  request(options, callback) {
    options.includeAll ? this.getAllPages(options.key, options, callback) : this.submitRequest(options, callback);
  }

  /**
   * Submit the Request
   * @param {*} options - Request Options Object
   * @param {*} callback - Function to execute on completion
   */
  submitRequest(options, callback) {
    let requestOptions = this.requestBuilder(options);
    request(requestOptions, (err, response, body) => {
      // Generate errors when 4XX or 5XX status codes are generated.
    if (!err && response.statusCode >= 400 && response.statusCode <= 599) {
      if (body && body.id && body.message) {
        err = new Error(body.id + ': ' + body.message);
      } else {
        err = new Error(response.statusCode + ': ' + response.statusMessage);
      }
    }
      if ( err ) {
        callback(err);
      } else {
        callback(null, response, body);
      }
    });
  }

  /**
   * Get All Pages
   * @param {string} key - Type of Item
   * @param {*} options - Request Options
   * @param {*} callback - Function to execute on completion
   */
  getAllPages(key, options, callback) {
    let items = [],
        total = 0,
        required = 0,
        completed = 1;

    options.qs.page = 1;

    this.submitRequest(options, (err, response, body) => {
      if ( err ) {
        callback(err);
      }
      total = body.meta.total;
      items = items.concat(body[key]);
      required = total / (options.qs.per_page || 25);
      if ( items.length >= total ) {
        return callback(null, response, items);
      } else {
        this.getRemainingPages(options, 2, required, function (err, response, body) {
          if ( err ) {
            callback(err);
          }
          completed++;
          items = items.concat(body[key]);
          if ( completed === required ) {
            callback(null, response, items);
          }
        });
      }
    });
  }

  /**
   * Get the Remaining Pages
   * @param {*} options - Request Options
   * @param {number} first - The first page to retrieve
   * @param {number} last - The last page to retrieve
   * @param {*} callback - Function to execute on completion
   */
  getRemainingPages(options, first, last, callback) {
    for ( let current = first; current <= last; current++ ) {
      options.qs.page = current;
      this.submitRequest(options, callback);
    }
  }

  /**
   * Build Options for Request
   * @param {*} options - Options Object
   * @returns {*}
   */
  requestBuilder(options) {
    return {
      uri: this.apiUrl + options.actionPath,
      method: options.method || 'GET',
      headers: options.headers || this.headers,
      body: options.body || {},
      strictSSL: true,
      json: true,
      qs: options.qs || {}
    };
  }
}
