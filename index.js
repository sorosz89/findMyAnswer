const BackGround = require('./config/background');
const driverSetup = new BackGround();
const Operations = require('./operations');
const Login = require('./ui/po/login');

(async function start() {
    let driver = await driverSetup.init().catch((e) => console.log('Caught'));
    let operations = new Operations(driver);   
    let open = await operations.openContact('orosz.sanyika')
    return open;
})();