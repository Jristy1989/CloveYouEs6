import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import cui from '../../lib/index.scss';

class IReactSwipe extends Component{
	render(){
		console.log("IReactSwipe:"+JSON.stringify(this.props.data));
		let imgList=this.props.data.map(function(item,index){
			return (
	            <div key={index}><img  src={item.ImgUrl} alt='' /></div>
			)
		});
		return (
	        <ReactSwipe className={cui.carsousel} swipeOptions={{continuous:true,auto:10000}} key={imgList.length}>
	           {imgList}
	        </ReactSwipe>
		)
	}
}

export default IReactSwipe;