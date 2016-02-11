'use strict';

var chai = require('chai');
var reps = require('../lib/reps');
var expect = chai.expect;

describe('lib/reps.js', function() {

  var methods = [
    'allByZip',
    'repsByName',
    'repsByState',
    'sensByName',
    'sensByState',
  ];

  methods.forEach(function(method) {
    it('should implement "' + method + '"', function() {
      expect(reps[method]).to.be.a('function', 'reps.' + method + ' is not a function');
    });
  });

  it('should be able to search all by zip', function(done) {
    reps.allByZip('84043', function(err, people) {
      expect(err).to.be.eql(null);
      expect(people).to.be.instanceOf(Array);
      expect(people).to.have.length.greaterThan(0);
      people.forEach(function(person) {
        expect(person.state).to.be.eql('UT');
      });
      done();
    });
  });

  it('should be able to search reps by name', function(done) {
    reps.repsByName('smith', function(err, people) {
      expect(err).to.be.eql(null);
      expect(people).to.be.instanceOf(Array);
      expect(people).to.have.length.greaterThan(0);
      people.forEach(function(person) {
        expect(person.name.toLowerCase()).to.match(/smith$/);
      });
      done();
    });
  });

  it('should be able to search reps by state', function(done) {
    reps.repsByState('ut', function(err, people) {
      expect(err).to.be.eql(null);
      expect(people).to.be.instanceOf(Array);
      expect(people).to.have.length.greaterThan(0);
      people.forEach(function(person) {
        expect(person.state).to.be.eql('UT');
      });
      done();
    });
  });

  it('should be able to search senators by name', function(done) {
    reps.sensByName('hatch', function(err, people) {
      expect(err).to.be.eql(null);
      expect(people).to.be.instanceOf(Array);
      expect(people).to.have.length.greaterThan(0);
      people.forEach(function(person) {
        expect(person.name.toLowerCase()).to.match(/hatch$/);
      });
      done();
    });
  });

  it('should be able to search senators by state', function(done) {
    reps.sensByState('ut', function(err, people) {
      expect(err).to.be.eql(null);
      expect(people).to.be.instanceOf(Array);
      expect(people).to.have.length.greaterThan(0);
      people.forEach(function(person) {
        expect(person.state).to.be.eql('UT');
      });
      done();
    });
  });

});
