const {Builder, By, Key, until} = require('selenium-webdriver');
const production = 'https://baonguyen96.github.io/';
const regression = 'http://localhost:63343/baonguyen96.github.io/index.html?_ijt=bn5780ebg03rdrt6kjum0ot5oh';
const environment = production;

let webDriver = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
let path = require('chromedriver').path;

let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

let driver = new webDriver.Builder()
	.withCapabilities(webDriver.Capabilities.chrome())
	.build();

(async function runRegressionTest() {
	let result = 'PASS';

	try {
		await loadPage();
		await verifyHeader();
		await verifyAboutSection();
		await verifyExperienceSection();
		await verifySkillsSection();
		await verifyProjectsSection();
		await verifyAwardsSection();
		await verifyCoursesSection();
		await verifyContactsSection();
		await verifyCopyrightSection();

		// await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
		// await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
	}
	catch (e) {
		console.log(e.stack);
		result = 'FAIL';
	}
	finally {
		await driver.quit();
		console.log('Test result: ' + result);
	}
})();

function sleep(sec) {
	return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

async function loadPage() {
	await driver.get(environment);
	sleep(1);
}


async function verifyHeader() {

}

async function verifyAboutSection() {

}

async function verifyExperienceSection() {

}


async function verifySkillsSection() {

}


async function verifyProjectsSection() {

}


async function verifyAwardsSection() {

}


async function verifyCoursesSection() {

}


async function verifyContactsSection() {

}

async function verifyCopyrightSection() {

}