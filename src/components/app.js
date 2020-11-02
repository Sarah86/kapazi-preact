import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Footer from './footer';
import Thermodeck from '../routes/thermodeck';
import Softtech from '../routes/softtech';
import Vinilkap from '../routes/vinilkap';
import Nauticotrancado from '../routes/nauticotrancado';
import Nauticlean from '../routes/nauticlean';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Thermodeck path="/thermodeck/" />
			<Softtech path="/softtech/" />
			<Vinilkap path="/vinilkap/" />
			<Nauticotrancado path="/nauticotrancado/"/>
			<Nauticlean path="/nauticlean/"/>
		</Router>
		<Footer/>
	</div>
)

export default App;
