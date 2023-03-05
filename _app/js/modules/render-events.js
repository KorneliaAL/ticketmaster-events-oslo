export default function RenderEvents(data) {
	const container = document.querySelector('.events__container');
	let eventMonth = '';
	let eventDay = '';
	let eventDate = '';
	let eventTime = '';

	if (container) {
		data.forEach(event => {
			formatDate(event);
			renderHTML(event);
		});
	}

	function formatDate(event) {
		const getDate = event.date.split('-');
		const getTime = event.time.split(':');
		eventTime = `${getTime[0]}:${getTime[1]}`;
		eventDate = getDate[2];

		const timeStamp = event.timeStamp;
		const formatedDate = new Date(timeStamp);
		const days = [
			'Søndag',
			'Mandag',
			'Tirsdag',
			'Onsdag',
			'Torsdag',
			'Fredag',
			'Lørdag'];

		const months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"Mai",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Okt",
			"Nov",
			"Des",
		];
		const weekday = days[formatedDate.getDay()];

		const finalMonth = months[formatedDate.getMonth()];

		eventDay = weekday;
		eventMonth = finalMonth;
	}

	function renderHTML(event) {
		const _blank = '_blank';

		const eventContainer = document.createElement('div');
		const image = document.createElement('img');

		const infoContainer = document.createElement('div');

		const dateContainer = document.createElement('div');
		const day = document.createElement('div');
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
		const buyButton = document.createElement('a');

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

		image.setAttribute('src', event.image.find(image => image.width > 610)?.url);
		buyButton.setAttribute('href', event.url);
		buyButton.setAttribute('target', _blank);

		
		date.innerText = `${eventDate} ${eventMonth}`;
		day.innerText = eventDay
		time.innerText = eventTime;
		artistName.innerText = event.artist;
		location.innerText = event.venue.venues[0].name;
		buyButton.innerText = 'kjøp';

		timeContainer.appendChild(timeIcon);
		timeContainer.appendChild(time);
		dateContainer.appendChild(day);
		dateContainer.appendChild(date);
		dateContainer.appendChild(timeContainer);


		info.appendChild(artistName);
		locationContainer.appendChild(locationIcon);
		locationContainer.appendChild(location);
		info.appendChild(locationContainer);

		buyButtonContainer.appendChild(buyButton)

		infoContainer.appendChild(dateContainer);
		infoContainer.appendChild(info);
		infoContainer.appendChild(buyButtonContainer);

		eventContainer.appendChild(image);
		eventContainer.appendChild(infoContainer);

		container.appendChild(eventContainer);
	}
}
