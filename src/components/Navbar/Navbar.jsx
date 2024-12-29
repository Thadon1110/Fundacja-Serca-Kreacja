import { useState, useEffect } from 'react';
import logo from '/src/assets/images/logo.webp';
import './Navbar.scss';

const Navbar = ({ menuActive }) => {
	const [isMenuActive, setMenuActive] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// Obsługa blokowania przewijania
	useEffect(() => {
		if (isMenuActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		// Clean-up na odmontowanie komponentu
		return () => {
			document.body.style.overflow = '';
		};
	}, [isMenuActive]);

	return (
		<nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
			<div className='navbar__information'>
				<p>
					Prosimy o darowizny na cele statutowe <span className='navbar__information-color'>74 1140 1078 0000 4946 9900 1001 Mbank</span>
				</p>
			</div>

			<div className='navbar__main wrapper'>
				<div className='navbar__logo'>
					<a href='/'>
						<img src={logo} alt='Logo Fundacja Serca Kreacja' className={`${isScrolled ? 'logo-scrolled' : ''}`} />
					</a>
				</div>
				<div className={`navbar__menu ${isScrolled ? 'navbar__menu-scrolled' : ''}`}>
					<button onClick={() => setMenuActive(true)}>
						<i className='fa-solid fa-bars' aria-label='Menu'></i>
					</button>
				</div>
				<div className={`navbar__links ${isScrolled ? 'navbar__links-scrolled' : ''}`}>
					<a href='/' className={menuActive == 'home' ? 'navbar__links-active' : ''}>
						FUNDACJA
					</a>
					<a href='https://allegro.pl/uzytkownik/sercakreacja' target='_blank' rel='noopener noreferrer'>
						NASZE AUKCJE
					</a>
					<a href='/wspieraj-nas' className={menuActive == 'supportus' ? 'navbar__links-active' : ''}>
						WSPIERAJ NAS
					</a>
					<a href='/kontakt' className={menuActive == 'contact' ? 'navbar__links-active' : ''}>
						KONTAKT
					</a>
				</div>
			</div>

			<div className={`navbar__open ${isMenuActive ? 'navbar__open-opened' : ''}`}>
				<div className='navbar__open-close'>
					<button onClick={() => setMenuActive(false)}>
						<i className='fa-solid fa-x'></i>
					</button>
				</div>
				<div className='navbar__open__links'>
					<a href='/'>FUNDACJA</a>
					<a href='https://allegro.pl/uzytkownik/sercakreacja' target='_blank' rel='noopener noreferrer'>
						NASZE AUKCJE
					</a>
					<a href='/wspieraj-nas'>WSPIERAJ NAS</a>
					<a href='/kontakt'>KONTAKT</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
