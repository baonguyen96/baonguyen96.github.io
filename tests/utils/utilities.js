const { exec } = require('child_process');

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
		let command = `blc ${url} -r`;
		let result = true;

		skips.forEach((skip) => {
			command += ` --exclude ${skip}`;
		});

		// command += ' -v';
		console.log(command);

		exec(command, (error, stdout, stderr) => {
			if (error) {
				console.error(`exec error: ${error}`);
				result = false;
			}
			else {
				console.log(stdout);
				result = !stdout.toString().includes('├─BROKEN─');
			}
		});

		return result;
	}

};
