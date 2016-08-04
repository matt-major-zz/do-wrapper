'use strict';

const RequestHelper = require('../dist/request-helper'),
      should = require('chai').should();

describe('do-wrapper', function () {
  var module, testSize, testToken;

  testSize = 10;
  testToken = 'a-test-token';

  beforeEach(function () {
    module = new RequestHelper('testToken');
  });

  describe('On instantiation of a new Request Helper class', function () {
    it('it should have configured the correct headers', function () {
      module.headers.authorization.should.equal('Bearer testToken');
      module.headers['content_type'].should.equal('application/json');
    });

    it('it should have the correct API URL', function () {
      module.apiUrl.should.equal('https://api.digitalocean.com/v2/');
    });
  });

  describe('When validating the Response Status Code', function () {
    it('with a 200 OK status code, should return true', function () {
      const result = module.isSuccessfulRequest(200);
      result.should.equal(true);
    });

    it('with a 201 CREATED status code, should return true', function () {
      const result = module.isSuccessfulRequest(201);
      result.should.equal(true);
    });

    it('with a 204 NO CONTENT status code, should return true', function () {
      const result = module.isSuccessfulRequest(204);
      result.should.equal(true);
    });

    it('with a 404 NOT FOUND status code, should return false', function () {
      const result = module.isSuccessfulRequest(404);
      result.should.equal(false);
    });

    it('with a 500 SERVER ERROR status code, should return false', function () {
      const result = module.isSuccessfulRequest(500);
      result.should.equal(false);
    });
  });
});
