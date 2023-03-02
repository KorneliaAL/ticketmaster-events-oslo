export default function RenderEvents(data) {
	const container = document.querySelector('.events');

	if (container) {
		data.forEach(event => {
			renderHTML(event);
		});
	}

	function renderHTML(event) {
		const eventContainer = document.createElement('div');
		const image = document.createElement('img');

		const infoContainer = document.createElement('div');

		const dateContainer = document.createElement('div');
		const date = document.createElement('div');
		const timeContainer = document.createElement('div');
		const timeIcon = document.createElement('div');
		const time = document.createElement('span');

		const info = document.createElement('div');
		const artistName = document.createElement('div');
		const locationContainer = document.createElement('div');
		const locationIcon = document.createElement('div');
		const location = document.createElement('span');

		const buyButtonContainer = document.createElement('div');
		const buyButton = document.createElement('button');

		eventContainer.classList.add('events__artist');
		infoContainer.classList.add('events__info-container');
		dateContainer.classList.add('events__date-container');
		date.classList.add('events__date');
		timeContainer.classList.add('events__time');
		timeIcon.classList.add('events__clock-icon');
		info.classList.add('events__info');
		artistName.classList.add('events__artist-name');
		locationContainer.classList.add('events__location');
		locationIcon.classList.add('events__location-icon');
		buyButtonContainer.classList.add('events__buy-container');
		buyButton.classList.add('events__buy-button');

		image.setAttribute('src', event.image[4].url);
		date.innerText = event.date;
		time.innerText = event.time;
		artistName.innerText = event.artist;
		location.innerText = event.venue.venues[0].name;
		buyButton.innerText = 'kjøp';
	}
}
