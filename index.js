const Operations = require('./operations');
const Login = require('./ui/po/login')
let operations = new Operations();
let login = new Login();

operations.openContact('orosz.sanyika');
login.logIn('testUser')
