import  tasksReducer  from './tasksReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({ tasks: tasksReducer })

export default rootReducer