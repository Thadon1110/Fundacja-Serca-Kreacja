import AnimateOnScroll from '../../components/AnimateOnScroll/AnimateOnScroll';
import './Contact.scss';

const ContactHeader = () => {
	return (
		<header className='contact__header section wrapper'>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-small'></div>
			<div className='section-ball section-ball-big'></div>
			<div className='section-ball section-ball-big'></div>
			<div className='section-ball section-ball-big'></div>
			<div className='section-ball section-ball-small'></div>

			<AnimateOnScroll direction='up'>
				<h1>KONTAKT</h1>
				<h2>
					<a href='mailto:fundacja@sercakreacja.pl'>fundacja@sercakreacja.pl</a>
				</h2>
			</AnimateOnScroll>

			<AnimateOnScroll direction='down'>
				<div className='contact__header__mail'>
					<div className='contact__header__mail__bgc'>
						<i className='fa-regular fa-clock'></i>
						<i className='fa-solid fa-pencil'></i>
						<i className='fa-solid fa-paintbrush'></i>
						<i className='fa-solid fa-calculator'></i>
						<i className='fa-solid fa-book'></i>
						<i className='fa-regular fa-clock'></i>
						<i className='fa-solid fa-pencil'></i>
					</div>

					<p>Masz pytania? Chcesz zostać sponsorem Fundacji? Napisz do nas!</p>

					<form action=''>
						<div className='contact__header__mail__inputs'>
							<input type='text' name='name' placeholder='Imię i Nazwisko' required />
							<input type='email' name='email' placeholder='Adres e-mail' required />
						</div>

						<textarea name='message' placeholder='Treść wiadomości' required></textarea>

						<button type='submit'>Wyślij</button>
					</form>
				</div>
			</AnimateOnScroll>
		</header>
	);
};

export default ContactHeader;
