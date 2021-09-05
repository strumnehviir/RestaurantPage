const Contact = () =>{

    let contentBox = document.getElementById('content')

    let contactBox = document.createElement('div')
    contactBox.setAttribute('id', "contact-box")
    
    let contactText = document.createElement('p')
    contactText.setAttribute("id", "contact-text")

    contactBox.appendChild(contactText)
    contentBox.appendChild(contactBox)

    let contactInnerText = document.getElementById('contact-text')
    contactInnerText.innerText = "contact info:"

}

export {Contact}