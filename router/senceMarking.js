let Router = require("koa-router");
let {list} = require("../controllers/senceMarking");

// exports = loginRouter;

function sceneInterceptor(app) {
  const smRouter = new Router();
  smRouter.get("/client/scene/list ", (ctx, next) => {
    console.log("/client/scene/list");
  });
  app.use(smRouter.routes());
  app.use(smRouter.allowedMethods());
}

module.exports = sceneInterceptor;
