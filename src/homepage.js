const HomePageGenerator = () =>{
    
    let contentBox = document.getElementById('content')
    
    for(let i = 0; i < 3; ++i){
        let itemBox = document.createElement('div')
        itemBox.setAttribute("id", `itembox-${i}`)
        itemBox.setAttribute("class", "item-box")
        contentBox.append(itemBox)
    }
    contentBox.childNodes[0].innerText ="Title"
    contentBox.childNodes[1].innerText = "Intro:"
    contentBox.childNodes[2].innerText = "hours:"
}

export {HomePageGenerator}