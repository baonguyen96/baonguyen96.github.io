'use strict';

module.exports = {
    getDriverForBrowser: function (configuration) {
        let driver = null;
        const webDriver = require('selenium-webdriver');
        const Browser = require('./browsers');

        if (configuration.browser === Browser.chrome) {
            let chrome = require('selenium-webdriver/chrome');
            let path = require('chromedriver').path;
            let service = new chrome.ServiceBuilder(path).build();
            // chrome.setDefaultService(service);
            driver = new webDriver.Builder()
                .withCapabilities(webDriver.Capabilities.chrome())
                .build();
        } else if (configuration.browser === Browser.firefox) {
            let firefox = require('selenium-webdriver/firefox');
            let path = require('geckodriver').path;
            let service = new firefox.ServiceBuilder(path).build();
            driver = new webDriver.Builder()
                .withCapabilities(webDriver.Capabilities.firefox())
                .build();
        } else if (configuration.browser === Browser.edge) {
            let edge = require('selenium-webdriver/edge');
            let path = require('edgedriver').path;
            let service = new edge.ServiceBuilder(path).build();
            edge.setDefaultService(service);
            driver = new webDriver.Builder()
                .withCapabilities(webDriver.Capabilities.edge())
                .build();
        }

        return driver;
    }
};