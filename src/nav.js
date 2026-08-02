
export default function av() {
    const nav = document.querySelector("nav")
    const leftSide = document.createElement("div")
    leftSide.classList.add("left-side")
    const rightSide = document.createElement("div")
    rightSide.classList.add("right-side")
    const center = document.createElement("div")
    center.classList.add("center")
    nav.appendChild(leftSide)
    nav.appendChild(center)
    nav.appendChild(rightSide)
    
    const restaurantName = document.createElement("a")
    restaurantName.textContent = "EMBER & THYME"
    restaurantName.href = "#"

    const menu = document.createElement("a")
    menu.textContent = "MENU"
    menu.href = "#"

    const story = document.createElement("a")
    story.textContent = "STORY"
    story.href = "#"

    const location = document.createElement("a")
    location.textContent = "LOCATION"
    location.href = "#"

    const contact = document.createElement("a")
    contact.textContent = "CONTACT"
    contact.href = "#"

    leftSide.appendChild(story)
    leftSide.appendChild(menu)
    center.appendChild(restaurantName)
    rightSide.appendChild(location)
    rightSide.appendChild(contact)
}
