import './story.css'
import frontDoor from '../Images/front-door.jpg'
import outside from '../Images/outside.jpg'

export default function buildStory() {
    const content = document.querySelector("#content")
    const story = document.createElement("section")

    story.id = "story"
    content.appendChild(story)

    const leftStory = document.createElement("div") // creating element for div
    leftStory.classList.add("left-story") // giving image their own class
    story.appendChild(leftStory) // appending to story so it has left side

    const image = document.createElement('img')
    image.classList.add("image")
    image.src = frontDoor
    leftStory.appendChild(image)

    const image1 = document.createElement('img')
    image1.classList.add("image1")
    image1.src = outside
    leftStory.appendChild(image1)

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(entry.isIntersecting) // to test if it works
            if (entry.isIntersecting) {
                entry.target.classList.add("show")
            }
            else {
                entry.target.classList.remove("show")
            }
        })
    }, {
        threshold: 1
    })
    observer.observe(leftStory)
    
    const description = document.createElement("p")
    description.classList.add("Description")
    
    story.appendChild(description)
    const title = document.createElement("h1")
    const first = document.createElement("p")
    const second = document.createElement("p")

    title.classList.add("title")
    first.classList.add("first")
    second.classList.add("second")

    title.textContent = " OUR STORY"
    first.innerHTML = "At Ember & Thyme, we believe the best meals are shared.<br>Inspired by the rich culinary traditions of Greece, we bring together fresh local ingredients, time-honoured recipes <br>and the unmistakable flavour of charcoal-fired cooking to create dishes that feel both authentic and welcoming"
    second.innerHTML = "Our name reflects our philosophy:<br>Ember represents the warmth of the fire that has brought people together for generations,<br> while Thyme celebrates the fragrant herbs that define Greek cuisine.<br> Whether you're joining us for a family gathering, a romantic evening, or a relaxed lunch by the coast,<br>we invite you to experience genuine Greek hospitality—one plate at a time."
    // descritpion.innerHTML= "At Ember & Thyme, we believe the best meals are shared.<br>Inspired by the rich culinary traditions of Greece, we bring together fresh local ingredients, time-honoured recipes <br>and the unmistakable flavour of charcoal-fired cooking to create dishes that feel both authentic and welcoming.<br>Our name reflects our philosophy:<br>Ember represents the warmth of the fire that has brought people together for generations,<br> while Thyme celebrates the fragrant herbs that define Greek cuisine.<br> Whether you're joining us for a family gathering, a romantic evening, or a relaxed lunch by the coast,<br>we invite you to experience genuine Greek hospitality—one plate at a time."

    description.appendChild(title)
    description.appendChild(first)
    description.appendChild(second)

    


}