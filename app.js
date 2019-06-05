const Koa = require('koa');
const InitManager = require('./core/init');
const bodyParser = require('koa-bodyparser')
const catchError = require('./middlewares/exception') 
const app = new Koa();

app.use(catchError)
app.use(bodyParser())
InitManager.InitCore(app);
app.listen(8080);