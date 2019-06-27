import { tasksReducer } from './tasksReducer'
import { combineReducers } from 'redux'

//Caso precise escalar, colocar os reducers no combineReducers separados por vírgula
const rootReducer = combineReducers({ tasksReducer })

export default rootReducer