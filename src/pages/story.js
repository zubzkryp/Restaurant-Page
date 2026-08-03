import './story.css'

export default function buildStory() {
    const content = document.querySelector("#content")
    const story = document.createElement("section")

    story.id = "story"
    content.appendChild(story)
    
}