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

    // tells location
    const leftLocation =  document.createElement('div')
    leftLocation.classList.add('left-location')
    strip.appendChild(leftLocation)
    const titleLocation = document.createElement('h1') 
    titleLocation.classList.add('title-location')
    titleLocation.textContent =  "Location"
    leftLocation.appendChild(titleLocation)

    const address = document.createElement('div') //We write the address here
    address.classList.add('address')
    leftLocation.appendChild(address)
    address.innerHTML = '📍 25 Caldera View Oia,<br> Santorini 847 02,<br> Greece '

    // Opening Times

    const rightLocation = document.createElement('div')
    rightLocation.classList.add('right-location')
    strip.appendChild(rightLocation)
    const titleOP= document.createElement('h1')
    titleOP.classList.add('title-times')
    titleOP.textContent = 'Opening Times'
    rightLocation.appendChild(titleOP)

    const times = document.createElement('div')
    times.classList.add('opening-times')
    rightLocation.appendChild(times)
    times.innerHTML = 'Monday – Thursday : 12:00 PM – 10:30 PM <br>Friday – Saturday : 12:00 PM – 11:30 PM <br>Sunday : 12:00 PM – 10:00 PM'
}