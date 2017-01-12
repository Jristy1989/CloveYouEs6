import axios from 'axios';
import * as types from './actionTypes';
import {getQueryString} from '../commons/index'; 

require('es6-promise').polyfill();

export function fetchingData(fetching) {
    return {
        type: types.FETCHING_DATA,
        fetching,
    };
}

export function receiveSwipeImg(imgList) {
    console.log("receiveSwipeImg:" + JSON.stringify(imgList));
    return {
        type: types.RECV_SWIPE,
        imgList,
    }
}

function receiveError(json) {
  return {
    type: types.RECV_ERROR,
    data: json
  }
};

export function fetchSwipeImg(type, id) {
    return function(dispatch) {
        console.log("fetchSwipeImg pre id:"+id);
        id=getQueryString("id");
        console.log("fetchSwipeImg cur id:"+id);
        if(id==null){
          id=1;
        }
        dispatch(fetchingData(true));
        return axios({
                url: `${types.REQ_URL}/api/Activities/GetSwipeList?type=${type}&&id=${id}`,
                timeout: 20000,
                method: 'get'
            })
            .then(function(response) {
                    console.log("json receiveSwipeImg:"+JSON.stringify(response.data));
                    dispatch(receiveSwipeImg(response.data));
                    dispatch(fetchingData(true));
            })
            .catch(function(response) {
                dispatch(receiveError(response));
                dispatch(pushState(null, '/error'));
            })
       /*     return fetch(`${types.REQ_URL}/api/Activities/GetSwipeList?type=${type}&&id=${id}`).
            then(response => {
                    console.log("response:"+JSON.stringify(response));
                    return response.json();
                }).then(json => {
                    console.log("json:"+json);
                    return json;
                })
                .then((json) => {
                    console.log("json receiveSwipeImg:"+json);
                    dispatch(receiveSwipeImg(json))
                })
                .then(() => dispatch(fetchingData(false)))*/
    };
}
