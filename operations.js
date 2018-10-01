const urls = require('./data/urls.json');

class Operations {
   
    openContact(contact){
        let contactURL = `${urls.messenger}${contact}` 
        return driver.get(contactURL);
    }

    sleep(number){
        return driver.sleep(number)
    }

    close(){
        return driver.quit();
    }
}

module.exports = Operations;
