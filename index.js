
/**
 * Round numbers.
 *
 * Faster than using toFixed and 
 * return a number.
 * 
 * @param {Number} num 
 * @param {Number} decimal
 * @return {Number}
 * @api public
 */

module.exports = function(num, decimal) {
	var pow = Math.pow(10, decimal || 0);
	return Math.round(num * pow) / pow;
};