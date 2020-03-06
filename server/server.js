const express=require('express');
const routes=require('./modules/routes');
const app=express()

app.set('view engine','ejs');
app.use('/static',express.static('./static'));

routes(app);

app.listen(4000,()=>{
    console.log("MyApp server running on port 4000")
})