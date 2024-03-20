const URL = './dist/img/'

const data = [
	{
		city: 'Warszawa',
		img: 'Warszawa.jpg',
	},
	{
		city: 'Kraków',
		img: 'Kraków.jpg',
	},
	{
		city: 'Łódź',
		img: 'Łódź.avif',
	},
	{
		city: 'Wrocław',
		img: 'Wroclaw.avif',
	},
	{
		city: 'Poznań',
		img: 'Poznań.jpeg',
	},
	{
		city: 'Gdańsk',
		img: 'Gdańsk.avif',
	},
	{
		city: 'Szczecin',
		img: 'Szczecin.jpg',
	},
	{
		city: 'Bydgoszcz',
		img: 'Bydgoszcz.jpg',
	},
	{
		city: 'Lublin',
		img: 'Lublin.jpg',
	},
	{
		city: 'Białystok',
		img: 'Białystok.jpg',
	},
	{
		city: 'Katowice ',
		img: 'Katowice.jpg',
	},
	{
		city: 'Gdynia',
		img: 'Gdynia.jpg',
	},
	{
		city: 'Radom',
		img: 'Radom.jpeg',
	},
	{
		city: 'Toruń',
		img: 'Toruń.jpg',
	},
	{
		city: 'Kielce',
		img: 'Kielce.jpeg',
	},
	{
		city: 'Rzeszów',
		img: 'Rzeszów.jpg',
	},
	{
		city: 'Gliwice',
		img: 'gliwice.jpg',
	},
	{
		city: 'Olsztyn',
		img: 'Olsztyn.jpg',
	},
]

const text =
	'Zachęcamy serdecznie do nawiązania kontaktu w celu uzyskania wyceny oraz ewentualnego rozważenia sprzedaży kolekcji znaczków pocztowych. Jesteśmy otwarci na rozmowę i chętnie pomożemy w każdej kwestii związanej z Państwa kolekcją.'

const stampsMenu = document.getElementById('stampsMenu')
const cardTitle = document.getElementById('cardTitle')
const cardUrl = document.getElementById('cardUrl')
const cardDescription = document.getElementById('cardDescription')

cardTitle.textContent = data[0].city
cardDescription.textContent = text
cardUrl.setAttribute('src', URL + data[0].img)

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
		cardDescription.textContent = text
		cardUrl.setAttribute('alt', item.city)
		cardUrl.setAttribute('src', URL + item.img)
	})

	button.setAttribute('href', '#stamps')

	if (isFirst) {
		button.classList.add('button--active')
		isFirst = false
	}

	stampsMenu.appendChild(button)
})
