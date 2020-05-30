/*
hide/display side nav
load users theme
*/

var sideNav=false
function navBar(){
    var sNav=document.querySelector('.sideNav')
    var sDisp=""
    if(sideNav==false){
        sDisp="block"
    }else{
        sDisp="none"
    }
    sNav.style.display=sDisp
    sideNav=!sideNav
}
