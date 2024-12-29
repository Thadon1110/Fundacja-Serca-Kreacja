import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import SupportUs from './pages/SupportUs/SupportUs';
import Privacy from './pages/Privacy/Privacy';
// eslint-disable-next-line no-unused-vars
import preview from '/src/assets/images/preview.png';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/kontakt' element={<Contact />} />
				<Route path='/wspieraj-nas' element={<SupportUs />} />
				<Route path='/polityka-prywatnosci' element={<Privacy />} />
			</Routes>
		</Router>
	);
};

export default App;
