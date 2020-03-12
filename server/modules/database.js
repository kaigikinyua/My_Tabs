const sqlite3=require('sqlite3').verbose()
const path=require('path')
const db=new sqlite3.Database(path.join(__dirname,'/Database/My_Tabs.db'));
module.exports={
    get_todos:()=>{

    },
    get_sub_todos:(todo_id)=>{

    },
    add_todo:(todo_title)=>{

    },
    add_sub_todo:(todo_id,sub_todo)=>{

    },
    mark_done(todo_id){

    },
    mark_done_sub_todo:(todo_id,sub_todo)=>{

    },
    delete_todo:(todo_id)=>{

    },
    delete_sub_todo:(todo_id,sub_todo)=>{

    },
    get_all_videos:(fn)=>{
        get_from_db("SELECT * FROM media where type=?",['video'],(state,data)=>{
            if(state==true){
                fn(true,data)
            }else{
                fn(false,data)
            }
        })
    },
    get_all_audio:(fn)=>{
        get_from_db("SELECT * FROM media where type=?",['audio'],(state,data)=>{
            if(state==true){
                fn(true,data)
            }else{
                fn(false,data)
            }
        });
    },
    get_fave_videos:(fn)=>{
        get_from_db("SELECT * FROM media where type=? and favourite=?",['video','yes'],(state,data)=>{
            if(state==true){
                fn(true,data)
            }else{
                fn(false,data)
            }
        })
    },
    get_fave_audio:(fn)=>{
        get_from_db("SELECT * FROM media where type=? and favourite=?",['audio','yes'],(state,data)=>{
            if(state==true){
                fn(true,data)
            }else{
                fn(false,data)
            }
        })
    }
}

function addToDB(sql,params){
    var state;
    db.run(sql,params,(err)=>{
        if(err){
            state=false
        }else{
            state=true
        }
    });
    return state
}
function get_from_db(sql,params,fn){
    db.all(sql,params,(err,rows)=>{
        if(err){
            console.log(err)
            fn(false,err)
        }else{
            fn(true,rows)
        }
    });
}