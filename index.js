const BackGround = require('./config/background');
const driverSetup = new BackGround();
const Operations = require('./config/operations');
const Login = require('./ui/po/login');
const Messenger = require('./ui/po/messenger');

async function finder() {
    let driver = await driverSetup.init().catch((e) => console.log('Caught'));
    let operations = new Operations(driver);
    let login = new Login(driver);
    let messenger = new Messenger(driver);

    await operations.openContact('orosz.sanyika')
    await driver.sleep(500);
    await login.enterCredentials('testUser')
    await driver.sleep(6000);
    await messenger.sendMessage("Hi! I am Sandor's chatbot! How its going? :)");
    await messenger.pressEnter();
    return driver.sleep(500);

};

finder();

process.on('unhandledRejection', () => {});
process.on('rejectionHandled', (e) => console.log(e));
