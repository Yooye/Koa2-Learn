var Router = require('koa-router');
var router = new Router()
router.post('/v1/:id/list', (ctx, next) => {
    console.log(ctx.params)
    ctx.body = {
        'useParams': ctx.params,
        'useGet':ctx.request.query,
        'usePost': ctx.request.body,
        'useHeader':ctx.request.header
    }
})
module.exports = router;