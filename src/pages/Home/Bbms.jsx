import AnimateOnScroll from '../../components/AnimateOnScroll/AnimateOnScroll';
import joanna from '/src/assets/images/K47A27441.webp';
import './Home.scss';

const Bbms = () => {
	return (
		<section className='home__bbms section'>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-big'></div>
			<div className='section-ball section-ball-big'></div>
			<div className='section-ball section-ball-big'></div>

			<AnimateOnScroll direction='left'>
				<div className='home__bbms__content'>
					<div className='home__bbms__content-img'>
						<img src={joanna} alt='Joanna Idzikowska' />
					</div>
					<div className='home__bbms__content__text'>
						<div className='section__header'>
							<p>inspiracja oraz innowacja</p>
							<h2>konferencja big business meets science 4</h2>
						</div>
						<div className='section__text'>
							<b>Wykorzystaj siłę</b> postępu naukowego i wykorzystaj go do podniesienia wydajności swojej organizacji. Odkryj najnowsze przełomy i
							innowacyjne rozwiązania, które zrewolucjonizują dziedzinę pasywacji stali. Dzięki silnemu naciskowi naszego wydarzenia na wiedzę naukową
							uzyskasz bezcenne spostrzeżenia, które zmienią Twoje podejście do zapobiegania korozji i ochrony przed korozją.
							<br />
							<br />
							Wzmocnij swoją organizację dzięki narzędziom, strategiom i partnerstwom niezbędnym do maksymalizacji wydajności i skuteczności.
							<b>„Big Business Meets Science”</b> to wyjątkowa okazja, aby uczyć się od liderów branży i wykorzystać ich wiedzę, aby napędzać swoją
							firmę do przodu. Nawiąż kontakt z wpływowymi przedstawicielami i nawiąż relacje, które będą napędzać przyszłą współpracę i rozwój.
							<br />
							<br />
							<b>„Big Business Meets Science”</b> to też charytatywna gala, której celem jest zrewolucjonizowanie edukacji w Polsce poprzez
							innowacyjny projekt niezależnej szkoły domowej. Uczestnicząc w tym wydarzeniu, przyczynisz się do bardzo potrzebnej reformy edukacji w
							kraju. Wspierając <b>„Big Business Meets Science”</b> bezpośrednio przyczyniasz się do rozwoju edukacji w Polsce. Wspierany przez nas
							innowacyjny projekt niezależnej szkoły domowej ma na celu zapewnienie uczniom transformującego środowiska uczenia się, sprzyjającego
							kreatywności, krytycznemu myśleniu i rozwojowi osobistemu.
						</div>
					</div>
				</div>
			</AnimateOnScroll>
		</section>
	);
};

export default Bbms;
