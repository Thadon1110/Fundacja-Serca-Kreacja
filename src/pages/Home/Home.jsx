import { Helmet } from 'react-helmet-async';
import Layout from '../../components/Layout/Layout';
import HeaderSection from './HeaderSection';
import Donors from './Donors';
import News from './News';
import Bbms from './Bbms';
import History from './History';
import School from './School';
import './Home.scss';

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Fundacja Serca Kreacja - Strona Główna</title>
			</Helmet>

			<Layout nav='home'>
				<HeaderSection />

				<main className='wrapper'>
					<Donors />
					<News />
					<Bbms />
					<History />
					<School />
				</main>
			</Layout>
		</>
	);
};

export default Home;
