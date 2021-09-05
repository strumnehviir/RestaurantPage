import './style.css'
import {HomePageGenerator} from './homepage.js'
import {MenuGenerator} from './menu.js'
import {Contact} from './contact.js'
import {removeAllChildNodes} from './childKiller.js'

const RestaurantPage = (() => {
    HomePageGenerator()
    let navButtons = document.querySelectorAll('.nav-button')
    let parent = document.getElementById("content")
    let defaultSet = document.getElementById("home")
    defaultSet.setAttribute('id', 'home-clicked')

    navButtons.forEach((element) => {
        element.addEventListener('click', (e) =>{
            let clickData = e.target.id
            if( clickData === "home"){
                removeAllChildNodes(parent)
                HomePageGenerator()
                element.setAttribute('id', `${clickData}-clicked`)
                let nav = document.getElementById('nav')
                nav.childNodes[3].id = 'menu'
                nav.childNodes[5].id = 'contact'

            }

            else if(clickData === 'menu'){
                removeAllChildNodes(parent)
                MenuGenerator()
                element.setAttribute('id', `${clickData}-clicked`)
                let nav = document.getElementById('nav')
                nav.childNodes[1].id = 'home'
                nav.childNodes[5].id = 'contact'

            }

            else if(clickData === 'contact'){
                removeAllChildNodes(parent)
                Contact()
                element.setAttribute('id', `${clickData}-clicked`)
                let nav = document.getElementById('nav')
                nav.childNodes[1].id = 'home'
                nav.childNodes[3].id = 'menu'

            }

        })
    })


    



}) ()


//HomePageGenerator()
//MenuGenerator()
//Contact()