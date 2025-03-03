
import {  all, call,  put, select, takeLatest} from 'redux-saga/effects';
import {  getUserInfo, getChannelList, getTopicList, getFavoriteTopic } from '../../api';
import { 
  getUserInfoSuccess,
  getUserInfoFail,
  userSignOut
} from '../actions/user';
import { 
  fetchChannelListSuccess,
  fetchChannelListFail
} from '../actions/channel';
import { 
  fetchTopicListSuccess,
  fetchTopicListFail
} from '../actions/topic';

import {
  GET_USER_INFO,
  FETCH_CHANNEL_LIST,
  FETCH_TOPIC_LIST,
  USER_SIGN_OUT
} from '../../constants/ActionTypes';
import { selectUserInfo } from '../reducers/selectors';



export function* userInfo() {
  try {
    const { data } = yield call(getUserInfo);
    yield put(getUserInfoSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(getUserInfoFail(error));
  }
}

export function* channelList() {
  try {
    const { data } = yield call(getChannelList);
    yield put(fetchChannelListSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(fetchChannelListFail());
  }
}

export function* topicList(action) {
  try {
    const { type = '', categoryName = '', page = 1 } = action.payload;
    const requestUrl = type === 'favorite' ? getFavoriteTopic : getTopicList;
    // const _categoryName = categoryName === '全部' ? '' : categoryName;
    const params = {
      categoryName,
      page
    };
    if (type === '我的发布' || type === '我的收藏') {
      const {userName} = yield select(selectUserInfo);
      params.userName =  userName;
    }
    const { data } = yield call(requestUrl, params);
    yield put(fetchTopicListSuccess({
      ...data,
      type,
      categoryName
    }));
  } catch (error) {
    console.log(error);
    yield put(fetchTopicListFail());
  }
}

export default function* rootSagas() {
  yield all([
    takeLatest(FETCH_TOPIC_LIST, topicList),
    takeLatest(GET_USER_INFO, userInfo),
    takeLatest(USER_SIGN_OUT, userSignOut),
    takeLatest(FETCH_CHANNEL_LIST, channelList)
  ]);
}
