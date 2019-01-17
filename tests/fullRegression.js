const {By, until} = require('selenium-webdriver');
const Env = require('./utils/environments');
const Browser = require('./utils/browsers');
const util = require('./utils/utilities');
const driverFactory = require('./utils/driverFactory');
const assert = require('assert');
let Resolution = require('./utils/resolution');
let Configuration = require('./utils/configuration');



///////////////// configurations start /////////////////

let environment = Env.regression;
let browser = Browser.chrome;
let resolution = Resolution.fhd;
let isVerifyingUI = true;
let isVerifyingLinks = true;

/////////////////// configurations end /////////////////



if (process.argv.length === 3) {
	if (process.argv[2].toString().toLowerCase() === 'regression') {
		environment = Env.regression;
	}
	else {
		environment = Env.production;
	}
	browser = Browser.chrome;
	resolution = Resolution.fhd;
}

let configuration = new Configuration(environment, browser, 30 * 1000);
let driver = driverFactory.getDriverForBrowser(configuration);

(async function runRegressionTest() {
	let startDate = new Date();
	let isUiOk = true, areLinksOk = true;

	if(isVerifyingUI) {
		let tests = [
			verifyPageLoad,
			verifyHeader,
			verifyAboutSection,
			verifyExperienceSection,
			verifySkillsSection,
			verifyProjectsSection,
			verifyAwardsSection,
			verifyCoursesSection,
			verifyContactsSection,
			verifyCopyrightSection,
			verify404Page
		];

		console.log('>> VERIFY UI');
		for (const test of tests) {
			let testName = util.parseMethodName(test.name);

			try {
				console.log(testName + '...');
				await test();
			}
			catch (e) {
				isUiOk = false;
				console.log(`   - ${util.getErrorMessageFromException(e)}`);
			}
		}

		await driver.quit();
	}

	if(isVerifyingLinks) {
		console.log('\n>> VERIFY LINKS');
		areLinksOk = util.checkBrokenLinks(configuration.environment, ['linkedin.com']);
	}

	console.log(`\n>> Elapsed time: ${(new Date() - startDate) / 1000} seconds`);
	console.log(`>> Result: ${(isUiOk && areLinksOk) ? 'PASS' : 'FAIL'}`);

})();


async function verifyPageLoad() {
	await driver.get(configuration.environment);
	await driver.manage().window().setRect({x:0, y:0, width: resolution.w, height: resolution.h});
	await driver.sleep(1000);

	// if(resolution.w <= 767) {
	// 	await driver.executeScript('window.scrollTo(0,10000);');
	// 	await driver.findElement(By.id("upArrowNavigator")).click();
	// 	await driver.sleep(1000);
	// }
}

async function verifyHeader() {
	await driver.findElement(By.xpath("//header[@id='header']/img"));

	await driver.findElement(By.xpath("//h1")).getText().then(function (text) {
		assert.strictEqual(text, 'BAO NGUYEN');
	});
}

async function scrollIntoView(by) {
	let element = await driver.findElement(by);
	await driver.executeScript("arguments[0].scrollIntoView()", element);
	await driver.sleep(300);
	await element.click();
}

async function verifyAboutSection() {
	await scrollIntoView(By.xpath("//section[@id='aboutSection']/h2/span"));

	await driver.findElement(By.xpath("//section[@id='aboutSection']/h2/span")).getText().then(function (text) {
		assert.strictEqual(text, 'About Me');
	});

	for (let i = 1; i <= 3; i++) {
		await driver.findElement(By.xpath(`//section[@id='aboutSection']/p[${i}]`));
	}
}

async function verifyExperienceSection() {
	await driver.findElement(By.xpath("//section[@id='experienceSection']/h2/span")).click();

	await driver.findElement(By.id('experienceToggle')).getText().then(function (text) {
		assert.strictEqual(text, 'More');
	});

	await driver.findElement(By.xpath("//section[@id='experienceSection']/h2/span")).getText()
				.then(function (text) {
					assert.strictEqual(text, 'Work Experience');
				});

	await driver.findElement(By.id('experienceToggle')).click();

	await driver.findElement(By.id('experienceToggle')).getText().then(function (text) {
		assert.strictEqual(text, 'Less');
	});

	for (let experienceIndex = 0; experienceIndex <= 3; experienceIndex++) {
		for (let titleIndex = 1; titleIndex <= 3; titleIndex++) {
			await driver.findElement(By.xpath(`//div[@id='experience${experienceIndex}']/div/div[${titleIndex}]`));
		}

		await driver.findElement(By.xpath(`//div[@id='experience${experienceIndex}']/div[2]/div/div/p`)).getText()
					.then(function (text) {
						assert.notStrictEqual(text, '');
					});
	}
}


