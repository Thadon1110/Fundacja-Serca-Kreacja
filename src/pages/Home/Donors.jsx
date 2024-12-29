import AnimateOnScroll from '../../components/AnimateOnScroll/AnimateOnScroll';
import logo_trawialnia from '/src/assets/images/logo_trawialnia.webp';
import logo_rgb_iceservice from '/src/assets/images/logo_rgb_iceservice.webp';
import logo_otwarta_www from '/src/assets/images/logo-otwarta-www.webp';
import './Home.scss';

const Donors = () => {
	return (
		<section className='home__donors section'>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-big'></div>

			<AnimateOnScroll direction='left'>
				<p className='section-hp'>nasi darczyńscy</p>

				<div className='home__donors__photos'>
					<a href='https://trawialnia.eu/' target='_blank' rel='noopener noreferrer'>
						<img src={logo_trawialnia} alt='Logo Trawialnia.eu - trawienie & pasywacja' />
					</a>
					<a href='http://www.icservice.pl/' target='_blank' rel='noopener noreferrer'>
						<img src={logo_rgb_iceservice} alt='Logo ICService' />
					</a>
					<a href='https://otwarteszkoly.eu/' target='_blank' rel='noopener noreferrer'>
						<img src={logo_otwarta_www} alt='Logo Otwarta Szkoła - podstawowa & liceum' />
					</a>
				</div>
			</AnimateOnScroll>
		</section>
	);
};

export default Donors;
