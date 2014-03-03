list = document.getElementById 'list'

template = Handlebars.compile document.getElementById('listItem').innerHTML

randomColor = ->
	chars = '0123456789ABCDEF'.split ''

	color = '#'

	color += chars[Math.round(Math.random() * 15)] while color.length < 7

	color

texts = ['Meow!', 'Purrr!']

for i in [0..60]
	list.innerHTML += template
		image: (i % 15)+1
		color: randomColor()
		text: texts[Math.floor(Math.random() * texts.length)]

# For touch devices

if 'ontouchstart' in document.windowElement
	elements = list.getElementsByTagName 'a'
	
	for elm in elements
		elm.addEventListener 'click', (e) ->
			return if this.classList.contains 'hover'
			
			e.preventDefault()

			for _elm in elements
				_elm.classList.remove 'hover'

			this.classList.add 'hover'