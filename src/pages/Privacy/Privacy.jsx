import { Helmet } from 'react-helmet-async';
import Layout from '../../components/Layout/Layout';
import PrivacyHeader from './PrivacyHeader';
import './Privacy.scss';

const Privacy = () => {
	return (
		<>
			<Helmet>
				<title>Fundacja Serca Kreacja - Polityka Prywatności</title>
			</Helmet>

			<Layout>
				<PrivacyHeader />
			</Layout>
		</>
	);
};

export default Privacy;
