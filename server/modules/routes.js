module.exports=function(app){
    app.get('/',(req,res)=>{
        res.render('index')
    });
    app.get('/desktop',(req,res)=>{
        res.render('desktop')
    });
    app.get('/videos',(req,res)=>{
        var videos=[
            {"state":"success"},
            {"videos":[
                {"title":"1994","path":"/home/antony/Music/Zone/(24) Alec Benjamin - 1994 [Official Lyric Video] - YouTube.mkv"},
                {"title":"Vacation","path":"/home/antony/Music/Zone/(24) Damon Empero ft. Veronica - Vacation [ King Step Release ] _ Tropical House _ _ No Copyright _ - YouTube.mkv"},
                {"title":"Last Day","path":"/home/antony/Music/Zone/(15) Nickelback - If Today Was Your Last Day [OFFICIAL VIDEO] - YouTube.mkv"}
                ]
            }
        ]
        res.json(videos)
    });
    app.get('/audio',(req,res)=>{
        var audio=[
            {"state":"success"},
            {"videos":[
                {"title":"1994","path":"/home/antony/Music/Zone/(24) Alec Benjamin - 1994 [Official Lyric Video] - YouTube.mkv"},
                {"title":"Vacation","path":"/home/antony/Music/Zone/(24) Damon Empero ft. Veronica - Vacation [ King Step Release ] _ Tropical House _ _ No Copyright _ - YouTube.mkv"},
                {"title":"Last Day","path":"/home/antony/Music/Zone/(15) Nickelback - If Today Was Your Last Day [OFFICIAL VIDEO] - YouTube.mkv"}
                ]
            }
        ]
        res.json(audio)
    })

}