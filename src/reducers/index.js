import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
// 複数状態を管理したい場合
// export default combineReducers({ foo,bar,baz })
