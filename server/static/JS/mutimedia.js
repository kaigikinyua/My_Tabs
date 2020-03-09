baseUrl="http://localhost:4000"

currentPlaylist=""
currentMedia={time:0}



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


function playSong(){
    var song=document.getElementById('curr_song')
    song.currentTime=currentMedia.time
    song.play()
    var play=document.getElementById('play_audio')
    play.classList.add('hidden')
    var pause=document.getElementById('pause_audio')
    pause.classList.remove('hidden')
}
function pauseSong(){
    var song=document.getElementById('curr_song')
    currentMedia.time=song.currentTime
    song.pause()
    var play=document.getElementById('play_audio')
    play.classList.remove('hidden')
    var pause=document.getElementById('pause_audio')
    pause.classList.add('hidden')
}
function volumeUp(){
    var song=document.getElementById('curr_song')
    song.volume+=0.1
}
function volumeDown(){
    var song=document.getElementById('curr_song')
    song.volume-=0.1
}


function updateCurrentMediaTime(){

}

/* module 2
function play(){}
function pause(){}
function next(){}
*/

/*module
function loadVideo(videoURL){}
function loadAudio(audioUrl){}
*/

/* module
function getVidoPlaylist(playListTitle){}
function getAudioPlaylist(playListTitle){}
*/

/*
    function volumeUp(){}
    var vid = document.getElementById("myVideo");
    vid.volume = 0.2;
    function volumeDown(){}
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