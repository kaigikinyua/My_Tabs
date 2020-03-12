baseUrl="http://localhost:4000"

currentPlaylist=""
currentMedia={media:"",volume:0.5,time:0,title:"","src":"","type":""}



var videos=[]
var audio=[]

getVideos();getAudio();
function getVideos(){
    var url=baseUrl+"/videos"
    ajax(url,(state,data)=>{
        if(state==true){
            videos=data[1].videos
        }else{
            error("Error while loading videos "+data)
        }
    });
}

function getAudio(){
    var url=baseUrl+"/audio"
    ajax(url,(state,data)=>{
        if(state==true){
            var audioList=data[1].audio
            populateAudio(audioList)
        }else{
            error("Error while loading audio "+data)
        }
    });
}
//DOM methods to populate audio playlist
function populateAudio(audioList){
    var mList=document.getElementById('musiclist')
    audioList.forEach(element => {
        var tile=document.createElement("li")
        var icon=document.createElement("i")
        icon.classList.add("fa")
        icon.classList.add("fa-music")
        var title=document.createElement("small")
        title.innerHTML=element.Title
        title.data="/media/"+element.Path
        icon.data="/media/"+element.Path
        tile.appendChild(icon)
        tile.appendChild(title)
        tile.addEventListener("click",(e)=>{
            console.log(e.target.data)
            loadNewCurrMedia("audio",e.target.data)
            loadAudio(e.target.data)
        })
        mList.appendChild(tile)
    });
}
function loadAudio(audioUrl){
    var song=document.getElementById('curr_song')
    song.src=audioUrl
    playSong()
}

function playSong(){
    var song=document.getElementById('curr_song')
    if(currentMedia.media!=song){
        try {
            currentMedia.media.pause()
        } catch (error) {
            
        }
        currentMedia.media=song
        currentMedia.time=0
    }
    console.log("Playing "+song.src)
    song.currentTime=currentMedia.time
    currentMedia.media.play()
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
    if(song.volume<1){
        song.volume+=0.1
    }
}
function volumeDown(){
    var song=document.getElementById('curr_song')
    if(song.volume>0.1){
        song.volume-=0.1
    }
}


//current media functions



function playVideo(){
    var video=document.getElementById('curr_video')
    if(currentMedia.media!=video){
        try {
            pauseSong()
            currentMedia.media.pause()
            currentMedia.time=0
        } catch (error) {
            
        }
        currentMedia.media=video
        currentMedia.time=0
    }
    currentMedia.media=document.getElementById('video_min')
    currentMedia.media.src=video.src
    currentMedia.media.volume=0
    currentMedia.media.play()
    video.play()

    //update controls
    var video_play=document.getElementById('video_play')
    var video_pause=document.getElementById('video_pause')
    video_play.classList.add('hidden')
    video_pause.classList.remove('hidden')
}

function pauseVideo(){
    var video=document.getElementById('curr_video')
    currentMedia.time=video.currentTime
    video.pause()
    currentMedia.media.pause()
    pauseCurr()
    var video_play=document.getElementById('video_play')
    var video_pause=document.getElementById('video_pause')
    video_play.classList.remove('hidden')
    video_pause.classList.add('hidden')

}
//curr media functions

function loadNewCurrMedia(type,source){
    //if there was any prevous media eject it
    var min_player
    if(type=="video"){
        min_player=document.getElementById("video_min")
    } else{
        min_player=document.getElementById("curr_audio_min")
    }
    min_player.src=source
}

function playCurr(){
    try{
        currentMedia.media.play()
    }catch{

    }
}
function pauseCurr(){
    try{
    currentMedia.media.pause()
    }catch{

    }
}
function nextMedia(){}

function updateCurrentMediaTime(){

}

/* module 2
function next(){}
*/

/*module
function loadVideo(videoURL){}

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