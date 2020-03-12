const db=require('./database.js')

module.exports=function(app){
    app.get('/',(req,res)=>{
        res.render('index')
    });
    app.get('/desktop',(req,res)=>{
        res.render('desktop')
    });
    app.get('/videos',(req,res)=>{
        db.get_all_videos((state,data)=>{
            if(state==true){
                var response=[{"state":"success"},{"videos":data}]
                res.json(response)
            }else{
                var response=[{"state":"error"},{"message":"Error while fetching videos"}]
                res.json(response)
            }
        });
    });
    app.get('/audio',(req,res)=>{
        db.get_all_audio((state,data)=>{
            if(state==true){
                var response=[{"state":"success"},{"audio":data}]
                res.json(response)
            }else{
                var response=[{"state":"error"},{"message":"Error while fetching audio"}]
                res.json(response)
            }
        });
    });
}