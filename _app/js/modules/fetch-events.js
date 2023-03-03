export default async function FetchEvents() {
	let city = 'oslo';
	let size = 50;
	const key = 'QrmIRWJJfz1HAPOvekvhGGXMtrbalL7c';
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
			image: event.images,
			timeStamp: event.dates.start.dateTime,
			url: event.url
		}
	});


	return filteredData;
}

// image.setAttribute('src', event.image.find(image => image.width > 600)?.url);
// buyButton.setAttribute('href', event.url);
// buyButton.setAttribute('target', _blank);

// const _blank = '_blank';