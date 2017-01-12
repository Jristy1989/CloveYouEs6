import React,{Component} from 'react';
import cui from './cui.scss';

class IAvatorComment extends Component{
	render(){
		return (   
			<div className={cui.comment_avatar}>
	            <img src={this.props.commentsrc} alt="" />
	            <span>{this.props.commentcontent}</span>
            </div>
		)
	}
}

export default IAvatorComment;
