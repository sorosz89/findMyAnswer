const BackGround = require('./config/background');
const driverSetup = new BackGround();
global.driver = driverSetup.init();

const Operations = require('./operations');
const Login = require('./ui/po/login')
let frame = new Operations();
let login = new Login();

frame.openContact('orosz.sanyika');
login.logIn('testUser')

