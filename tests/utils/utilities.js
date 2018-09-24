module.exports = {

	getErrorMessageFromException: function (e) {
		return e.stack.toString().split('\n')[0];
	},

	parseMethodName: function (methodName) {
		return methodName
			.replace(/([A-Z])/g, (match) => ` ${match}`)
			.replace(/^./, (match) => match.toUpperCase());
	}

};