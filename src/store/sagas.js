import { takeEvery } from 'redux-saga/effects';
import { put } from 'redux-saga/effects'
// import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes';
import {initListAction} from './actionCreator';
import axios from 'axios';

function* getInitList(){
    try {
        console.log('abc');
        const res = yield axios.get('https://easy-mock.com/mock/5bc846bd4ff7d608864c06b0/jianshuApi/todolistAntd');
        const action = initListAction(res.data);
        yield put(action);
    } catch(e){
        console('Ajax 請求失敗')
    }
}

// 使用 Generator函數語法
// 捕捉每一個 action 的類型
// 捕捉到GET_INIT_LIST就會執行fetchUser方法getInitList()
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}
  
export default mySaga;