import koa from 'koa';

import koaCompress from 'koa-compress';
import bodyParser from 'koa-bodyparser';
import router from './router/router';

const app = koa();

app.use(koaCompress());
app.use(bodyParser());

const runtimeConfig = {};

if (process.argv.length > 2) {
  const argvs = process.argv.slice(2);
  runtimeConfig.staticPath = process.argv;
  runtimeConfig.staticPath = '';
}

router(app, runtimeConfig);

const port = 3100;
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }

  console.log('listening on port %s', port);
});
