import Router from 'koa-router'
import {route, HttpMethod} from 'koa-router-decorators';

@route('/users')
export default class UserController {

  router = Router;

  constructor() {
    return this.router().routes();
  }

  @route('/', HttpMethod.GET)
  static *index(next) {
    this.body = {users:[1,2], count:2};
  }

  @route('/', HttpMethod.POST)
  static *create(next) {
    this.body = 'success';
  }
}
