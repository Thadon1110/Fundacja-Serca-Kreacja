import { Button } from '/src/components/Button/Button';
import AnimateOnScroll from '../../components/AnimateOnScroll/AnimateOnScroll';
import img1 from '/src/assets/images/img1.webp';
import img2 from '/src/assets/images/img2.webp';
import img3 from '/src/assets/images/img3.webp';
import img4 from '/src/assets/images/img4.webp';
import './Home.scss';

const HeaderSection = () => {
	return (
		<header className='home__header section wrapper'>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-big'></div>
			<div className='section-ball section-ball-big'></div>
			<div className='section-ball section-ball-big'></div>
			<div className='section-ball section-ball-big'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>

			<AnimateOnScroll direction='up'>
				<h1>
					FUNDACJA <br /> SERCA KREACJA
				</h1>
				<p>Pozwól nam pokazać Twojemu dziecku jak nauka może być czymś przyjemnym</p>
				<div className='home__header__buttons'>
					<Button href='/wspieraj-nas'>wspieraj nas</Button>
					<Button href='/kontakt'>kontakt</Button>
				</div>
			</AnimateOnScroll>
			
			<AnimateOnScroll direction='down'>
				<div className='home__header__photos'>
					<img src={img1} alt='' />
					<img src={img2} alt='' />
					<img src={img3} alt='' />
					<img src={img4} alt='' />
				</div>
			</AnimateOnScroll>
		</header>
	);
};

export default HeaderSection;
