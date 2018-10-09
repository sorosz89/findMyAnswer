require('chromedriver');
const webdriver = require("selenium-webdriver");

class BackGround {

    init() {
        let chromeCapabilities = webdriver.Capabilities.chrome()
        let chromeOptions = {
            'args': ['--disable-infobars', "--disable-notifications"]
        };

        chromeCapabilities.set('chromeOptions', chromeOptions);

        let driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();

        global.By = webdriver.By;
        return driver;
    }
}
module.exports = BackGround