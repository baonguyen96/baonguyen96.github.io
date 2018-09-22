let webdriver = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
let path = require('chromedriver').path;

let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

let driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();