import { Helmet } from 'react-helmet-async';
import Layout from '../../components/Layout/Layout';
import ContactHeader from './ContactHeader';
import './Contact.scss';

const Contact = () => {
	return (
		<>
			<Helmet>
				<title>Fundacja Serca Kreacja - Kontakt</title>
			</Helmet>

			<Layout nav='contact'>
				<ContactHeader />
			</Layout>
		</>
	);
};

export default Contact;
