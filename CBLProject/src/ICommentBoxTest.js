import React, { Component } from 'react';
import ICommentBox from '../lib/comment/ICommentBox';

class ICommentBoxTest extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        let data = [{
            id: 111,
            avatorsrc: '../img/Avatar/1.png',
            avatorname: 'Jristy2016',
            score: 4,
            comments: '整体装扮很温馨，各种设施应有尽有，价格还特别实惠，房间很大。推荐！',
            commentdate: '2016-06-24 13:30:12'
        }, {
            id: 321,
            avatorsrc: '../img/Avatar/3.jpg',
            avatorname: '过后不思量',
            score: 5,
            comments: '非常喜欢，非常温馨的一家店。老闆还来火车站接。房间卫生好，空调给力！必须推荐给以后来台湾玩的小伙伴！',
            commentdate: '2016-07-1 13:30:12'
        }, {
            id: 13,
            avatorsrc: '../img/Avatar/4.jpg',
            avatorname: '珊珊',
            score: 4,
            comments: '很棒的民宿，很棒的老板！有帅哥来车站接，帅哥超幽默，一路上开了N个玩笑，还很贴心，知道我们没吃饭就兜路载我们去夜市买官财板吃。到家之后，就很热情的跟我们介绍花莲市区怎么逛哪些好吃，我几乎把美食地图的美食集齐啦哈哈。还帮我们订太鲁阁线的包车，还有下垦丁的包车。老板家里在花莲有6间民宿，所以晚上老板都不会在站前海住的，但是民宿里东西都很齐，我们反而也不会觉得拘束。老板娘人也很好很漂亮，因为要去接女儿也顺路载我们到扁食店，让我们省了走一大段路。下次还想去花莲玩滑翔伞，还想让老板带我们去山顶看花莲夜景，带我们去清水断崖秘境。等我下次去，可能你们就开满10家店了吼，哈哈努力奋斗！ 来自两位叶小姐',
            commentdate: '2016-07-15 13:30:12'
        }, {
            id: 121,
            avatorsrc: '../img/Avatar/5.jpg',
            avatorname: 'Arno丶小染',
            score: 5,
            comments: '房间不错 很干净 我们订那天 只有我们三间房 没有别的客人 老板很忙 入住都自助直接进门哈哈哈 很热情接送我们去夜市 介绍好吃的 很值得入住啦 来自两位叶小姐',
            commentdate: '2016-07-15 13:30:12',
            commentlist: [{
                datasrc: "../img/minsu/1.jpg"
            }, {
                datasrc: "../img/minsu/2.jpg"
            }, {
                datasrc: "../img/minsu/3.jpg"
            }, {
                datasrc: "../img/minsu/4.jpeg"
            }]
        }, {
            id: 123,
            avatorsrc: '../img/Avatar/2.jpg',
            avatorname: '远去的你我',
            score: 4,
            comments: '很棒的民宿，很棒的老板！有帅哥来车站接，帅哥超幽默，一路上开了N个玩笑，还很贴心，知道我们没吃饭就兜路载我们去夜市买官财板吃。到家之后，就很热情的跟我们介绍花莲市区怎么逛哪些好吃，我几乎把美食地图的美食集齐啦哈哈。还帮我们订太鲁阁线的包车，还有下垦丁的包车。老板家里在花莲有6间民宿，所以晚上老板都不会在站前海住的，但是民宿里东西都很齐，我们反而也不会觉得拘束。老板娘人也很好很漂亮，因为要去接女儿也顺路载我们到扁食店，让我们省了走一大段路。下次还想去花莲玩滑翔伞，还想让老板带我们去山顶看花莲夜景，带我们去清水断崖秘境。等我下次去，可能你们就开满10家店了吼，哈哈努力奋斗！ 来自两位叶小姐',
            commentdate: '2016-07-15 13:30:12'
        }];
        this.setState({ data: data });
    }

    render() {
        return <ICommentBox data = { this.state.data }
        />
    }
}

export default ICommentBoxTest;
