import React from "react";
import Carousel from './components/carousel';
import HomeAbout from './components/homeaboutsection';

class App extends React.Component {
	render() {

		return (
			<div className="home_wrapper">
				<Carousel />
				<HomeAbout />
			</div>
		)
	}
}
export default App;
