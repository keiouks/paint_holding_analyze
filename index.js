const koa = require('koa');
const router = require('@koa/router')();
const path = require('path');
const views = require('koa-views');
const app = new koa();
app.use(views(path.join(__dirname, "views/"), {extension: 'html'}));
async function index1(ctx) {
    await ctx.render("index1");
}
async function index2(ctx) {
    await ctx.render("index2");
}
async function index3(ctx) {
    await ctx.render("index3");
}
router.get("/1", index1);
router.get("/2", index2);
router.get("/3", index3);
app.use(router.routes());
const port = 3000;
app.listen(port, function(){
    console.log(`koa server running at port ${port}`);
});