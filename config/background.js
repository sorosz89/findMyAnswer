require('chromedriver');
const webdriver = require("selenium-webdriver");

class BackGround {
    constructor() {

    }

    init() {
        let driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        return global.driver = driver;
    }

}
module.exports = BackGround