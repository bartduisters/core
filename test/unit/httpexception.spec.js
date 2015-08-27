"use strict";

let HttpException = require("../../src/HttpException/index");
const chai = require('chai')
const expect = chai.expect

describe("HttpException", function() {

  it("should throw an error using HttpException class", function() {
    let error = new HttpException(404, "Page not found");
    expect(error.statusCode).to.equal(404);
    expect(error.message).to.equal("Page not found");
  });


  it("should be instance of HttpException", function() {
    let HttpException1 = require("../../src/HttpException/index");
    let error = new HttpException1(404, "Page not found");
    expect(error instanceof HttpException).to.equal(true);
  });

});
