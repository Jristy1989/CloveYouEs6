import React,{Component} from 'react';
import cui from './cui.scss';

class IFooter extends Component{
	render(){
		return (
		<div className={cui.footer_copy}>
			<div className={cui.cui_footer}>
			    <p>
			        Copyright ©2015_2025 cloveyou.com，All Rights Reserved 浙ICP备15026724号_1
			        <a target="_blank" href="http://cloveyou.com"></a>
			    </p>
			    <div className={cui.beian_gov}>
			        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33018502001058">
			            <img src="../img/gov.png"/>
			            <p className={cui.beian_gov_content}>浙公网安备 33018502001058号</p>
			        </a>
			    </div>
			</div>
		</div>
		)
	}
}

export default IFooter;