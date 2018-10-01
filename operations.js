const BackGround = require('./config/background');
const driverSetup = new BackGround();
const urls = require('./data/urls')

browser = driverSetup.init();

class Operations {
    openContact(contact){
        let contactURL = `${urls.messenger}${contact}` 
        return browser.get(contactURL);
    }
}

module.exports = Operations;
