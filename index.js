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

    //await operations.openContact('orosz.sanyika')
    await operations.openContact('laszlo.racz.7334')
    // await operations.openContact('levente.varga.102')
    //await operations.openContact('orosz.sanyika')
    await login.enterCredentials('testUser')
    await driver.sleep(2000);


    //await messenger.sendLike()
    //await messenger.sendMessage("Hi! I am Sandor's chatbot! How its going? :)");
    // await messenger.clickSendButton();

    // await messenger.sendMessage("Listen to this song!");
    //await messenger.clickSendButton();

    // await messenger.sendMessage("https://www.youtube.com/watch?v=mpMg1upld0w");
    // await messenger.clickSendButton();

    // await driver.quit();

    await messenger.readIncoming()


};

finder();


process.on('unhandledRejection', () => {});
process.on('rejectionHandled', (e) => console.log(e));