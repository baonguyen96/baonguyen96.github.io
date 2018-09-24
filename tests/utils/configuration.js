class Configuration {

	constructor(environment, browser, timeout) {
		this.environment = environment;
		this.browser = browser;
		this.timeout = timeout;
	}

}

module.exports = Configuration;