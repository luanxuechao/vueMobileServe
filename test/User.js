/**
 * Created by chao on 2017/5/18.
 */
var should = require('should');
var sails = require('sails');
var rc = require('rc');
var superagent = require('superagent');

describe('UserController', function () {
  this.timeout(5000)
  before(function (done) {
    sails.lift({
      log: {
        level: 'error'   //指定错误级别，避免出现调试输出，这主要是用来调试controller
      }
    }, function (err, server) {
      sails = server;
      if (err)
        return done(err);
      done(err, sails);
    });
  });
  after(function (done) {
    var done_called = false;
    sails.lower(function () {
      if (!done_called) {
        done_called = true;
        setTimeout(function () {
          sails.log.debug("inside app.lower, callback not called yet. calling.");
          done();
        }, 1000);
      } else {
        sails.log.debug("inside app.lower, callback already called.");
      }
    });
  });
  it('#login', function (done) {
    var agent = superagent.agent();
    agent.get('http://localhost:1337/user/login?userName=luan&password=luan').end(function (err, res) {
      // console.log(err, res)
      should(res.body).be.have.property('id');
      should(res.body).be.have.property('userName');
      should(res.body).be.have.property('password');
      return done();
    });
  })
})
