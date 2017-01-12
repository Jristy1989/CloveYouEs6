import React,{Component} from 'react';
import cui from './cui.scss';

class ICommentScore extends Component{
	render(){
		let  score=this.props.score;
        if(score<1){
            return (   
            <div className={cui.comment_content}>
                <div className={cui.comment_score}>
                    <span className="icon-star-empty"></span>
                    <span className="icon-star-empty"></span>
                    <span className="icon-star-empty"></span>
                    <span className="icon-star-empty"></span>
                    <span className="icon-star-empty"></span>
                </div>
            </div>
            )
        }
        if(score<2){
            return (   
            <div className={cui.comment_content}>
                <div className={cui.comment_score}>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-empty"></span>
                    <span className="icon-star-empty"></span>
                    <span className="icon-star-empty"></span>
                    <span className="icon-star-empty"></span>
                </div>
            </div>
        )
        }
        if(score<3){
            return (   
            <div className={cui.comment_content}>
                <div className={cui.comment_score}>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-empty"></span>
                    <span className="icon-star-empty"></span>
                    <span className="icon-star-empty"></span>
                </div>
            </div>
        )
        }
         if(score<4){
            return (   
            <div className={cui.comment_content}>
                <div className={cui.comment_score}>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-empty"></span>
                    <span className="icon-star-empty"></span>
                </div>
            </div>
        )
        }        if(score<5){
            return (   
            <div className={cui.comment_content}>
                <div className={cui.comment_score}>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-empty"></span>
                </div>
            </div>
        )
        }
		return (   
            <div className={cui.comment_content}>
                <div className={cui.comment_score}>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-full"></span>
                    <span className="icon-star-full"></span>
                </div>
            </div>
        )
	}
}

export default ICommentScore;