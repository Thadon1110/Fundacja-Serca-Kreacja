import statut_fundacji_serca_kreacja from '/src/assets/pdfs/statut-fundacji-serca-kreacja.pdf';
import './Footer.scss';

const Footer = () => {
	return (
		<nav className='footer'>
			<div className='footer__content wrapper'>
				<div className='footer__content__links'>
					<a href='/polityka-prywatnosci'>polityka prywatności</a>
					<a href={statut_fundacji_serca_kreacja} target='_blank' rel='noopener noreferrer'>
						statut fundacji
					</a>
				</div>

				<div className='footer__content__copy'>
					<p>
						&copy; <span className='footer__copy-date'>2025</span> fundacja serca kreacja. all rights reserved.
					</p>
				</div>
			</div>
		</nav>
	);
};

export default Footer;
