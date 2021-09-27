const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Make custom style adjustments
const body = document.querySelector('body')
body.style.background = '#e2eafc'

// // Change title
let title = document.querySelector('title')
title.textContent = 'Great Idea!'

// Select header/nav/anchor tags and change text content
// Change color to green
let anchors = document.querySelectorAll('nav a')
anchors.forEach((a, i) => {
  a.textContent = siteContent.nav[`nav-item-${i+1}`]
  a.style.color = 'green'
  a.style.fontWeight = 'bold'
  a.style.border = '2px solid green'
  a.style.padding = '1% 2%'
  a.addEventListener('mouseover', function() {
      this.style.background = 'green'
      this.style.color = 'black'
    })
  a.addEventListener('mouseout', function() {
    this.style.background = 'red'
    this.style.fontWeight = 'bold'
    this.style.color = 'white'
    this.style.border = 'red'
  })
})

// Add 2 child elements to nav
let nav = document.querySelector('nav')
const child1 = document.createElement('a')
const child2 = document.createElement('a')
child1.style.color = 'crimson'
child1.style.fontSize = '2rem'
nav.appendChild(child1).textContent = 'Lastly'
child2.textContent = 'Firstly'
child2.style.color = 'hotpink'
child2.style.fontSize = '2rem'
nav.prepend(child2)


// Add text and breaks to h1: <h1>DOM<br> Is<br> Awesome</h1>
let breakH1 = document.querySelector('h1')
breakH1.innerHTML = 'DOM<br> Is<br> Awesome'
breakH1.style.fontSize = '6.5rem'


// Add text content to cta-text button
let butt = document.querySelector('.cta-text button')
butt.textContent = siteContent.cta.button
butt.style.fontWeight = 'bold'

const button = document.querySelector('button')

button.addEventListener("mouseover", function() {
  this.style.background = "red"
  this.style.color = 'white'
})
button.addEventListener('mouseout', function() {
  this.style.background = 'white'
  this.style.color = 'black'
})

// Add source to cta image
let ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent.cta['img-src']

// Set text-content class h4 and p
let text = document.querySelectorAll('.text-content')
// Extract an array from the object's main-content section
// Do not include img
const mainContentArray = []
for (key in siteContent["main-content"]) {
    if (!key.includes('img')) mainContentArray.push(siteContent["main-content"][key])
}
// Initialize array indexes
let h4 = 0;
let p = 1;
// Loop through DOM text-content selection and add content to h4 and p
text.forEach(content => {
  content.firstElementChild.textContent = mainContentArray[h4] 
  content.lastElementChild.textContent = mainContentArray[p] 
  h4 += 2
  p += 2
})

// Add source to middle-img id 
document.querySelector('#middle-img').src = siteContent["main-content"]["middle-img-src"]

// Contact section
document.querySelector('.contact h4').textContent = siteContent.contact["contact-h4"]

// Make anchors for address, phone, and email
function createAnchor(arg) {
  let anchor = document.createElement('a')
  anchor.textContent = siteContent.contact[arg]
  anchor.style.padding = '2%'
  return anchor
}
const contactSection = document.querySelector('.contact')
const address = createAnchor('address')
const phone = createAnchor('phone')
const email = createAnchor('email')
// Append to section
contactSection.append(address)
contactSection.append(phone)
contactSection.append(email)

// Edit styles
contactSection.style.display = 'flex'
contactSection.style.flexDirection = 'column'
contactSection.style.marginLeft = '10%'

// Remove old paragraphs
for (let i = 0; i < 3; i++) {
  let paragraphs = document.querySelector('.contact p')
  paragraphs.remove()
}

// Footer
let footP = document.querySelector('footer p')
footP.textContent = siteContent.footer.copyright 
footP.style.marginBottom = '2%'
let foot = document.querySelector('footer')
foot.style.display = 'flex'
foot.style.justifyContent = 'center'