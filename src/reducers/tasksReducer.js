import { FETCH_TASKS_BEGIN, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE } from '../actions'

const initialState = {
    tasks: [{
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      }],
    loading: false,
    error: null
  } 

export default function tasksReducer(state = initialState, action)  {

    switch(action.type) {
        case FETCH_TASKS_BEGIN:
            
            return {
              ...state,
              loading: true,
              error: null
            }
      
          case FETCH_TASKS_SUCCESS:
            console.log('====================================')
            console.log("no success: " + action.payload )
            console.log('====================================')
            return {
              ...state,
              tasks: action.payload,
              loading: false
            }
      
          case FETCH_TASKS_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.payload.error,
              tasks: []
            }
      
          default:{
            console.log('====================================')
            console.log("state default: " +  state);
            console.log('====================================')
          }
            return state;
  }
}