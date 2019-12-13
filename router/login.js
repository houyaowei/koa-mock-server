let Router = require("koa-router");
let { login } = require("../controllers/login");

// exports = loginRouter;

function loginInterceptor(app) {
  const loginRouter = new Router();
  loginRouter.post("/user/login", login);
  loginRouter.get("/user/test", (ctx, next) => {
    console.log("user/test");
  });
  
  //Add the given middleware function to this application
  app.use(loginRouter.routes());
  app.use(loginRouter.allowedMethods());
}

module.exports = loginInterceptor;
