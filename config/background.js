require('chromedriver');
const webdriver = require("selenium-webdriver");
const chromeOptions = require("./webdriver");
let chromeCapabilities = webdriver.Capabilities.chrome()

class BackGround {

    init() {
        chromeCapabilities.set('chromeOptions', chromeOptions.arguments);
        let driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();
        global.By = webdriver.By;
        return driver;
    }
}
module.exports = BackGround