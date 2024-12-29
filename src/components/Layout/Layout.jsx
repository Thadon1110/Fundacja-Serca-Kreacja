import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children, nav }) => {
	return (
		<>
			<Navbar menuActive={nav} />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
