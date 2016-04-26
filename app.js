import koa from 'koa';
import router from 'koa-router';
import koaStatic from 'koa-static';
import koaCompress from 'koa-compress';
import bodyParser from 'koa-bodyparser';

let app = koa();
// TODO Pliman 如何在引用的时候，就给变量做变形
let routes = router();

app.use(koaCompress());
app.use(koaStatic('/dist'));
app.use(bodyParser());

routes.get('/hello', function* () {
    this.body = 'hello';
});

app
    .use(routes.routes())
    .use(routes.allowedMethods());

let port = 3100;
app.listen(port, function(err) {
    console.log('listening on port %s', port);
});
