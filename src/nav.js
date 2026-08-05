
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
    
    const restaurantName = document.createElement("button")
    restaurantName.textContent = "EMBER & THYME"
    restaurantName.classList.add('home')
    restaurantName.addEventListener('click', () => {
        document.querySelector('#header').scrollIntoView();
    })


    const menu = document.createElement("button")
    menu.textContent = "MENU"
   
    const story = document.createElement("button")
    story.classList.add('story')
    story.textContent = "STORY"
    story.addEventListener('click', () => {
        document.querySelector('#story').scrollIntoView();
    });

    const location = document.createElement("button")
    location.textContent = "LOCATION"

    const contact = document.createElement("button")
    contact.textContent = "CONTACT"
    

    leftSide.appendChild(story)
    leftSide.appendChild(menu)
    center.appendChild(restaurantName)
    rightSide.appendChild(location)
    rightSide.appendChild(contact)
}
