const {HttpException} = require('../core/http-exception')
const catchError =async (ctx,next)=>{
    try {
        await next()
    } catch (error) {
        //这里后续将根据业务需求新增各种异常处理逻辑
        if(error instanceof HttpException){
            ctx.body = {
                msg:error.msg,
                error_code:error.errorCode,
                request_url: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code;
        }
    }
}

module.exports = catchError