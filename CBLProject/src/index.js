import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Carousel from './containers/Carousel.js';
import store from './store';

class CloveYou extends Component{
	render(){
		return <Provider store={store}>
			<Carousel data={this.state} />
		</Provider>;
	}
}

ReactDOM.render(<CloveYou />,document.getElementById('content'));