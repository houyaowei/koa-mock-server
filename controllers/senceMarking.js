const res = require("../mock/sceneMarking");

async function list(ctx, next) {
  console.log("aaa,", res.smList);
  ctx.response.body = res.smList;
}

module.exports = {
  list
};
