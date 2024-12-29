import { Helmet } from 'react-helmet-async';
import Layout from '../../components/Layout/Layout';
import SupportHeader from './SupportHeader';
import './SupportUs.scss';

const SupportUs = () => {
	return (
		<>
			<Helmet>
				<title>Fundacja Serca Kreacja - Wspieraj Nas</title>
			</Helmet>

			<Layout nav='supportus'>
				<SupportHeader />
			</Layout>
		</>
	);
};

export default SupportUs;
