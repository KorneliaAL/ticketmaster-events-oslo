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

		
	}
}
