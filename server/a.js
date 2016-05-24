import koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import UserController from './u';
import AuthController from './au';

let rootRouter = new Router({
  prefix: '/api'
});

let app = koa();
app.use(bodyParser());
app.use(new AuthController());
rootRouter.use('/', new UserController());
app
  .use(rootRouter.routes())
  .use(rootRouter.allowedMethods());
app.listen(3100, function(err) {
  if (err) {
    console.log(err);
  }

  console.log('listening on port %s', 3100);
});
