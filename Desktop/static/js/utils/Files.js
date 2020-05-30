
const fs = require('fs');
const path=require('path')
const configs=path.join(__dirname+"../../../Data")
export default class Files{
    constructor(){
        console.log("Files module")
    }
    addMovie(filePath){
        var storagePath=configs+"/Entertainment/Ent.json"
        fs.readFile(storagePath,'utf8',(err,data)=>{
            console.log("reading file"+storagePath)
            if (err)Files.errorMessage("Failed to read "+storagePath)
            else{
                var moviesJson=JSON.parse(data)
                var splitPath=filePath[0].split('/')
                var movieTitle=splitPath[splitPath.length-1]
                console.log(splitPath)
                moviesJson.movies.push({"title":movieTitle,"path":filePath[0]})
                Files.writeToFile(storagePath,JSON.stringify(moviesJson))
            }
        })
    }

    static fetchMovies(fn){
        var storagePath=configs+"/Entertainment/Ent.json"
        fs.readFile(storagePath,'utf8',(err,data)=>{
            if(err)Files.errorMessage("Could not readFile "+storagePath+" Files.fetchMovies")
            else{
                fn(data)
            }
        })
    }

    addDir(dirPath){}

    getFiles(){}
    removeFile(){}

    static readFile(filePath){
        var filedata=fs.createReadStream(filePath,'utf8')
        return filedata
    }
    static writeToFile(filePath,data){
        fs.writeFile(filePath,data,err=>{
            if(err) Files.errorMessage("Could not write to "+filePath)
        })
    }
    static appendToFile(filePath,data){
        var fileData=Files.readFile(filePath)
        fileData+=data
        Files.writeToFile(filePath,fileData)
    }

    static errorMessage(message){
        console.error(message)
    }
}

