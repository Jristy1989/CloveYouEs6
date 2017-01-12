import React,{Component} from 'react';
import cui from './cui.scss';

class CenteredHead extends Component{
	render(){
		return (
			<h3 className={cui.centeredheading}><span>{this.props.title}</span></h3>
		)
	}
}

export default CenteredHead;