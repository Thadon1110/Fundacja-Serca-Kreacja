import AnimateOnScroll from '../../components/AnimateOnScroll/AnimateOnScroll';
import img5 from '/src/assets/images/img5.webp';
import './Home.scss';

const School = () => {
	return (
		<section className='home__school section'>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-big'></div>
			<div className='section-ball section-ball-big'></div>

			<AnimateOnScroll direction='left'>
				<div className='home__school__content'>
					<div className='home__school__content-img'>
						<img src={img5} alt='' />
					</div>
					<div className='home__school__content__text'>
						<div className='section__header'>
							<p>szkoła marzeń tworzona przez dzieci</p>
							<h2>innowacyjna forma nauki stacjonarno - internetowa</h2>
						</div>
						<div className='section__text'>
							Miejsce dla edukacji marzeń Serca Kreacja - tworzona przez dzieci i zaangażowanych rodziców.
							<br />
							<br />
							W Tarnowskich Górach powstaje miejsce, w którym dzieci z „edukacji domowej” znajdą dla siebie miejsce spotkań, by wspólnie uczyć się
							przy wsparciu nauczycieli-mentorów, rozwijać kreatywność podczas wspólnych projektów i spędzać ze sobą czas.
							<br />
							<br />
							Dlaczego tworzymy miejsce zwane szkołą marzeń tylko dla dzieci w edukacji domowej? Ponieważ tylko taka forma pozwala nam na
							wykorzystanie kreatywnych metod nauczania i zdobywanie wiedzy poprzez dyskusję w grupie, z nauczycielami-opiekunami oraz uczenie się
							poprzez inspirację.
							<br />
							<br />W naszej szkole marzeń nie ma systemu kar ani nagród - w zamian jest wspieranie motywacji wewnętrznej dziecka.W naszej szkole nie
							ma testów, sprawdzianów i zadań domowych - w zamian jest wymiana doświadczeń, swobodna dyskusja i zabawa.W naszej szkole nie ma
							nauczycieli z dziennikiem i ocenami - w zamian są mentorzy, którzy pomagają dziecku zrozumieć po co ma zdobywać wiedzę i rozwijać swoje
							talenty.
						</div>
					</div>
				</div>
			</AnimateOnScroll>
		</section>
	);
};

export default School;