async function verifySkillsSection() {
	await driver.findElement(By.xpath("//section[@id='skillsSection']/h2/span")).click();

	await driver.findElement(By.xpath("//section[@id='skillsSection']/h2/span")).getText().then(function (text) {
		assert.strictEqual(text, 'Skills');
	});

	await driver.findElement(By.xpath("//section[@id='skillsSection']/p")).getText().then(function (text) {
		assert.notStrictEqual(text, '');
	});

	for (let i = 0; i < 4; i++) {
		await driver.findElement(By.xpath(`//div[@id='skillName${i}']/div/img`));

		await driver.findElement(By.xpath(`//div[@id='skillName${i}']/div/div/p`)).getText().then(function (text) {
			assert.notStrictEqual(text, '');
		});

		await driver.findElement(By.id(`skillValue${i}`)).getText().then(function (text) {
			assert.notStrictEqual(text, '');
		});
	}
}


async function verifyProjectsSection() {
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

		await driver.findElement(By.xpath(`//div[@id='${id}']/div/p`)).getText().then(function (text) {
			assert.strictEqual(text, projectName);
		});

		await driver.findElement(By.xpath(`//div[@id='${id}']/div/p`)).click();
		await driver.findElement(By.xpath(`//div[@id='${id}']/div/p`)).getText().then(function (text) {
			assert.strictEqual(text, '');
		});

		if (projectName !== 'Git Data') {
			if(resolution.w >= 767) {
				await driver.findElement(By.xpath(`//div[@id='${id}']/div/div/p[2]`)).getText().then(function (text) {
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

				await driver.sleep(1000);

				await driver.findElement(By.css("button.btn.closeModalButton")).click();

				await driver.switchTo().activeElement();

				await driver.findElement(By.css("button.btn.closeModalButton"))
							.then(e => driver.wait(until.elementIsNotVisible(e), configuration.timeout));

				await driver.sleep(1000);
			}
			else {
				await driver.findElement(By.xpath(`//div[@id='${id}']/div/div/p[2]`))
							.then(e => driver.wait(until.elementIsNotVisible(e), configuration.timeout));
			}
		}

		await driver.findElement(By.xpath("//section[@id='projectsSection']/h2/span"));
	}

	await driver.switchTo().activeElement();
}


async function verifyAwardsSection() {
	await driver.findElement(By.xpath("//section[@id='awardsSection']/h2/span")).click();

	await driver.findElement(By.xpath("//section[@id='awardsSection']/h2/span")).getText().then(function (text) {
		assert.strictEqual(text, 'Awards');
	});

	// await driver.findElement(By.xpath("//section[@id='awardsSection']/p")).getText().then(function (text) {
	// 	assert.notStrictEqual(text, '');
	// });

	for (let i = 0; i < 8; i++) {
		await driver.findElement(By.xpath(`//div[@id='award${i}']/img`));

		await driver.findElement(By.xpath(`//div[@id='award${i}']/div/p`)).getText().then(function (text) {
			assert.notStrictEqual(text, '');
		});
	}
}


async function verifyCoursesSection() {
	await driver.findElement(By.xpath("//section[@id='coursesSection']/h2/span")).click();

	await driver.findElement(By.xpath("//section[@id='coursesSection']/h2/span")).getText().then(function (text) {
		assert.strictEqual(text, 'Major Courses');
	});

	// await driver.findElement(By.xpath("//section[@id='coursesSection']/p")).getText().then(function (text) {
	// 	assert.notStrictEqual(text, '');
	// });

	for (let i = 0; i < 15; i++) {
		await driver.findElement(By.xpath(`//div[@id='course${i}']/img`));

		await driver.findElement(By.xpath(`//div[@id='course${i}']/div/p`)).getText().then(function (text) {
			assert.notStrictEqual(text, '');
		});
	}
}


async function verifyContactsSection() {
	await driver.findElement(By.xpath("//section[@id='followMeSection']/h2/span")).click();

	await driver.findElement(By.xpath("//section[@id='followMeSection']/h2/span")).getText().then(function (text) {
		assert.strictEqual(text, 'Contact Me');
	});

	await driver.findElement(By.xpath("//section[@id='followMeSection']/p")).getText().then(function (text) {
		assert.notStrictEqual(text, '');
	});

	for (let div = 1; div <= 2; div++) {
		for (let icon = 1; icon <= 3; icon++) {
			await driver.findElement(By.xpath(`//div[@id='iconsContainer']/div[${div}]/a[${icon}]/img`));
		}
	}
}

async function verifyCopyrightSection() {
	await driver.findElement(By.xpath("//footer/p")).click();
	await driver.findElement(By.xpath("//footer/p")).getText().then(function (text) {
		assert.ok(text.startsWith("© 2018"));
		assert.ok(text.endsWith("by Bao Nguyen. All rights reserved."));
	});
}


async function verify404Page() {
	if(environment === Env.production) {
		await driver.get(configuration.environment + "dskdsm");
	}
	else {
		await driver.get(configuration.environment + "404.html");
	}

	await driver.sleep(2000);
	await driver.findElement(By.xpath(`//div[@id='error-area']/img`));
	await driver.findElement(By.xpath(`//div[@id='error-area']/p`)).getText().then(function (text) {
		assert.strictEqual(text, "The requested page does not exist. Click here to go back to the home page.");
	});

	await driver.findElement(By.linkText("here")).click();

	await driver.getCurrentUrl().then(function (url) {
		assert.strictEqual(url, configuration.environment);
	});
}