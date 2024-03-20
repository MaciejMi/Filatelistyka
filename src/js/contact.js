const imageInput = document.getElementById('imageInput')
const numberOfPhotoInput = document.getElementById('numberOfPhotoInput')

numberOfPhotoInput.addEventListener('input', () => {
	const value = Number.parseInt(numberOfPhotoInput.value)

	if (value === NaN) {
		return
	}

	if (value < 1) {
		return
	}

	if (value > 15) {
		return
	}

	imageInput.innerHTML = ''

	for (let i = 0; i < value; i++) {
		const input = document.createElement('input')
		input.setAttribute('type', 'file')
		input.setAttribute('name', `image${i}`)
		input.setAttribute('accept', 'image/png, image/jpeg')
		const label = document.createElement('label')
		label.textContent = 'Zdjęcie'
		const p = document.createElement('p')

		p.appendChild(label)
		p.appendChild(input)

		imageInput.appendChild(p)
	}
})
