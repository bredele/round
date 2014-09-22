
/**
 * Test dependencies.
 */

var assert = require('assert');
var round = require('..');

describe("round", function() {

	it("decimal 0 (default)", function() {
		assert.equal(round(245.768), 246);
	});
	
	it("decimal 2", function() {
		assert.equal(round(245.768, 2), 245.77);
	});

  it("decimal 4", function() {
		assert.equal(round(245.76856, 4), 245.7686);
	});
});
