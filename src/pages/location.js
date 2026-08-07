import './location.css'

export default function buildLocation() {
    const content = document.querySelector('#content')
    const location = document.createElement('section')
    location.id = 'location'
    content.appendChild(location)

    const background = document.createElement('div') 
    background.classList.add('background-location')
    location.appendChild(background)

    const strip = document.createElement("div")
    strip.classList.add('strip')
    background.appendChild(strip)

    const titleLocation = document.createElement('h1') 
    titleLocation.classList.add('title-location')
    titleLocation.textContent =  "Location"
    strip.appendChild(titleLocation)

    const address = document.createElement('div') //We write the address here
    address.classList.add('address')
    strip.appendChild(address)
    address.innerHTML = '📍 25 Caldera View Oia,<br> Santorini 847 02,<br> Greece '
}