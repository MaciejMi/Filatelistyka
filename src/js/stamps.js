const data = [
	{
		city: 'Białystok',
		text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, qui vero laudantium ipsam
        nesciunt deleniti explicabo consequuntur eius culpa quos quae veniam aliquid accusamus cumque temporibus
        mollitia amet sint expedita corporis voluptas repudiandae totam. Id saepe veritatis aperiam eius quasi
        enim quibusdam corporis!`,
		img: 'https://cdn.pixabay.com/photo/2014/10/11/20/49/postage-stamps-484991_1280.jpg',
	},
	{
		city: 'Raków',
		text: `Lcdwadcwacwacwdita corporis voluptas repudiandae totam. Id saepe veritatis aperiam eius quasi
        enim quibusdam corporis!`,
		img: 'https://cdn.pixabay.com/photo/2016/03/31/15/39/bluenose-1293452_1280.png',
	},
	{
		city: 'Raków',
		text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, qui vero laudantium ipsam
        nesciunt deleniti explicabo consequuntur eius culpa quos quae veniam aliquid accusamus cumque temporibus
        mollitia amet sint expedita corporis voluptas repudiandae totam. Id saepe veritatis aperiam eius quasi
        enim quibusdam corporis!`,
		img: 'https://cdn.pixabay.com/photo/2013/07/18/10/58/vintage-163677_1280.jpg',
	},
	{
		city: 'Kielce',
		text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, qui vero laudantium ipsam
        nesciunt deleniti explicabo consequuntur eius culpa quos quae veniam aliquid accusamus cumque temporibus
        mollitia amet sint expedita corporis voluptas repudiandae totam. Id saepe veritatis aperiam eius quasi
        enim quibusdam corporis!`,
		img: 'https://cdn.pixabay.com/photo/2014/10/11/20/49/postage-stamps-484991_1280.jpg',
	},
	{
		city: 'Białystok',
		text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, qui vero laudantium ipsam
        nesciunt deleniti explicabo consequuntur eius culpa quos quae veniam aliquid accusamus cumque temporibus
        mollitia amet sint expedita corporis voluptas repudiandae totam. Id saepe veritatis aperiam eius quasi
        enim quibusdam corporis!`,
		img: 'https://cdn.pixabay.com/photo/2014/10/11/20/49/postage-stamps-484991_1280.jpg',
	},
	{
		city: 'Raków',
		text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, qui vero laudantium ipsam
        nesciunt deleniti explicabo consequuntur eius culpa quos quae veniam aliquid accusamus cumque temporibus
        mollitia amet sint expedita corporis voluptas repudiandae totam. Id saepe veritatis aperiam eius quasi
        enim quibusdam corporis!`,
		img: 'https://cdn.pixabay.com/photo/2014/10/11/20/49/postage-stamps-484991_1280.jpg',
	},
	{
		city: 'Kielce',
		text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, qui vero laudantium ipsam
        nesciunt deleniti explicabo consequuntur eius culpa quos quae veniam aliquid accusamus cumque temporibus
        mollitia amet sint expedita corporis voluptas repudiandae totam. Id saepe veritatis aperiam eius quasi
        enim quibusdam corporis!`,
		img: 'https://cdn.pixabay.com/photo/2014/10/11/20/49/postage-stamps-484991_1280.jpg',
	},
	{
		city: 'Białystok',
		text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, qui vero laudantium ipsam
        nesciunt deleniti explicabo consequuntur eius culpa quos quae veniam aliquid accusamus cumque temporibus
        mollitia amet sint expedita corporis voluptas repudiandae totam. Id saepe veritatis aperiam eius quasi
        enim quibusdam corporis!`,
		img: 'https://cdn.pixabay.com/photo/2014/10/11/20/49/postage-stamps-484991_1280.jpg',
	},
	{
		city: 'Raków',
		text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, qui vero laudantium ipsam
        nesciunt deleniti explicabo consequuntur eius culpa quos quae veniam aliquid accusamus cumque temporibus
        mollitia amet sint expedita corporis voluptas repudiandae totam. Id saepe veritatis aperiam eius quasi
        enim quibusdam corporis!`,
		img: 'https://cdn.pixabay.com/photo/2014/10/11/20/49/postage-stamps-484991_1280.jpg',
	},
]
const stampsMenu = document.getElementById('stampsMenu')
const cardTitle = document.getElementById('cardTitle')
const cardUrl = document.getElementById('cardUrl')
const cardDescription = document.getElementById('cardDescription')

cardTitle.textContent = data[0].city
cardDescription.textContent = data[0].text
cardUrl.setAttribute('src', data[0].img)

const toggleActive = () => {
	const buttons = stampsMenu.querySelectorAll('button')

	buttons.forEach(button => {
		if (button.classList.contains('button--active')) {
			button.classList.remove('button--active')
		}
	})
}

let isFirst = true

data.forEach(item => {
	const button = document.createElement('button')
	button.className = `button button--dark button--width`
	button.textContent = item.city

	button.addEventListener('click', () => {
		toggleActive()
		button.classList.toggle('button--active')
		cardTitle.textContent = item.city
		cardDescription.textContent = item.text
		cardUrl.setAttribute('src', item.img)
	})

	if (isFirst) {
		button.classList.add('button--active')
		isFirst = false
	}

	stampsMenu.appendChild(button)
})
