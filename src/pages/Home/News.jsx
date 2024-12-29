import AnimateOnScroll from '../../components/AnimateOnScroll/AnimateOnScroll';
import business_woman_page_0001 from '/src/assets/images/20210809-business-woman_page-0001.webp';
import gwarek_page_0001 from '/src/assets/images/20221028-gwarek_page-0001.webp';
import gwarek_pdf from '/src/assets/pdfs/20221028-gwarek.pdf';
import business_woman_pdf from '/src/assets/pdfs/20210809-business-woman.pdf';
import './Home.scss';

const News = () => {
	return (
		<section className='home__news section'>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-big'></div>

			<AnimateOnScroll direction='right'>
				<div className='section__header'>
					<p>prasa</p>
					<h2>
						tak o nas piszą <br /> w artykułach prasowych
					</h2>
				</div>

				<div className='home__news__photos'>
					<a href={business_woman_pdf} target='_blank' rel='noopener noreferrer'>
						<img src={business_woman_page_0001} alt='Fragment z gazety na temat nieszkoły czyli szkoły marzeń' />
					</a>
					<a href={gwarek_pdf} target='_blank' rel='noopener noreferrer'>
						<img
							src={gwarek_page_0001}
							alt='Fragment z gazety na temat serduszkowej nieszkoły - innowacyjnej formie nauki stacjonarnej - od zabawy doi wiedzy'
						/>
					</a>
				</div>
			</AnimateOnScroll>
		</section>
	);
};

export default News;
