const BackGround = require('./config/background');
const driverSetup = new BackGround();
const Operations = require('./operations');
const Login = require('./ui/po/login');

async function finder() {
    let driver = await driverSetup.init().catch((e) => console.log('Caught'));
    let operations = new Operations(driver);
    let login = new Login(driver);
    await operations.openContact('orosz.sanyika')
    await driver.sleep(1000);
    console.log('waiting')
    await driver.sleep(1000);
    return await login.enterCredentials('testUser')

};


finder();

process.on('unhandledRejection', () => {});
process.on('rejectionHandled', () => {});
