import React,{Component} from 'react';
import ICommentScore from './ICommentScore.js';
import cui from './cui.scss';

class IComment extends Component{
	render(){
		let list;
		if(this.props.commentlist!==undefined){
			list=this.props.commentlist.map(function(item,i){
				return <img src={item.datasrc} className={`${cui.comment_minsuimg} ${cui.lazy}`} key={i} alt="" />
			});
		}

		return (          
			<div className={cui.comment_content}>
                <ICommentScore score={this.props.score}/>
                <p>{this.props.comments}</p>
                  <div className={cui.comment_imglist}>{list} </div>
                <p className={cui.comment_on}>发表于&nbsp;{this.props.commentdate}</p>
            </div>
        )
	}
}

export default IComment;