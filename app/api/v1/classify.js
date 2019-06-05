const Router = require('koa-router');
const router = new Router()
const {HttpException} = require('../../../core/http-exception')

router.get('/v1/detail', (ctx, next) => {
    // ctx.body = '文章分类管理接口'
    let id = ctx.request.query.id
    if(isNaN(id)){
        let error = new HttpException('文章ID必须为数字',10001,404)
        throw error;
    }
})
module.exports = router;