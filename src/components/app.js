import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from '@preact/prerender-data-provider';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Footer from './footer';
import Thermodeck from '../routes/thermodeck';
import Softtech from '../routes/softtech';
import Vinilkap from '../routes/vinilkap';
import Nauticotrancado from '../routes/nauticotrancado';
import Nauticlean from '../routes/nauticlean';
import NotFound from '../routes/404';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render(props){

	return(
		<Provider value={props}>
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Thermodeck path="/thermodeck" />
					<Softtech path="/softtech/" />
					<Vinilkap path="/vinilkap" />
					<Nauticotrancado path="/nauticotrancado"/>
					<Nauticlean path="/nauticlean"/>
					<NotFound type="404" default />
				</Router>
				<Footer/>
			</div>
		</Provider>
	)}
}