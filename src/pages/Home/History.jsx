import AnimateOnScroll from '../../components/AnimateOnScroll/AnimateOnScroll';
import history from '/src/assets/images/history.webp';
import './Home.scss';

const History = () => {
	return (
		<section className='home__history section'>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-big'></div>
			<div className='section-ball section-ball-big'></div>

			<AnimateOnScroll direction='right'>
				<div className='section__header'>
					<p>historia</p>
					<h2>
						jak to się <br /> wszystko zaczęło?
					</h2>
				</div>

				<div className='home__history__content'>
					<div className='home__history__content-img'>
						<img src={history} alt='Joanna Idzikowska' />
					</div>
					<div className='home__history__content__text'>
						<div className='section__text'>
							Na pomysł założenia <b>Fundacji “serca kreacja”</b> WPADŁAM jesienią pod wpływem wszechogarniającego mnie znużenia obecną edukacją
							dostępną dla dzieci i młodzieży. Napisałam do <b>Pani Barbary Gierak-Pawlak</b> Dyrektor I Liceum Ogólnokształcącego im. S.
							Sempołowskiej z pytaniem, czy nie chciałaby uczestniczyć w projekcie innowacyjnej klasy, który wykreowałyśmy razem z{' '}
							<b>dr. Sonią Szramek-Karcz</b> po konferencji <b>“Dobry Lider”</b>. Na moje szczęście trafiłam w dziesiątkę, ponieważ Pani dyrektor
							chciała otworzyć klasę dwujęzyczną i tak po kilku spotkaniach narodził się piękny cel edukacyjny do zrealizowania. W międzyczasie
							okazało się, że edukacja online i usilne przeniesienie szkoły do internetu jest ogromnym kłopotem nie tylko dla dzieci, ich rodziców,
							ale również dla nauczycieli. Przyznam z trudem, iż sama poddałam się widząc jakie oblicze posiada aktualnie szkoła.
							<br />
							<br />Z tego powodu
							<b>
								<time dateTime='2021-03-11'> 11 marca 2021 </time>
							</b>
							przeniosłam własne dzieci do szkoły przyjaznej edukacji domowej, a potrzeba stworzenia fundacji stała się jeszcze bardziej nagląca.
							<b>Fundacja Serca Kreacja</b> została założona
							<b>
								<time dateTime='2021-03-29'> 29 marca 2021 </time>
							</b>
							w <b>Tarnowskich Górach</b> i wpisana do KRS.
						</div>
					</div>
				</div>
			</AnimateOnScroll>
		</section>
	);
};

export default History;
