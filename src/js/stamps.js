const data = [
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

const toggleActive = () => {
	const buttons = stampsMenu.querySelectorAll('button')

	buttons.forEach(button => {
		if (button.classList.contains('button--active')) {
			button.classList.remove('button--active')
		}
	})
}

data.forEach(item => {
	const button = document.createElement('button')
	button.className = `button button--dark button--width`
	button.textContent = item.city

	button.addEventListener('click', () => {
		toggleActive()
		button.classList.toggle('button--active')
	})

	stampsMenu.appendChild(button)
})
