import Files from './utils/Files.js'
const dialog=require('electron').remote.dialog
/*todos
1.add file formats to prevent user from selecting .txt file as a movie

*/


//dom

const addMovie=document.getElementById('addFile');
const addPlayList=document.getElementById("addPlayList");

//adding movie
addMovie.addEventListener('click',(e)=>{
    dialog.showOpenDialog()
    .then((result)=>{
        var files=new Files()
        files.addMovie(result.filePaths)
        fetchMovies()
    })
});
addPlayList.addEventListener('click',(e)=>{
    dialog.showOpenDialog({properties:['openDirectory']})
    .then(result=>{
        console.log(result.filePaths)
        var files=new Files()
        files.addPlayList(result.filePaths)
    })
})



//fetching movies and adding them to the dom
function fetchMovies(){
    Files.fetchMovies((data)=>{
        var movies=JSON.parse(data).movies
        addMovies(movies)
    })
}
function addMovies(movies){
    var moviesTemplate=document.getElementById('movies')
    movies.forEach(movie=>{
        var video=document.createElement("div")
        video.classList.add("video")

        var m=document.createElement('video')
        m.classList="videoList"
        m.src=movie.path
        m.controls=true
        var v_title=document.createElement("h3")
        v_title.innerHTML=movie.title 

        video.appendChild(m)
        video.appendChild(v_title)
        moviesTemplate.appendChild(video)
    })
}


fetchMovies()

