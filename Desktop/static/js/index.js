const Files=require('./utils/Files')
const dialog=require('electron').dialog
//dom

const addFile=document.getElementById('addFile');

addFile.addEventListener('click',(e)=>{
    var filePath=dialog.showOpenDialog()
    Files.addFile(filePath)
    console.log("Hello world")
});



