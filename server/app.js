import Koa from 'koa';

import koaCompress from 'koa-compress';
import bodyParser from 'koa-bodyparser';
import nodeCommandParams from 'node-command-params';
import router from './lib/router/router';

const app = new Koa();

app.use(koaCompress());
app.use(bodyParser());

router(app, nodeCommandParams());

const port = 3100;
app.listen(port, function(err) {
    if (err) {
        console.log(err);
    }

    console.log('listening on port %s', port);
});
