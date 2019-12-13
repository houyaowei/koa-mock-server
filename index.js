// require("./app/app")

var koa = require("koa");
var app = new koa();

app.use(async function m1 (ctx, next) {
  console.log('m1')
  await next()
  console.log('m1 end')
 })
 app.use(async function m2 (ctx, next) {
  console.log('m2')
  await next()
  console.log('m2 end')
 })
 app.use(async function m3 (ctx) {
  console.log('m3')
  ctx.body = 'hello'
 })
 app.listen(8000)

 /**
  * 
  * m1
    m2
    m3
    m2 end
    m1 end
  */