const urls = require('./data/urls.json');

class Operations {
    constructor(driver) {
        this.driver = driver;
    }

    openContact(contact) {
        let contactURL = `${urls.messenger}${contact}`
        console.log(`Opening ${contactURL}`);
        return this.driver.get(contactURL);
    }

    sleep(number) {
        return this.driver.sleep(number)
    }

    close() {
        return this.driver.quit();
    }
}

module.exports = Operations;