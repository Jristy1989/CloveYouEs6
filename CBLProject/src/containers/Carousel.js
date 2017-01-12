import React,{Component} from 'react';
import { connect } from 'react-redux';
import Avatar from 'react-avatar';
import ICommentBoxTest from '../ICommentBoxTest';
import cui from '../../lib/index.scss';
import CenteredHead from '../../lib/splitline/ICenteredHead';
import Lightbox from 'react-mobile-lightbox';
import ScrollToTop from 'react-scroll-up';
import Footer from '../../lib/footer/IFooter';
import { fetchSwipeImg} from '../actions/actions.js';
import IReactSwipe from '../components/IReactSwipe';

function mapStateToProps(state) {
  return {
    swipeImgList: state.swipeImgList,
    isFetchingData: state.isFetchingData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSwipeImg: (type,id) => dispatch(fetchSwipeImg(type,id))
  };
}

class Carousel extends Component{    
 	componentDidMount() { 
		console.log("Carousel componentDidMount:"+JSON.stringify(this.props));
    	this.props.fetchSwipeImg(1,1);
		console.log("Carousel componentDidMount fetchSwipeImg:"+JSON.stringify(this.props));
	}
	render(){
		console.log("Carousel:"+JSON.stringify(this.props));
		return (
		    <div>
		    	{
		    		this.props.swipeImgList ? <IReactSwipe data={this.props.swipeImgList} /> : null
		    	}
		        <div className={`${cui.avatar_container} ${cui.mb20}`}>
					<Avatar src='http://cloveyou.com/CBL/img/avator.jpg' value='Jristy1989' round={true} size={72} />
					<div className={`${cui.avatar_info} ${cui.ellipsistext}`}>
						<p>浩然无为</p>
						<p>15968118912</p>
					</div>
					<a href='http://api.map.baidu.com/geocoder?address=杭州市临安玲珑街道临安国家林场内' className={cui.compass}>
						<span className='icon-compass'></span>
					</a>
		        	<p className={cui.distance}>距离您10.89km</p>
		        </div>				
				<div className={cui.mb20}>
					<div className={cui.text_container}>民宿名称:&nbsp;&nbsp;
					<span>遇见林栖 翠玲珑，城市边上的世外桃源</span>
					</div>
					<div className={cui.text_container}>民宿价格:&nbsp;&nbsp;
					<span>$650.00元起</span>
					</div>
					<div className={cui.text_container}>民宿地址:&nbsp;&nbsp;
					<span>杭州市临安玲珑街道临安国家林场内</span>
					</div>
				</div>
				<div className={`${cui.introduction} ${cui.mb20}`}>
					<CenteredHead title="民宿简介" />
				   	<p>在喧闹浮华的城市之中, 我们为了生活而四处奔波, 快节奏的生活让人喘不过气, 所以我们选择逃离, 渴望得到一份独有的静谧, 过一段不被打扰的时光。</p>
				</div>

				<div className={`${cui.introduction} ${cui.mb20}`}>
					<CenteredHead title="周边风景" />
			 		<Lightbox
				        images={[
				          '../img/lightbox/1.jpeg',
				          '../img/lightbox/2.jpeg',
				          '../img/lightbox/3.jpeg',
				          '../img/lightbox/4.jpeg',
				          '../img/lightbox/5.jpeg'
				        ]}  style={{marginTop:8,
				        }} />										 
				</div>
				<div className={`${cui.introduction} ${cui.mb20}`}>
					<CenteredHead title="交通路线" />
				   	<p>杭州西高速口出发半小时，玲珑高速出口，森竹园山庄内</p>
				</div>
		        <ICommentBoxTest />
		        <button className={`${cui.btn} ${cui.btn_yellow}`}>加载更多</button>
		        <div className={cui.totop}>
		        <ScrollToTop showUnder={160}>
				  <span className='icon-totop'></span>
				</ScrollToTop>
				</div>
				<Footer />
		    </div>
		);
	}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel);
