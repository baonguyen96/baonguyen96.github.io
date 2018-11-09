module.exports = {

	getErrorMessageFromException: function (e) {
		// return e.stack.toString().split('\n')[0];
		return e.stack.toString();
	},

	parseMethodName: function (methodName) {
		return methodName
			.replace(/([A-Z])/g, (match) => ` ${match}`)
			.replace(/^./, (match) => match.toUpperCase());
	},

	checkBrokenLinks: function (url, skips) {
		let command = `blc ${url} -ro`;
		let result = true;

		skips.forEach((skip) => {
			command += ` --exclude ${skip}`;
		});
		command += ' -v';
		console.log(command);

		const {stdout, stderr} = require('shelljs').exec(command);

		if (stderr) {
			result = false;
		}
		else {
			result = stdout.toString().match('[\\S\\s]+\\D0 broken*');
		}

		return result;
	}

};
