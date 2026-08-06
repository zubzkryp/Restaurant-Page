import './menu.css'

export default function buildMenu() {
    const content = document.querySelector("#content")
    const menu = document.createElement("section")
    menu.id = "menu"
    content.appendChild(menu)

    //title
    const title = document.createElement('h1')
    title.classList.add('title')
    title.textContent = "Menu"
    menu.appendChild(title)

    // Creates the grids/table that holds our menu
    const table = document.createElement('div')
    table.classList.add('table')
    menu.appendChild(table)
    
    const starters = document.createElement("button")
    starters.classList.add('starters')
    starters.textContent = "STARTERS"
    table.appendChild(starters)

    const sides = document.createElement("button")
    sides.classList.add('sides')
    sides.textContent = "MEZE & SIDES"
    table.appendChild(sides)

    const desserts = document.createElement("button")
    desserts.classList.add('desserts')
    desserts.textContent = "DESSERTS"
    table.appendChild(desserts)

    const drinks = document.createElement("button")
    drinks.classList.add('drinks')
    drinks.textContent = "DRINKS"
    table.appendChild(drinks)

    const startersContent = document.createElement("div")
    startersContent.classList.add("starters-content")
    menu.appendChild(startersContent)

    const firstStarter = document.createElement('div')
    firstStarter.classList.add('first-starter')
    startersContent.appendChild(firstStarter)
    const chickenTitle = document.createElement("div")
    firstStarter.appendChild(chickenTitle)
    const chickenDesc = document.createElement('div')
    firstStarter.appendChild(chickenDesc)
    chickenTitle.textContent = '🥙 Chicken Souvlaki'
    chickenDesc.textContent= 'Tender chicken skewers marinated in lemon, garlic, and herbs, flame-grilled and served with warm pita and tzatziki.'

    const secondStarter = document.createElement('div')
    secondStarter.classList.add('second-starter')
    startersContent.appendChild(secondStarter)
    const lambTitle = document.createElement("div")
    secondStarter.appendChild(lambTitle)
    const lambDesc = document.createElement('div')
    secondStarter.appendChild(lambDesc)
    lambTitle.textContent = '🐑 Lamb Kleftiko'
    lambDesc.textContent= 'Slow-roasted lamb infused with garlic, rosemary, and oregano until beautifully tender.'

    const thirdStarter = document.createElement('div')
thirdStarter.classList.add('third-starter')
startersContent.appendChild(thirdStarter)
const moussakaTitle = document.createElement("div")
thirdStarter.appendChild(moussakaTitle)
const moussakaDesc = document.createElement('div')
thirdStarter.appendChild(moussakaDesc)
moussakaTitle.textContent = '🍆 Moussaka'
moussakaDesc.textContent = 'Layers of roasted aubergine, seasoned minced beef, potatoes, and creamy béchamel baked to perfection.'

const fourthStarter = document.createElement('div')
fourthStarter.classList.add('fourth-starter')
startersContent.appendChild(fourthStarter)
const seaBassTitle = document.createElement("div")
fourthStarter.appendChild(seaBassTitle)
const seaBassDesc = document.createElement('div')
fourthStarter.appendChild(seaBassDesc)
seaBassTitle.textContent = '🐟 Grilled Sea Bass'
seaBassDesc.textContent = 'Fresh whole sea bass charcoal-grilled with olive oil, lemon, and fragrant Mediterranean herbs.'

const fifthStarter = document.createElement('div')
fifthStarter.classList.add('fifth-starter')
startersContent.appendChild(fifthStarter)
const mixedGrillTitle = document.createElement("div")
fifthStarter.appendChild(mixedGrillTitle)
const mixedGrillDesc = document.createElement('div')
fifthStarter.appendChild(mixedGrillDesc)
mixedGrillTitle.textContent = '🔥 Ember Mixed Grill'
mixedGrillDesc.textContent = 'Our signature platter featuring chicken souvlaki, lamb kofta, pork skewers, grilled vegetables, and warm pita.'
}

