import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Apparels from './ApparelsComponent';
import {MEN} from '../shared/db';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
			men: MEN
		}
	}

	render() {
		const HomePage = () => {
			return(
				<Home />
			);
		}
		return(
		<div>
			<Header />
			<Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/menu" component={Menu} />
              <Route path="/men" component = {() => <Apparels list={this.state.men} category="Men" /> } />
              <Redirect to="/home" />
            </Switch>
            <Footer />
		</div>
		);
	}
}

export default Main;