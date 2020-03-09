baseUrl="http://localhost:4000"

currentPlaylist=""
currentMedia=""

var videos=[]
var audio=[]

getVideos();getAudio();
function getVideos(){
    var url=baseUrl+"/videos"
    ajax(url,(state,data)=>{
        if(state==true){
            videos=data[1].videos
            console.log(videos)
        }else{
            error("Error while loading videos "+data)
        }
    });
}

function getAudio(){
    var url=baseUrl+"/audio"
    ajax(url,(state,data)=>{
        if(state==true){
            videos=data.audio
        }else{
            error("Error while loading audio "+data)
        }
    });
}


/* module
function getVidoPlaylist(playListTitle){}
function getAudioPlaylist(playListTitle){}
*/
/*module
function loadVideo(videoURL){}
function loadAudio(audioUrl){}
*/
/* module 2
function play(){}
function pause(){}
function next(){}
*/


function ajax(url,fn){
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        if(data[0].state=="success"){
            fn(true,data);
        }else{
            fn(false,null);
        }
    });
}

function error(message){
    console.log(message)
}