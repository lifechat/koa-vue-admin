const koa = require('koa');
const app = new koa();



app.use((ctx:any)=>{
    ctx.body = 'Hello koa';
})

app.listen(3000,()=>{
    console.log('listen 3000 ok')
})