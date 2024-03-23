const images = [
	{
		href: './dist/img/s1.jpg',
		alt: 'Znaczki pocztowe z okazji setnej rocznicy urodzin Stefana Kisilewskiego',
	},
	{
		href: './dist/img/s2.jpg',
		alt: 'Znaczki pocztowe Polsa / Europa',
	},
	{
		href: './dist/img/s3.jpg',
		alt: 'Na zdjęciu widać 10 tomów książek o Polsce z czasów 1860-1945',
	},
	{
		href: './dist/img/s4.jpg',
		alt: "Znaczki pocztowe z czasów PRL'u (1949)",
	},
	{
		href: './dist/img/s5.jpg',
		alt: 'Znaczki pocztowe z 1915 roku',
	},
	{
		href: './dist/img/s6.jpg',
		alt: 'Znaczki pocztowe Danzig (Gdańsk)',
	},
	{
		href: './dist/img/s7.jpg',
		alt: 'Znaczki pocztowe - trzecia rzesza',
	},
	{
		href: './dist/img/s8.jpg',
		alt: 'Znaczki niemieckie ',
	},
	{
		href: './dist/img/s9.jpg',
		alt: 'Znaczek pierwszy polski lot stratosferyczny',
	},
	{
		href: './dist/img/s10.jpg',
		alt: 'Znaczki pocztowe (1945)',
	},
	{
		href: './dist/img/s11.jpg',
		alt: 'Znaczki pocztowe z 1937, Piłsudski ',
	},
	{
		href: './dist/img/s12.jpg',
		alt: 'Znaczki pocztowe z Austrii (wydanie lubelskie)',
	},
	{
		href: './dist/img/s13.jpg',
		alt: 'Znaczki pocztowe z 1919',
	},
]

const galleryGroup = document.getElementById('galleryGroup')

images.forEach(image => {
	const link = document.createElement('a')
	link.setAttribute('href', image.href)
	const img = document.createElement('img')
	img.setAttribute('src', image.href)
	img.setAttribute('alt', image.alt)
	link.appendChild(img)

	galleryGroup.appendChild(link)
})
