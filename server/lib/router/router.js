import Router from 'koa-router';
import koaStatic from 'koa-static';
import Hello from '../hello/hello-controller.js';

const rootRouter = new Router({
    prefix: '/api'
});

// function setCORSHeader(res) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
// }

export default (app, runtimeConfig) => {
    runtimeConfig.staticPath && app.use(koaStatic(__dirname + runtimeConfig.staticPath));

    rootRouter.use(new Hello());

    app
        .use(rootRouter.routes())
        .use(rootRouter.allowedMethods());
};
