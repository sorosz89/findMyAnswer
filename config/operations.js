const urls = require('../data/urls.json');

class Operations {
    constructor(driver) {
        this.driver = driver;
    }

    async openContact(contact, isMobile) {
        let base = isMobile ? urls.mobileMessenger : urls.messenger;
        let contactURL = `${base}${contact}`
        console.log(`Opening ${contactURL}`);
        return await this.driver.get(contactURL);
    }

    async sleep(number) {
        return await this.driver.sleep(number)
    }

    async close() {
        return await this.driver.quit();
    }
}

module.exports = Operations;