import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { data } from './data/index'//数据来源
const reducers = combineReducers({
    data
});




const store = createStore(reducers, applyMiddleware(thunk, promise));

export default store