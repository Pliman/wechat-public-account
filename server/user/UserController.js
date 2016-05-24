import Router from 'koa-router'
import {route, HttpMethod} from 'koa-router-decorators';

@route('/users')
export default class UserController {

  router = Router;

  constructor() {
    return this.router().routes();
  }

  @route('/', HttpMethod.GET, isAdmin)
  static *index(next) {
    this.body = {users:[{name:'tom',age:3},{name:'jerry',age:2}], count:2};
  }

  @route('/', HttpMethod.POST)
  static *create(next) {
    this.body = 'success';
  }
}

function *isAdmin(next) {
  yield next;
}
