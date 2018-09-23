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
	console.log('\n------------\n');
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
	console.log('Verify Awards Section...');

	await driver.findElement(By.xpath("//section[@id='awardsSection']/h2/span")).click();

	await driver.findElement(By.xpath("//section[@id='awardsSection']/h2/span")).getText().then(function (text) {
		assert.strictEqual(text, 'Awards');
	});

	await driver.findElement(By.xpath("//section[@id='awardsSection']/p")).getText().then(function (text) {
		assert.notStrictEqual(text, '');
	});

	for(let i = 0; i < 8; i++) {
		await driver.findElement(By.xpath("//div[@id='award" + i + "']/img"));

		await driver.findElement(By.xpath("//div[@id='award" + i + "']/div/p")).getText().then(function (text) {
			assert.notStrictEqual(text, '');
		});
	}
}


async function verifyCoursesSection() {
	console.log('Verify Courses Section...');

	await driver.findElement(By.xpath("//section[@id='coursesSection']/h2/span")).click();

	await driver.findElement(By.xpath("//section[@id='coursesSection']/h2/span")).getText().then(function (text) {
		assert.strictEqual(text, 'Major Courses');
	});

	await driver.findElement(By.xpath("//section[@id='coursesSection']/p")).getText().then(function (text) {
		assert.notStrictEqual(text, '');
	});

	for(let i = 0; i < 15; i++) {
		await driver.findElement(By.xpath("//div[@id='course" + i + "']/img"));

		await driver.findElement(By.xpath("//div[@id='course" + i + "']/div/p")).getText().then(function (text) {
			assert.notStrictEqual(text, '');
		});
	}
}


async function verifyContactsSection() {
	console.log('Verify Contacts Section...');

	await driver.findElement(By.xpath("//section[@id='followMeSection']/h2/span")).click();

	await driver.findElement(By.xpath("//section[@id='followMeSection']/h2/span")).getText().then(function (text) {
		assert.strictEqual(text, 'Contact Me');
	});

	await driver.findElement(By.xpath("//section[@id='followMeSection']/p")).getText().then(function (text) {
		assert.notStrictEqual(text, '');
	});

	for(let div = 1; div <= 2; div++) {
		for(let icon = 1; icon <= 3; icon++) {
			await driver.findElement(By.xpath("//div[@id='iconsContainer']/div[" + div + "]/a[" + icon + "]/img"));
		}
	}
}

async function verifyCopyrightSection() {
	console.log('Verify Copyrights Section...');
	
	await driver.findElement(By.xpath("//footer/p")).click();
	await driver.findElement(By.xpath("//footer/p")).getText().then(function (text) {
		assert.strictEqual(text, '© 2018 by Bao Nguyen. All rights reserved.');
	});
}
