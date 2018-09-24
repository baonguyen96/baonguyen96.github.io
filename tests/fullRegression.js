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

	let tests = [
		loadPage,
		verifyHeader,
		verifyAboutSection,
		verifyExperienceSection,
		verifySkillsSection,
		verifyProjectsSection,
		verifyAwardsSection,
		verifyCoursesSection,
		verifyContactsSection,
		verifyCopyrightSection
	];

	for(const test of tests) {
		try {
			await test();
		}
		catch (e) {
			failTests.push({
				'name': test.name,
				'detail': util.getErrorMessageFromException(e)
			});
		}
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


async function loadPage() {
	console.log('Load Page...');

	await driver.get(environment);
	await driver.manage().window().maximize();
	await driver.sleep(1000);
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

	await driver.findElement(By.xpath("//section[@id='aboutSection']/h2/span")).click();

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

	for (let experienceIndex = 0; experienceIndex <= 3; experienceIndex++) {
		for (let titleIndex = 1; titleIndex <= 3; titleIndex++) {
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

	for (let i = 0; i < 4; i++) {
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
	console.log('Verify Projects Section...');

	await driver.findElement(By.xpath("//section[@id='projectsSection']/h2/span")).click();

	await driver.findElement(By.xpath("//section[@id='projectsSection']/h2/span")).getText().then(function (text) {
		assert.strictEqual(text, 'Some Cool Stuff');
	});

	await driver.findElement(By.xpath("//section[@id='projectsSection']/p")).getText().then(function (text) {
		assert.notStrictEqual(text, '');
	});

	await driver.findElement(By.id('projectsToggle')).getText().then(function (text) {
		assert.strictEqual(text, 'More');
	});

	await driver.findElement(By.id('projectsToggle')).click();

	await driver.findElement(By.id('projectsToggle')).getText().then(function (text) {
		assert.strictEqual(text, 'Less');
	});

	let projects = [
		'Dark Chroma',
		'File Transfer Application',
		'Self Service Agent For Test Data',
		'MIPS Converter',
		'Git Data',
		'Morse Mastering',
		'Tickets Reservation System',
		'Flights Map',
		'Schedulers',
		'Color Manipulation'
	];


	for (const projectName of projects) {
		let id = projectName.replace(/\s/g, '');

		await driver.findElement(By.xpath("//div[@id='" + id + "']/div/p")).getText().then(function (text) {
			assert.strictEqual(text, projectName);
		});

		await driver.findElement(By.xpath("//div[@id='" + id + "']/div/p")).click();
		await driver.findElement(By.xpath("//div[@id='" + id + "']/div/p")).getText().then(function (text) {
			assert.strictEqual(text, '');
		});

		if (projectName !== 'Git Data') {
			await driver.findElement(By.xpath("//div[@id='" + id + "']/div/div/p[2]")).getText().then(function (text) {
				assert.strictEqual(text, '➤ See Demo');
			});

			await driver.findElement(By.linkText('Demo')).click();

			await driver.wait(until.elementLocated(By.css("p.modal-title")))
						.then(e => driver.wait(until.elementIsVisible(e)));

			await driver.switchTo().activeElement();

			await driver.findElement(By.css("p.modal-title")).getText().then(function (text) {
				assert.strictEqual(text, projectName);
			});

			await driver.wait(until.elementLocated(By.css("img.demoImage.shadow")))
						.then(e => driver.wait(until.elementIsVisible(e)));

			await driver.findElement(By.css("button.btn.closeModalButton")).getText().then(function (text) {
				assert.strictEqual(text, 'Close');
			});

			await driver.findElement(By.css("button.btn.closeModalButton")).click();
		}

		// await driver.wait(until.elementLocated(By.id("//section[@id='projectsSection']")))
		// 			.then(e => driver.wait(until.elementIsVisible(e)));

		await driver.switchTo().activeElement();

		console.log('     Done with ' + projectName);
	}
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

	for (let i = 0; i < 8; i++) {
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

	for (let i = 0; i < 15; i++) {
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

	for (let div = 1; div <= 2; div++) {
		for (let icon = 1; icon <= 3; icon++) {
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
