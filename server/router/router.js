import koaRouter from 'koa-router';
let router = koaRouter();
import koaStatic from 'koa-static';
import routes from './routes';

// function setCORSHeader(res) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
// }

export default function(app) {
    app.use(koaStatic(__dirname + '/../../dist'));

    dispatch(app, router);

    app
        .use(router.routes())
        .use(router.allowedMethods());
};

function dispatch(app, router) {
    routes.forEach(function(route) {
        router[route.method](route.url, require(route.file)[route.processor]);
    });
};
