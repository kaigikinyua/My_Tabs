const fs = require('fs');

class Files{
    addFile(filePath){
        console.log("adding File"+filePath)
    }
    addDir(dirPath){}

    getFiles(){}
    removeFile(){}

    static readFile(filePath){
        var filedata=fs.createReadStream(filePath,'utf8')
        return filedata
    }
    static writeToFile(filePath,data){
        var file=fs.createWriteStream(filePath,'utf8')
        file.write(data)
    }
    static appendToFile(filePath,data){
        var fileData=Files.readFile(filePath)
        fileData+=data
        Files.writeToFile(filePath,fileData)
    }
}

export{
    Files
}