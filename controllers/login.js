async function login(ctx, next) {
  // console.log("login method");
  ctx.response.body = `Hello, login method`;
}

module.exports = {
  login
};
