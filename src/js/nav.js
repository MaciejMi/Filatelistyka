const hamburgerButton = document.getElementById('hamburger')
const navLinks = document.getElementById('navLinks')
const navTitle = document.getElementById('navTitle')
const navItems = document.querySelectorAll('.nav__item')

// Functions

const removeIsActive = () => {
	hamburgerButton.classList.remove('is-active')
	navLinks.classList.remove('is-active')
}

// Toggle classess

hamburgerButton.addEventListener('click', () => {
	hamburgerButton.classList.toggle('is-active')
	navLinks.classList.toggle('is-active')
})

// Remove classess

navItems.forEach(navItem => navItem.addEventListener('click', removeIsActive))

navTitle.addEventListener('click', removeIsActive)

window.addEventListener('scroll', removeIsActive)
