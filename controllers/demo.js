async function hello(ctx,next) {
  console.log(ctx.params);

  let param = ctx.params.name;

  ctx.response.body= `Hello, ${param}`;
}
async function main(ctx,next){
  console.log("main")
}
module.exports = {
  hello,
  main
};