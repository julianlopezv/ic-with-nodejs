'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

  it('El nombre debe ser Julian', function () {
    appempic.getFirstName().should.equal('Julian');
  });

  it('El apellido debe ser Lopez', function () {
    appempic.getLastName().should.equal('Valencia');
  });

});
