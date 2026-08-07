import './menu.css'

export default function buildMenu() {

    const startersFood = [
        {
            title: '🥙 Chicken Souvlaki',
            desc: 'Tender chicken skewers marinated in lemon, garlic, and herbs, flame-grilled and served with warm pita and tzatziki.'
        },
        {
            title: '🐑 Lamb Kleftiko',
            desc: 'Slow-roasted lamb infused with garlic, rosemary, and oregano until beautifully tender.'
        },
        {
            title: '🍆 Moussaka',
            desc: 'Layers of roasted aubergine, seasoned minced beef, potatoes, and creamy béchamel baked to perfection.'
        },
        {
            title:'🐟 Grilled Sea Bass',
            desc: 'Fresh whole sea bass charcoal-grilled with olive oil, lemon, and fragrant Mediterranean herbs.'
        },
        {
            title: '🔥 Ember Mixed Grill',
            desc: 'Our signature platter featuring chicken souvlaki, lamb kofta, pork skewers, grilled vegetables, and warm pita.'
        }
    ]

    const sidesFood = [
        {
            title: '🥣 Tzatziki & Warm Pita',
            desc: 'Creamy Greek yogurt blended with cucumber, garlic, dill, and served with freshly baked pita bread.'
        },
        {
            title: '🧀 Grilled Halloumi',
            desc: 'Golden grilled halloumi finished with lemon, oregano, and a drizzle of extra virgin olive oil.'
        },
        {
            title: '🥗 Greek Village Salad',
            desc: 'Ripe tomatoes, cucumber, red onion, Kalamata olives, feta cheese, and extra virgin olive oil.'
        },
        {
            title: '🥔 Lemon Roasted Potatoes',
            desc: 'Crispy roasted potatoes seasoned with garlic, oregano, lemon, and fresh herbs.'
        },
        {
            title: '🍃 Dolmades',
            desc: 'Tender vine leaves stuffed with seasoned rice, herbs, and served with a refreshing yogurt dip.'
        }
    ]

    const dessertsFood = [
        {
            title: '🍯 Baklava',
            desc: 'Delicate layers of filo pastry filled with chopped walnuts and finished with fragrant honey syrup.'
        },
        {
            title: '🍩 Loukoumades',
            desc: 'Light Greek doughnuts drizzled with honey, cinnamon, and crushed pistachios.'
        },
        {
            title: '🥣 Greek Yogurt & Honey',
            desc: 'Thick Greek yogurt topped with local honey, toasted walnuts, and a touch of cinnamon.'
        },
        {
            title: '🍊 Portokalopita',
            desc: 'A traditional Greek orange cake soaked in citrus syrup and served with vanilla ice cream.'
        }
    ]

    const drinksFood = [
        {
            title: '☕ Greek Coffee',
            desc: 'Rich, traditional coffee slowly brewed and served the authentic Greek way.'
        },
        {
            title: '🍋 Homemade Lemonade',
            desc: 'Freshly squeezed lemons blended with mint and sparkling water for a refreshing finish.'
        },
        {
            title: '🍺 Mythos Beer',
            desc: 'A crisp and refreshing Greek lager, perfect alongside charcoal-grilled dishes.'
        },
        {
            title: '🍷 House Red Wine',
            desc: 'A smooth Greek red with notes of dark berries and subtle spice.'
        },
        {
            title: '🥂 House White Wine',
            desc: 'A light and refreshing white wine with bright citrus and floral aromas.'
        },
        {
            title: '💧 Sparkling Water',
            desc: 'Chilled sparkling mineral water served to refresh the palate.'
        }
    ]


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
    
    const startersBTN = document.createElement("button")
    startersBTN.classList.add('starters')
    startersBTN.textContent = "STARTERS"
    table.appendChild(startersBTN)

    const sidesBTN = document.createElement("button")
    sidesBTN.classList.add('sides')
    sidesBTN.textContent = "MEZE & SIDES"
    table.appendChild(sidesBTN)

    const dessertsBTN = document.createElement("button")
    dessertsBTN.classList.add('desserts')
    dessertsBTN.textContent = "DESSERTS"
    table.appendChild(dessertsBTN)

    const drinksBTN = document.createElement("button")
    drinksBTN.classList.add('drinks')
    drinksBTN.textContent = "DRINKS"
    table.appendChild(drinksBTN)

    //starters menu
    const startersContent = document.createElement("div")
    startersContent.classList.add("starters-content")
    menu.appendChild(startersContent)

    startersFood.forEach((items) => {
        const card = document.createElement('div')
        card.classList.add('starters-card')
        startersContent.appendChild(card)

        const titleElement = document.createElement("div")
        titleElement.textContent = items.title
        card.appendChild(titleElement)

        const description = document.createElement('div') 
        description.textContent = items.desc
        card.appendChild(description)
    })

    startersBTN.addEventListener('click', () => { // makes only starter menu shown
        startersContent.style.display = 'grid'
        sidesContent.style.display = 'none'
        dessertsContent.style.display = 'none'
        drinksContent.style.display = 'none'
    })

    // sides menu
    const sidesContent = document.createElement('div')
    sidesContent.classList.add('sides-content') 
    menu.appendChild(sidesContent)

    sidesFood.forEach((items) => {
        const card = document.createElement('div')
        card.classList.add('sides-card')
        sidesContent.appendChild(card)

        const titleElement = document.createElement("div")
        titleElement.textContent = items.title
        card.appendChild(titleElement)

        const description = document.createElement('div') 
        description.textContent = items.desc
        card.appendChild(description)
    })
    
    sidesBTN.addEventListener('click', () => {
        sidesContent.style.display = 'grid'
        startersContent.style.display = 'none'
        dessertsContent.style.display = 'none'
        drinksContent.style.display = 'none'
    })


    // desserts menu
    const dessertsContent = document.createElement('div')
    dessertsContent.classList.add('desserts-content') 
    menu.appendChild(dessertsContent)

    dessertsFood.forEach((items) => {
        const card = document.createElement('div')
        card.classList.add('desserts-card')
        dessertsContent.appendChild(card)

        const titleElement = document.createElement("div")
        titleElement.textContent = items.title
        card.appendChild(titleElement)

        const description = document.createElement('div') 
        description.textContent = items.desc
        card.appendChild(description)
    })
    
    dessertsBTN.addEventListener('click', () => {
        dessertsContent.style.display = 'grid'
        startersContent.style.display = 'none'
        sidesContent.style.display = 'none'
        drinksContent.style.display = 'none'
    })

    // drinks menu
    const drinksContent = document.createElement('div')
    drinksContent.classList.add('drinks-content') 
    menu.appendChild(drinksContent)

    drinksFood.forEach((items) => {
        const card = document.createElement('div')
        card.classList.add('drinks-card')
        drinksContent.appendChild(card)

        const titleElement = document.createElement("div")
        titleElement.textContent = items.title
        card.appendChild(titleElement)

        const description = document.createElement('div') 
        description.textContent = items.desc
        card.appendChild(description)
    })
    
    drinksBTN.addEventListener('click', () => {
        drinksContent.style.display = 'grid'
        dessertsContent.style.display = 'none'
        startersContent.style.display = 'none'
        sidesContent.style.display = 'none'
    })

}
