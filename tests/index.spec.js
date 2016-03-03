'use strict'

// var $ = require('nd-jquery')
var chai = require('chai')
var sinonChai = require('sinon-chai')
var Message = require('../index')

var expect = chai.expect
// var sinon = window.sinon

chai.use(sinonChai)

/*globals describe,it*/

describe('Message', function() {

  it('new Message', function() {
    expect(Message).to.be.a('function')
    expect(new Message).to.be.a('object')
  })

})
