import './contact.css'

export default function buildContact() {
    const content = document.querySelector('#content')
    const contact = document.createElement('footer')
    contact.id = 'contact'
    content.appendChild(contact)

    const contactGrid = document.createElement('div')
    contactGrid.classList.add('contact-grid')
    contact.appendChild(contactGrid)

    
    const contactTitle = document.createElement('h1')
    contactTitle.classList.add('contact-title')
    contactTitle.textContent = 'Stay In Touch!'
    contactGrid.appendChild(contactTitle)
    
    const email = document.createElement('div')
    email.classList.add('email')
    email.textContent = '✉️ hello@emberandthyme.gr'
    contactGrid.appendChild(email) 
    
    
    const phoneNumber = document.createElement('div')
    phoneNumber.classList.add('phone-number')
    phoneNumber.textContent = '📞 +30 210 555 0187 (ps all fake)'
    contactGrid.appendChild(phoneNumber)

    const instagram = document.createElement('div')
    instagram.classList.add('instagram')
    instagram.textContent = '📸 @emberandthyme'
    contactGrid.appendChild(instagram)
}