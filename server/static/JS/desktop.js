function view_todo(){
    create_view_todo()
    var cover=document.getElementById('cover')
    cover.style.display="block"
}
function hide_view_todo(){
    var todo=document.getElementsByClassName('view_todo')
    todo[0].classList.remove('view_todo')
    var cover=document.getElementById('cover')
    cover.style.display="none"
}


function create_view_todo(todo_id){
    var body=document.querySelectorAll('body')

    var view_div=create_element('div','view_todo');
    var title=create_element('div','title')
    title.innerHTML="Hello World"
    view_div.appendChild(title)
    var content=create_element('div','content')
    var subtasks=create_element('ul','subtasks')
    //bind to data
    var Tsks=['Load music','Load_Videos','Create Dom']
    Tsks.forEach((tsk)=>{
        var task=document.createElement('li')
        var task_title=document.createElement('small')
        task_title.innerHTML=tsk
        //bind to data
        var task_sub_actions=create_element('div','sub_action')
        var button_done=document.createElement('button')
        create_and_append(button_done,'i',['fa','fa-check'])
        var button_del=create_element('button','danger')
        create_and_append(button_del,'i',['fa','fa-trash'])
        task_sub_actions.appendChild(button_done)
        task_sub_actions.appendChild(button_del)

        task.appendChild(task_title)
        task.appendChild(task_sub_actions)
        subtasks.appendChild(task)
    });
    content.appendChild(subtasks)
    view_div.appendChild(content)

    var actions=create_element('div','actions')
    var btn_done=document.createElement('button')
    var btn_delete=create_element('button','danger')
    create_and_append(btn_done,'i',['fa','fa-check'])
    create_and_append(btn_delete,'i',['fa','fa-trash'])
    actions.appendChild(btn_done)
    actions.appendChild(btn_delete)
    view_div.appendChild(actions)

    body[0].appendChild(view_div)
}


function create_and_append(parent,el_type,el_class){
    var el=document.createElement(el_type)
    el_class.forEach((_class)=>{
        el.classList.add(_class)
    })
    parent.appendChild(el)
}
function create_element(ele_type,el_class){
    var el=document.createElement(ele_type)
    el.classList.add(el_class)
    return el
}
