const {Builder, By, Key, until} = require('selenium-webdriver');
const Env = {
	'production': 'https://baonguyen96.github.io/',
	'regression': 'http://localhost:63343/baonguyen96.github.io/index.html?_ijt=bn5780ebg03rdrt6kjum0ot5oh'
};

const environment = Env.regression;

let util = require('./utilities');
let assert = require('assert');
let webDriver = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
let path = require('chromedriver').path;
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
let driver = new webDriver.Builder()
	.withCapabilities(webDriver.Capabilities.chrome())
	.build();


(async function runRegressionTest() {
	let failTests = [];

	// await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
	// await driver.wait(until.titleIs('webdriver - Google Search'), 1000);

	try {
		await loadPage();
	}
	catch (e) {
		failTests.push({
			'name': 'Load Page',
			'detail': util.getErrorMessageFromException(e)
		});
	}

	try {
		await verifyHeader();
	}
	catch (e) {
		failTests.push({
			'name': 'Verify Header',
			'detail': util.getErrorMessageFromException(e)
		});
	}

	try {
		await verifyAboutSection();
	}
	catch (e) {
		failTests.push({
			'name': 'Verify About Section',
			'detail': util.getErrorMessageFromException(e)
		});
	}

	try {
		await verifyExperienceSection();
	}
	catch (e) {
		failTests.push({
			'name': 'Verify Experience Section',
			'detail': util.getErrorMessageFromException(e)
		});
	}

	try {
		await verifySkillsSection();
	}
	catch (e) {
		failTests.push({
			'name': 'Verify Skills Section',
			'detail': util.getErrorMessageFromException(e)
		});
	}

	try {
		await verifyProjectsSection();
	}
	catch (e) {
		failTests.push({
			'name': 'Verify Projects Section',
			'detail': util.getErrorMessageFromException(e)
		});
	}

	try {
		await verifyAwardsSection();
	}
	catch (e) {
		failTests.push({
			'name': 'Verify Awards Section',
			'detail': util.getErrorMessageFromException(e)
		});
	}

	try {
		await verifyCoursesSection();
	}
	catch (e) {
		failTests.push({
			'name': 'Verify Courses Section',
			'detail': util.getErrorMessageFromException(e)
		});
	}

	try {
		await verifyContactsSection();
	}
	catch (e) {
		failTests.push({
			'name': 'Verify Contacts Section',
			'detail': util.getErrorMessageFromException(e)
		});
	}

	try {
		await verifyCopyrightSection();
	}
	catch (e) {
		failTests.push({
			'name': 'Verify Copyrights Section',
			'detail': util.getErrorMessageFromException(e)
		});
	}

	await driver.quit();
	showResult(failTests);

})();


function showResult(errorList) {
	if (errorList.length === 0) {
		console.log("Test result: PASS");
	}
	else {
		console.log("Test result: FAIL");

		errorList.forEach(function (error) {
			console.log('   + ' + error.name + ': ' + error.detail);
		});
	}
}


function sleep(sec) {
	return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

async function loadPage() {
	console.log('Load Page...');

	await driver.get(environment);
	sleep(1);
}

async function verifyHeader() {
	console.log('Verify Header...');

	await driver.findElement(By.xpath("//header[@id='header']/img"));

	await driver.findElement(By.xpath("//h1")).getText().then(function (text) {
		assert.strictEqual(text, 'BAO NGUYEN');
	});
}

async function verifyAboutSection() {
	console.log('Verify About Section...');

	await driver.findElement(By.xpath("//section[@id='aboutSection']/h2/span")).getText().then(function (text) {
		assert.strictEqual(text, 'About Me');
	});

	for (let i = 1; i <= 3; i++) {
		await driver.findElement(By.xpath("//section[@id='aboutSection']/p[" + i + "]"));
	}
}

async function verifyExperienceSection() {
	console.log('Verify Experience Section...');

	await driver.findElement(By.xpath("//section[@id='experienceSection']/h2/span")).click();

	await driver.findElement(By.id('experienceToggle')).getText().then(function (text) {
		assert.strictEqual(text, 'More');
	});

	await driver.findElement(By.xpath("//section[@id='experienceSection']/h2/span")).getText().then(function (text) {
		assert.strictEqual(text, 'Work Experience');
	});

	await driver.findElement(By.id('experienceToggle')).click();

	await driver.findElement(By.id('experienceToggle')).getText().then(function (text) {
		assert.strictEqual(text, 'Less');
	});

	for(let experienceIndex = 0; experienceIndex <= 3; experienceIndex++) {
		for(let titleIndex = 1; titleIndex <= 3; titleIndex++) {
			await driver.findElement(By.xpath("//div[@id='experience" + experienceIndex + "']/div/div[" + titleIndex + "]"));
		}

		await driver.findElement(By.xpath("//div[@id='experience" + experienceIndex + "']/div[2]/div/div/p"));
	}
}


async function verifySkillsSection() {
	console.log('Verify Skills Section...');

	await driver.findElement(By.xpath("//section[@id='skillsSection']/h2/span")).click();

	await driver.findElement(By.xpath("//section[@id='skillsSection']/h2/span")).getText().then(function (text) {
		assert.strictEqual(text, 'Skills');
	});

	await driver.findElement(By.xpath("//section[@id='skillsSection']/p")).getText().then(function (text) {
		assert.notStrictEqual(text, '');
	});

	for(let i = 0; i < 4; i++) {
		await driver.findElement(By.xpath("//div[@id='skillName" + i + "']/div/img"));

		await driver.findElement(By.xpath("//div[@id='skillName" + i + "']/div/div/p")).getText().then(function (text) {
			assert.notStrictEqual(text, '');
		});

		await driver.findElement(By.xpath("//div[@id='skillValue" + i + "']")).getText().then(function (text) {
			assert.notStrictEqual(text, '');
		});
	}

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
