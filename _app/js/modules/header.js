export default function Header() {
	let navigationVisible = false;

	const headerNavigation = document.querySelector('.header__navigation');
	const headerButtonMenu = document.querySelector('.header__navigation-menu-button');

	headerButtonMenu.addEventListener('click', handleHeaderButtonMenuClick);

	function handleHeaderButtonMenuClick(event) {
		toggleNavigation();
		renderHTML();
	}

	function toggleNavigation() {
		navigationVisible = !navigationVisible;
	}

/**
 * @todo add changes to burger icon to exit icon, and vice versa
 */
	function renderHTML() {
		if (navigationVisible === true) {
			headerNavigation.classList.add('header__navigation--visible');
			headerButtonMenu.classList.remove('.header__navigation-menu-button')
			headerButtonMenu.classList.add('header__navigation-exit-button')
			headerButtonMenu.setAttribute('aria-label', 'Lukk');

		} else if (navigationVisible === false){
			headerNavigation.classList.remove('header__navigation--visible');
			headerButtonMenu.classList.remove('header__navigation-exit-button');
			headerButtonMenu.classList.add('header__navigation-menu-button')
			headerButtonMenu.setAttribute('aria-label', 'Meny');
		}
	}
}