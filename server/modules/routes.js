module.exports=function(app){
    app.get('/',(req,res)=>{
        res.render('index')
    });
    app.get('/desktop',(req,res)=>{
        res.render('desktop')
    })
}