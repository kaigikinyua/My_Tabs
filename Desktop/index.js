const {app,BrowserWindow}=require('electron');
const path=require('path');
const url=require('url');

let win;

function createWindow(){
    win=new BrowserWindow({width:900,height:650})
    win.loadURL(url.format({
     pathname:path.join(__dirname,"/static/html/index.html"),
     protocol:'file',
     slashes:true   
    }))

    //open dev tools
   // win.webContents.openDevTools()

    win.on('closed',()=>{
        win==null;

    })

}
app.on('ready',createWindow)

app.on('window-all-closed',()=>{
    if(process.platform!='darwin'){
        app.quit()
    }
})

app.on('activate',()=>{
    if(win==null){
        createWindow()
    }
})