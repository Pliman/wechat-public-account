import koaRouter from 'koa-router';
const router = koaRouter();
import koaStatic from 'koa-static';
import routes from './routes';

// function setCORSHeader(res) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
// }

function dispatch() {
  routes.forEach(function(route) {
    router[route.method](route.url, require(route.file)[route.processor]);
  });
}

export default function(app) {
  app.use(koaStatic(__dirname + '/../../dist'));

  dispatch();

  app
    .use(router.routes())
    .use(router.allowedMethods());
}
