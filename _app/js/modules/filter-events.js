// import FilterEvents from "./filter-events";
import RenderEvents from "./render-events.js";
export default function FilterEvents(data) {
	const sectionContainer = document.querySelector('.events__container');
	const buttonContainer = document.querySelector('.events__filter-element-container');
	const genreButtons = [
		{
			name: 'Alle'
		},
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
		},
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
			name: 'Electronic'
		}
	];

	if (buttonContainer) {
		renderHTML();
	}

	function handleButtonElementClick(event) {
		const currentGenre = event.target.innerText;
		const currentButton = event.target;
		const allButtons = event.target.parentElement.childNodes;
		toggleClass(allButtons, currentButton);
		filterEvents(currentGenre);
	}

	function toggleClass(buttons, currentButton) {
		buttons.forEach(button => {
			button.classList.remove('events__filter-element-button--active');
		});
		currentButton.classList.add('events__filter-element-button--active');
	}

	function filterEvents(currentGenre) {
		let filteredEvents = [];
		switch (currentGenre) {
			case 'Alle': 
				filteredEvents = data;
				break;

			case 'Theatre':
				filteredEvents = data.filter(event => event.genre[0].genre.name=== 'Theatre');
				break;

			case 'Alternative':
				filteredEvents = data.filter(event => event.genre[0].genre.name=== 'Alternative');
				break;
			
			case 'Classical':
				filteredEvents = data.filter(event => event.genre[0].genre.name=== 'Classical');
				break;
			
			case 'Theatre':
				filteredEvents = data.filter(event => event.genre[0].genre.name=== 'Theatre');
				break;

			case 'Rock':
				filteredEvents = data.filter(event => event.genre[0].genre.name=== 'Rock');
				break;

			case 'Folk':
				filteredEvents = data.filter(event => event.genre[0].genre.name=== 'Folk');
				break;

			case 'Pop':
				filteredEvents = data.filter(event => event.genre[0].genre.name=== 'Pop');
				break;

			case 'Cultural':
				filteredEvents = data.filter(event => event.genre[0].genre.name=== 'Cultural');
				break;

			case 'Jazz':
				filteredEvents = data.filter(event => event.genre[0].genre.name=== 'Jazz');
				break;

			case 'World':
				filteredEvents = data.filter(event => event.genre[0].genre.name=== 'World');
				break;

			case 'Dance':
				filteredEvents = data.filter(event => event.genre[0].genre.name=== 'Dance');
				break;

			case 'Hip-Hop/Rap':
				filteredEvents = data.filter(event => event.genre[0].genre.name=== 'Hip-Hop/Rap');
				break;

			case 'Blues':
				filteredEvents = data.filter(event => event.genre[0].genre.name=== 'Blues');
				break;

			case 'Electronic':
				filteredEvents = data.filter(event => event.genre[0].genre.name=== 'Dance/Electronic');
				break;
		}

		sectionContainer.innerText = '';
		RenderEvents(filteredEvents);
	}
			
	function returnButtonDOMElement(button) {
		const buttonElement = document.createElement('button');
		buttonElement.classList.add('events__filter-element-button');
		buttonElement.innerText = button.name;

		buttonElement.addEventListener('click', handleButtonElementClick);
		return buttonElement; 
	}

	function renderHTML() {
		genreButtons.forEach(button => {
			const buttonElement = returnButtonDOMElement(button);
			buttonContainer.appendChild(buttonElement);	
		});
	}
}