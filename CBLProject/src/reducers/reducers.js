import * as types from '../actions/actionTypes';
import {combineReducers} from 'redux';

function swipeImgList(state=[],action){
  console.log("swipeImgList Reducers:"+action.type+",Data:"+JSON.stringify(action));
  switch(action.type){
    case types.RECV_SWIPE:
    console.log("swipeImgList Reducers REQ_SWIPE,Data:"+JSON.stringify(action.imgList));
    return action.imgList;
    default:
    return state;
  }
}


function isFetchingData(state=false,action){
  console.log("isFetchingData Reducers:"+action.type+",Data:"+JSON.stringify(action));
  switch(action.type){
    case types.FETCHING_DATA:
    return action.fetching;
    default:return state;
  }
}

const rootReducer = combineReducers({
  isFetchingData,
  swipeImgList
});

export default rootReducer;