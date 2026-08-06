import background from '../Images/menu-background.jpg'
import './divider.css'

export default function buildImage() {
    const content = document.querySelector("#content")
    const divider = document.createElement("section")
    divider.id = "divider"
    content.appendChild(divider)

    //background images
    const backgroundImage = document.createElement("img")
    backgroundImage.classList.add("background")
    backgroundImage.src = background
    divider.appendChild(backgroundImage)
}

