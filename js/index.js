var menuHamb = document.getElementById('hamb-menu')
var menuMob = document.getElementById('menu-list-mobile')
var control = false

function click(){
    if(control == false){
        menuMob.style.display = "flex"
        control = true
    }
    else if(control == true){
        menuMob.style.display = "none"
        control = false
    }
    
}