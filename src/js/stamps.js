const data = [
	{
		city: 'Białystok',
		text: 'Białystok to piękne miasto na wschodzie Polski, znane z bogatej historii i pięknych zabytków. Znaczki pocztowe z Białegostoku są niezwykle cenne i poszukiwane przez kolekcjonerów.',
		img: 'https://ocdn.eu/pulscms-transforms/1/iO8k9kpTURBXy85MjNkNmU5ZDFhYjIwMDJkZWEzYzZkODA5NTY0NjBiYi5qcGeTlQMBAM0P1c0I6JUCzQSwAMPDkwmmNGNkOTVjBt4AAaEwAQ/bialystok.jpeg',
	},
	{
		city: 'Raków',
		text: 'Raków to urokliwa miejscowość w Polsce, otoczona malowniczą przyrodą. Znaczki pocztowe z Rakowa są popularne ze względu na swoją unikalność i uroczysty design.',
		img: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Plac_Wolno%C5%9Bci_w_Rakowie_9.jpg',
	},
	{
		city: 'Kielce',
		text: 'Kielce to dynamicznie rozwijające się miasto, które łączy w sobie nowoczesność z tradycją. Znaczki pocztowe z Kielc są znane z pięknego wzornictwa i wysokiej jakości wykonania.',
		img: 'https://kielce.travel/media/cache/homepage_slider/uploads/6169520eb092f.JPG',
	},
	{
		city: 'Białystok',
		text: 'Białystok to piękne miasto na wschodzie Polski, znane z bogatej historii i pięknych zabytków. Znaczki pocztowe z Białegostoku są niezwykle cenne i poszukiwane przez kolekcjonerów.',
		img: 'https://ocdn.eu/pulscms-transforms/1/iO8k9kpTURBXy85MjNkNmU5ZDFhYjIwMDJkZWEzYzZkODA5NTY0NjBiYi5qcGeTlQMBAM0P1c0I6JUCzQSwAMPDkwmmNGNkOTVjBt4AAaEwAQ/bialystok.jpeg',
	},
	{
		city: 'Raków',
		text: 'Raków to urokliwa miejscowość w Polsce, otoczona malowniczą przyrodą. Znaczki pocztowe z Rakowa są popularne ze względu na swoją unikalność i uroczysty design.',
		img: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Plac_Wolno%C5%9Bci_w_Rakowie_9.jpg',
	},
	{
		city: 'Kielce',
		text: 'Kielce to dynamicznie rozwijające się miasto, które łączy w sobie nowoczesność z tradycją. Znaczki pocztowe z Kielc są znane z pięknego wzornictwa i wysokiej jakości wykonania.',
		img: 'https://kielce.travel/media/cache/homepage_slider/uploads/6169520eb092f.JPG',
	},
	{
		city: 'Białystok',
		text: 'Białystok to piękne miasto na wschodzie Polski, znane z bogatej historii i pięknych zabytków. Znaczki pocztowe z Białegostoku są niezwykle cenne i poszukiwane przez kolekcjonerów.',
		img: 'https://ocdn.eu/pulscms-transforms/1/iO8k9kpTURBXy85MjNkNmU5ZDFhYjIwMDJkZWEzYzZkODA5NTY0NjBiYi5qcGeTlQMBAM0P1c0I6JUCzQSwAMPDkwmmNGNkOTVjBt4AAaEwAQ/bialystok.jpeg',
	},
	{
		city: 'Raków',
		text: 'Raków to urokliwa miejscowość w Polsce, otoczona malowniczą przyrodą. Znaczki pocztowe z Rakowa są popularne ze względu na swoją unikalność i uroczysty design.',
		img: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Plac_Wolno%C5%9Bci_w_Rakowie_9.jpg',
	},
	{
		city: 'Kielce',
		text: 'Kielce to dynamicznie rozwijające się miasto, które łączy w sobie nowoczesność z tradycją. Znaczki pocztowe z Kielc są znane z pięknego wzornictwa i wysokiej jakości wykonania.',
		img: 'https://kielce.travel/media/cache/homepage_slider/uploads/6169520eb092f.JPG',
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
	const button = document.createElement('a')
	button.className = `button button--dark button--width`
	button.textContent = item.city

	button.addEventListener('click', () => {
		document.querySelectorAll('.button--dark').forEach(btn => {
			btn.classList.remove('button--active')
		})

		button.classList.add('button--active')

		cardTitle.textContent = item.city
		cardDescription.textContent = item.text
		cardUrl.setAttribute('src', item.img)
	})

	button.setAttribute('href', '#stamps')
	stampsMenu.appendChild(button)
})
