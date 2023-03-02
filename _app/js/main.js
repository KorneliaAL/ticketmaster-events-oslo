import Header from './modules/header.js';
import FetchEvents from './modules/fetch-events.js';
import RenderEvents from './modules/render-events.js';

Header();
const eventData = await FetchEvents();
RenderEvents(eventData);
