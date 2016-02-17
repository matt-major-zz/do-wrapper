'use strict';

const DigitalOcean = require('../dist/do-wrapper'),
      should = require('chai').should();

describe('do-wrapper', function () {
  var api, testSize, testToken;

  testSize = 10;
  testToken = 'a-test-token';

  beforeEach(function () {
    api = new DigitalOcean(testToken, testSize);
  });

  describe('On instantiation of a new DigitalOcean class', function () {
    it('it should have the correct page size', function () {
      api.per_page.should.equal(testSize);
    });

    it('it should have a new RequestHelper class', function () {
      should.exist(api.requestHelper);
    });

    describe('Request Helper Class', function () {
      it('it should have the API url', function () {
        var url = api.requestHelper.apiUrl;
        (url).should.equal('https://api.digitalocean.com/v2/');
      });

      it('it should have the correct headers', function () {
        var headers = api.requestHelper.headers;
        headers.should.eql({
          authorization: 'Bearer ' + testToken,
          content_type: 'application/json'
        });
      });
    });
  });
});
