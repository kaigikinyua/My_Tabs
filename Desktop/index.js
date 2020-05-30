const {app,BrowserWindow}=require('electron');
const path=require('path');
const url=require('url');
const dialog=require('electron').dialog

let win;

function createWindow(){
    win=new BrowserWindow(
        {
            width:900,
            height:650,
            webPreferences: {
                nodeIntegration: true
            }
        },
        
    )
    win.loadURL(url.format({
     pathname:path.join(__dirname,"/static/test.html"),
     protocol:'file',
     slashes:true   
    }))
    //open dev tools
   win.webContents.openDevTools()
    
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




/*
showing a dialog using electron.dialog
dialog.showMessageBox({
        title:'Test',
        type:'warning',
        message:'Excuse me boss you have a text message'
    });
    
openFileDialog
dialog.showOpenDialog()
*/