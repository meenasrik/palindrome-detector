var rewire = require("rewire");
var chai = require("chai");
var should = chai.should();

var app = rewire("./index.js");

detectPalindrome = app.__get__("detectPalindrome");

describe("detectPalindrome", function() {
  it("should output true when given a palindrome", function(done) {
    detectPalindrome("madam").should.equal(true);
    done();
  });

  it("should correctly handle examples with even and odd lengths", function(done) {
    detectPalindrome("madam").should.equal(true);
    detectPalindrome("aaabbaaa").should.equal(true);
    detectPalindrome("madman").should.equal(false);
    detectPalindrome("badlands").should.equal(false);
    done();
  });

  it("should output false when not given a palindrome", function(done) {
    detectPalindrome("thanksgiving").should.equal(false);
    done();
  });

  it("should output false when given a non-string argument", function(done) {
    detectPalindrome(0).should.equal(false);
    done();
  });

  it("should ignore extra whitespace in the argument", function(done) {
    detectPalindrome("  madam").should.equal(true);
    detectPalindrome("madam       ").should.equal(true);
    detectPalindrome("  madam       ").should.equal(true);
    done();
  });
});
