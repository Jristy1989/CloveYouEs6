import React,{Component} from 'react';
import IAvatorComment from './IAvatorComment.js';
import IComment from './IComment.js';
import cui from './cui.scss';

class ICommentList extends Component{
	render(){
		let commentList=this.props.data.map(function(item,index){
			return (
	           <div className={cui.minsu_section} key={item.id}>  
				 	<div className={cui.comment_item} >   	
	                	<IAvatorComment commentsrc={item.avatorsrc} commentcontent={item.avatorname} />
						<IComment comments={item.comments} commentdate={item.commentdate}  score={item.score} commentlist={item.commentlist}/>
	            	</div>
				</div>
			)
		});
		return (
			<div className={cui.minsu_commentscontent}>
				{commentList}
			</div>
		)
	}
}

export default ICommentList;