import koa from 'koa';

import koaCompress from 'koa-compress';
import bodyParser from 'koa-bodyparser';
import router from './server/router/router';

let app = koa();

app.use(koaCompress());
app.use(bodyParser());

router(app);

let port = 3100;
app.listen(port, function(err) {
    console.log('listening on port %s', port);
});
