export default async function FetchEvents() {
	let city = 'oslo';
	let size = 200;
	const key = 'r0y0Y9JY3l9MjW0ntmnIo0RMSfK7eoZu';
	const endpoint = `https://app.ticketmaster.com/discovery/v2/events?apikey=${key}&locale=*&size=${size}&city=${city}&countryCode=NO&segmentName=music`;

	const response = await fetch(endpoint);
	const result = await response.json();
	const events = result._embedded.events;
	const filteredData = events.map(event => {
		return {
			artist: event.name,
			venue: event._embedded,
			genre: event.classifications,
			minPrice: event.priceRanges,
			date: event.dates.start.localDate,
			time: event.dates.start.localTime,
			image: event.images
		}
	});

	return filteredData;
	// const container = document.querySelector('.events');

	// result._embedded.events.forEach(event => {
	// 		const img = document.createElement('img');
	// 		img.setAttribute('src', event.images[3].url);

	// 	img.classList.add('event__img');
	// 		container.appendChild(img);
		
	// });

	// console.log(result._embedded.events);
}