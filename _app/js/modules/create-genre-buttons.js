export default function CreateGenreButtons() {
	const buttonContainer = document.querySelector('.events__filter-element-container');
	const genreButtons = [
		{
			name: 'Theatre'
		},
		{
			name: 'Alternative'
		},
		{
			name: 'Classical'
		},
		{
			name: 'Theatre'
		},
		{
			name: 'Rock'
		},
		{
			name: 'Folk'
		},
		{
			name: 'Pop'
		},
		{
			name: 'Cultural'
		}
		,
		{
			name: 'Jazz'
		},
		{
			name: 'World'
		},
		{
			name: 'Folk'
		},
		{
			name: 'Dance'
		},
		{
			name: 'Hip-Hop/Rap'
		},
		{
			name: 'Blues'
		},
		{
			name: 'Dance/Electronic'
		}
	];


	if (buttonContainer) {
		renderHTML();
	}
			
	function returnButtonDOMElement(button) {
		const buttonElement = document.createElement('button');
		buttonElement.classList.add('events__filter-element-button');
		buttonElement.innerText = button.name;

		return buttonElement; 
	}

	function renderHTML() {
		genreButtons.forEach(button => {
			const buttonElement = returnButtonDOMElement(button);
			buttonContainer.appendChild(buttonElement);	
		});
	}
}