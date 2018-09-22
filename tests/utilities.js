module.exports = {

	getErrorMessageFromException: function(e) {
		return e.stack.toString().split('\n')[0];
	},

};