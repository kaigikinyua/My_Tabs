const sqlite3=require('sqlite3').verbose()
const path=require('path')
const db=new sqlite3.Database(path.join(__dirname,'/DB/my_tabs.db'));
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
function get_from_db(sql,params){
    var data;
    db.all(sql,params,(err,rows)=>{
        if(err){

        }else{
            data=rows
        }
    });
    return data
}