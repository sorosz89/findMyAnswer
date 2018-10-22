const BackGround = require('./config/background');
const driverSetup = new BackGround();
const Operations = require('./config/operations');
const Login = require('./ui/po/login');
const Messenger = require('./ui/po/messenger');
const FindMyAnswer = require('./qa/findMyAnswer');
const finder = new FindMyAnswer();
const contacts = require('./data/contacts')
let po;
let read = '';

async function setEnvironment() {
    const driver = await driverSetup.init().catch(e => console.log("Environment Setup"));
    return await setPo(driver);
}

async function setPo(driver) {
    const operations = new Operations(driver);
    const login = new Login(driver);
    const messenger = new Messenger(driver);
    return {
        operations: operations,
        login: login,
        messenger: messenger
    }
}

function sonarLogger() {
    let d = new Date();    
    console.log(`${d.toLocaleTimeString()}: Listening...`)
}

async function sonar() {
    let message = await po.messenger.readIncoming();
    if (message != read) {
        const listening = setInterval(sonarLogger, timing.sonarLogger);
        console.log('New message detected: ', message);
        read = message;
        let answer = finder.getAnswer(message)

        await po.messenger.sendMessage(answer);
        await po.messenger.clickSendButton();
    }
    console.log('Waiting for new messages...')
};

(async function run() {
    let partnerID = process.argv[2]
    po = await setEnvironment();
    const timer = setInterval(sonar, timing.defaultInterval);
    await po.operations.openContact(contacts[partnerID]);
    await po.login.logIn(contacts.sonar);
})()

process.on('unhandledRejection', (e) => {});
process.on('rejectionHandled', (e) => console.log(e));