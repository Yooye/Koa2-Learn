const Router = require('koa-router');
const requireDirectory = require('require-directory');

class InitManager{
    static InitCore(app){
        InitManager.app = app;
        InitManager.InitLoadRouters()
    }
    static InitLoadRouters(){
        console.log(process.cwd())
        let apiDir = `${process.cwd()}/app/api`
        requireDirectory(module, apiDir, {
            visit: loadRouterModule
        })

        function loadRouterModule(route) {
            if (route instanceof Router) {
                InitManager.app.use(route.routes())
            }
        }
    }
}

module.exports = InitManager