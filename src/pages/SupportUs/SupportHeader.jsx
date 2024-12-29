import { Button } from '/src/components/Button/Button';
import AnimateOnScroll from '../../components/AnimateOnScroll/AnimateOnScroll';
import fanimani from '/src/assets/images/fanimani.webp';
import fanimani_pdf from '/src/assets/pdfs/fanimani.pdf';
import './SupportUs.scss';

const SupportHeader = () => {
	return (
		<header className='supportUs__header section wrapper'>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-big'></div>
			<div className='section-ball section-ball-big'></div>
			<div className='section-ball section-ball-big'></div>
			<div className='section-ball section-ball-small'></div>

			<AnimateOnScroll direction='up'>
				<h1>WSPIERAJ NAS</h1>
				<p>Wspólnymi siłami stworzyliśmy miejsce dla edukacji marzeń, by wspólnie rozwijać kreatywność, uczyć się i wspierać.</p>
			</AnimateOnScroll>

			<AnimateOnScroll direction='right'>
				<div className='supportUs__header__cards'>
					<div className='supportUs__header__cards__card'>
						<i className='fa-solid fa-handshake-angle'></i>

						<p className='supportUs__header__cards__card-title'>
							<strong>Wsparcie</strong>
						</p>

						<p className='supportUs__header__cards__card-text'>
							Dzięki Państwa wsparciu, pomocy Darczyńców, Firm i Fundacji mogliśmy stworzyć ten projekt.
						</p>
					</div>

					<div className='supportUs__header__cards__card'>
						<i className='fa-solid fa-child-reaching'></i>

						<p className='supportUs__header__cards__card-title'>
							<strong>Dzieci i młodzież</strong>
						</p>

						<p className='supportUs__header__cards__card-text'>
							Fundacja Serca Kreacja jest polską organizacją pozarządową prowadzącą działalności na rzecz dzieci i młodzieży oraz edukacji, oświaty i
							wychowania.
						</p>
					</div>

					<div className='supportUs__header__cards__card'>
						<i className='fa-solid fa-hand-holding-dollar'></i>

						<p className='supportUs__header__cards__card-title'>
							<strong>Darowizny</strong>
						</p>

						<p className='supportUs__header__cards__card-text'>
							Darowizny możemy przekazywać przez cały rok - w każdej chwili i możemy skorzystać z odpisu podatkowego za dany rok.Warunkiem odliczenia
							(do 6% od dochodu) jest wpłata darowizny na konto bankowe organizacji.
						</p>
					</div>

					<div className='supportUs__header__cards__card'>
						<i className='fa-solid fa-bookmark'></i>

						<p className='supportUs__header__cards__card-title'>
							<strong>Pamiętaj</strong>
						</p>

						<p className='supportUs__header__cards__card-text'>
							Należy pamiętać, iż w przypadku gdy przedmiotem darowizny są pieniądze, to powinna ona być udokumentowana dowodem wpłaty na rachunek
							bankowy obdarowanej organizacji.
						</p>
					</div>
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll direction='left'>
				<h2>
					Prosimy o darowizny na cele statutowe <br />
					<span className='supportUs__header-h2-color'>74 1140 1078 0000 4946 9900 1001 Mbank</span>
				</h2>

				<div className='supportUs__header-img'>
					<a href={fanimani_pdf} target='_blank'>
						<img src={fanimani} alt='Dołącz do osób, które bezpłatnie wspierają Fundację Serca Kreacja przy okazji zakupów online' />
					</a>
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll direction='right'>
				<p className='section-hp'>MOŻESZ SKORZYSTAĆ Z PRZYCISKU PONIŻEJ, Z CZEGO MY ZYSKAMY DODATKOWE 5 ZŁ</p>

				<div className='supportUs__header-button'>
					<Button href='https://fanimani.pl/zaproszenie/80945/0607e55a1bfc4800a6cd2a0a991b06ad/' target='_blank'>
						fanimani
					</Button>
				</div>
			</AnimateOnScroll>
		</header>
	);
};

export default SupportHeader;
