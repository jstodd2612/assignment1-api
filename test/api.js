'use strict';

var chai = require('chai');
var supertest = require('supertest-as-promised');
var app = require('../app');
var request = supertest(app);
var expect = chai.expect;

describe('api', function() {

  it('should be able to get all by zip', function() {
    return request
      .get('/all/by-zip/84043')
      .then(function(res) {
        var people = res.body;

        expect(people).to.be.instanceOf(Array);
        expect(people).to.have.length.greaterThan(0);
        people.forEach(function(person) {
          expect(person.state).to.be.eql('UT');
        });
      });
  });

  it('should be able to get reps by name', function() {
    return request
      .get('/reps/by-name/smith')
      .then(function(res) {
        var people = res.body;

        expect(people).to.be.instanceOf(Array);
        expect(people).to.have.length.greaterThan(0);
        people.forEach(function(person) {
          expect(person.name.toLowerCase()).to.match(/smith$/);
        });
      });
  });

  it('should be able to get reps by state', function() {
    return request
      .get('/reps/by-state/ut')
      .then(function(res) {
        var people = res.body;

        expect(people).to.be.instanceOf(Array);
        expect(people).to.have.length.greaterThan(0);
        people.forEach(function(person) {
          expect(person.state).to.be.eql('UT');
        });
      });
  });

  it('should be able to get senators by name', function() {
    return request
      .get('/sens/by-name/hatch')
      .then(function(res) {
        var people = res.body;

        expect(people).to.be.instanceOf(Array);
        expect(people).to.have.length.greaterThan(0);
        people.forEach(function(person) {
          expect(person.name.toLowerCase()).to.match(/hatch$/);
        });
      });
  });

  it('should be able to get senators by state', function() {
    return request
      .get('/sens/by-state/ut')
      .then(function(res) {
        var people = res.body;

        expect(people).to.be.instanceOf(Array);
        expect(people).to.have.length.greaterThan(0);
        people.forEach(function(person) {
          expect(person.state).to.be.eql('UT');
        });
      });
  });

});
