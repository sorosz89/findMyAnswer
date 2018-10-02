require('chromedriver');
const webdriver = require("selenium-webdriver");

class BackGround {

    init() {
        let driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        global.By = webdriver.By;
        return driver;
    }

}
module.exports = BackGround