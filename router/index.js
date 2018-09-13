let Router = require("koa-router");
let { hello, main } = require("../controllers/demo");
let { login } = require("../controllers/login");

const router = new Router();

router.get("/hello/:name", hello);
router.get("/main", main);
router.post("/user/login", login);

module.exports = {
  router() {
    return router.routes();
  },
  allowedMethods() {
    return router.allowedMethods();
  }
};
