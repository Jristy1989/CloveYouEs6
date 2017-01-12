import React,{Component} from 'react';
import ICommentList from './ICommentList.js';
import cui from './cui.scss';

class ICommentBox extends Component{
	render(){
			return (
        <div className={`${cui.clearboth} ${cui.minsu_comments}`}>
            <div className={cui.comment}>
                <div className={`${cui.comment_score} ${cui.wth_small} ${cui.left}`}>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-empty"></span>
                    <p>
                    <span className={cui.pricePerNight}>4.5</span>
                    /50人评价</p>
                </div>
            </div>
       		<ICommentList data={this.props.data}/>
        </div>
		)
	}

}

export default ICommentBox;