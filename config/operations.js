const urls = require('../data/urls.json');

class Operations {
    constructor(driver) {
        this.driver = driver;
    }

    async openContact(contact) {
        let contactURL = `${urls.messenger}${contact}`
        console.log(`Opening ${contactURL}`);
        return await this.driver.get(contactURL);
    }

    async sleep(number) {
        await this.driver.sleep(number)
    }

    async close() {
        await this.driver.quit();
    }
}

module.exports = Operations;