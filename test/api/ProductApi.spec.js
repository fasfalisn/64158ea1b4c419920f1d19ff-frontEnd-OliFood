/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: it@vilabs.eu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TempApi);
  }
}(this, function(expect, TempApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TempApi.ProductApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProductApi', function() {
    describe('createproduct', function() {
      it('should call createproduct successfully', function(done) {
        //uncomment below and update the code to test createproduct
        //instance.createproduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteproduct', function() {
      it('should call deleteproduct successfully', function(done) {
        //uncomment below and update the code to test deleteproduct
        //instance.deleteproduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllproduct', function() {
      it('should call getAllproduct successfully', function(done) {
        //uncomment below and update the code to test getAllproduct
        //instance.getAllproduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getByParamsproduct', function() {
      it('should call getByParamsproduct successfully', function(done) {
        //uncomment below and update the code to test getByParamsproduct
        //instance.getByParamsproduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getproduct', function() {
      it('should call getproduct successfully', function(done) {
        //uncomment below and update the code to test getproduct
        //instance.getproduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateproduct', function() {
      it('should call updateproduct successfully', function(done) {
        //uncomment below and update the code to test updateproduct
        //instance.updateproduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
