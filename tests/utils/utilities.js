module.exports = {

	getErrorMessageFromException: function (e) {
		return e.stack.toString().split('\n')[0];
	},

	parseMethodName: function (methodName) {
		return methodName
			.replace(/([A-Z])/g, (match) => ` ${match}`)
			.replace(/^./, (match) => match.toUpperCase());
	},

	checkBrokenLinks: function(url, skips) {
		const shell = require('shelljs');
		let command = `blc ${url} -ro`;

		skips.forEach((skip) => {
			command += ` --exclude ${skip}`;
		});
		command += ' -v';

		shell.exec(command);

		let result = true;

		require('child_process').exec(command, function(err, stdout, stderr) {
			result = stdout.toString().includes(' links found. 0 broken.');
		});

		return result;
	}

};
