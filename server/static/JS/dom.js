var tabs=['desktop','music','videos']

function switchTab(id){
    tabs.forEach(elm=>{
        if(elm!=id){
            hideTab(elm)
        }else{
            showTab(elm)
        }
    })
}
function hideTab(tabID){
    var element=document.getElementById(tabID)
    element.classList.remove('tab_active')
}
function showTab(tabID){
    var element=document.getElementById(tabID)
    element.classList.add('tab_active')
    var title=document.getElementById('tabname')
    title.innerHTML=tabID
}


