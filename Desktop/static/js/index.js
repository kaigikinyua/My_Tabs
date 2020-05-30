import Files from './utils/Files.js'
const dialog=require('electron').remote.dialog
//dom

const addFile=document.getElementById('addFile');

addFile.addEventListener('click',(e)=>{
    dialog.showOpenDialog()
    .then((result)=>{
        var files=new Files()
        console.log(result.filePaths)
        files.addFile(result.filePaths)
    })
    console.log("Hello world")
});

function fetchMovies(){
    Files.fetchMovies((data)=>{
        var movies=JSON.parse(data).movies
        addMovies(movies)
    })
}
function addMovies(movies){
    var moviesTemplate=document.getElementById('movies')
    movies.forEach(movie=>{
        var m=document.createElement('video')
        m.classList="videoList"
        m.src=movie.path
        m.controls=true
        moviesTemplate.appendChild(m)
    })
}


fetchMovies()

