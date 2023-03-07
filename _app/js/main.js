import Header from './modules/header.js';
import FetchEvents from './modules/fetch-events.js';
import RenderEvents from './modules/render-events.js';
import FilterEvents from './modules/filter-events.js';
import CreateGenreButtons from './modules/create-genre-buttons.js';

Header();
const eventData = await FetchEvents();
RenderEvents(eventData);
CreateGenreButtons();
// FilterEvents(eventData);
