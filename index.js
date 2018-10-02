const BackGround = require('./config/background');
const driverSetup = new BackGround();
let driver = driverSetup.init();

const Operations = require('./operations');
const Login = require('./ui/po/login')
let frame = new Operations(driver);
let login = new Login(driver);

frame.openContact('orosz.sanyika');
login.logIn('testUser')
