import Router from 'koa-router'
import {route, HttpMethod} from 'koa-router-decorators';

@route('/auth')
export default class AuthController {

  router = Router;

  constructor() {
    return this.router().routes();
  }

  @route('/facebook', HttpMethod.GET)
  static *facebookAuth(next) {
    this.body = {
      success: true
    };
  }

  @route('/logout', HttpMethod.GET)
  static *logout(next) {
    this.body = {
      success: true
    };
  }
}
