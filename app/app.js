let koa = require("koa");
let http = require("http");
let bodyParser = require("koa-bodyparser");
let config = require("../config");
let { router, allowedMethods} = require("../router");

let app = new koa();
app.use(router());
app.use(allowedMethods());

const server = http.createServer(app.callback()).listen(config.server.port,function(){
  console.log();
  console.log("%s listening at port %d", config.app.name, config.server.port);
});