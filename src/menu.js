const MenuGenerator = () =>{
    
    let contentBox = document.getElementById('content')
    
    for( let i = 0; i <9; ++i){
        let menuItemBox = document.createElement('div')
        menuItemBox.setAttribute('id',`menu-item-${i}`)
        menuItemBox.setAttribute('class', 'menu-items')

        let menuItemP = document.createElement('p')
        menuItemP.setAttribute('id', `menu-text${i}`)
        menuItemP.setAttribute('class', 'menu-inner-text')
        
        menuItemBox.appendChild(menuItemP)
        contentBox.appendChild(menuItemBox)
    }
    let menuText = document.querySelectorAll(".menu-items")
    menuText[0].innerText = "Menu"
    menuText[1].innerText = "food2"
    menuText[2].innerText = "food3"
    menuText[3].innerText = "food4"
    menuText[4].innerText = "food5"
    menuText[5].innerText = "food6"
    menuText[6].innerText = "food7"
    menuText[7].innerText = "food8"
    menuText[8].innerText = "food8"

}

export {MenuGenerator}