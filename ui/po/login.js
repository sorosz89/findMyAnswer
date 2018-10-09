const elements = require('../selectors/login');
const users = require('../../data/users');

class Login {
    constructor(driver) {
        this.driver = driver;
        this.USERINPUT = this.driver.findElement(By.css(elements.userNameInput));
        this.PWINPUT = this.driver.findElement(By.css(elements.passwordInput));
        this.confirmButton = this.driver.findElement(By.css(elements.confirmButton));
    }

    async isLoaded() {
        return await this.PWINPUT.isDisplayed();
    }

    async waitForLoginPage() {
        await driver.wait
        return await this.isLoaded();
    }

    async sendUserName(username) {
        console.log('sendUserName: ', username);
        return await this.USERINPUT.sendKeys(username);
    }

    async sendPassword(password) {
        return await PWINPUT.sendKeys(password)
    }

    getUser(id) {
        console.log("users: ", users);
        let profile = users[id];
        console.log('profile: ', profile);
        let client = {
            username: profile.username,
            password: profile.password
        }
        console.log('client: ', client)
        return client
    }

    async confirm() {
        return await confirmButton.click();
    }

    async enterCredentials(id) {
        console.log('enterCredentials:', id);
        let client = this.getUser(id);
        await this.sendUserName(client.username)
        await this.sendPassword(client.password)
        return await this.confirm()
    }
}

module.exports = Login