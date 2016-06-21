import {route, HttpMethod} from 'koa-router-decorators';

@route('/hello')
export default class UserController {

    constructor() {
        return this.router.routes();
    }

    @route('/', HttpMethod.GET)
    static listUser(ctx) {
        ctx.body = 'hello';
    }
}
