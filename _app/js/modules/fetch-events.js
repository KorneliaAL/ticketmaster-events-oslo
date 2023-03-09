import { tm_token } from "../env.js";
export default async function FetchEvents() {
	
	let city = 'oslo';
	let size = 198;
	const x = tm_token;
	const endpoint = `https://app.ticketmaster.com/discovery/v2/events?apikey=${x}&locale=*&size=${size}&city=${city}&countryCode=NO&segmentName=music`;

	const response = await fetch(endpoint);	

	try {
		return await handleResponse(response)
	} catch (error) {
		const container = document.querySelector('.events');
		container.textContent = error.message;
	}

	async function	handleResponse(response) {
		if (response.ok) {
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
		} else if (response.status === 401) {
			throw new Error('Beklager, du har ikke tilgang til denne siden');
		} else if (response.status === 404) {
			throw new Error ('Denne siden finnes ikke');
		} else if (response.status > 499) {
			throw new Error('Server er nede, prøv igjen senere');
		} else {
			throw new Error('Noe gikk galt, prøv igjen senere');
		}
	}
}

