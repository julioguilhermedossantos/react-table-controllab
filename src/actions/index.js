import  axios  from "axios";

export const FETCH_TASKS_BEGIN = 'FETCH_TASKS_BEGIN';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE ';

export const fetchTasksBegin = () => ({
  type: FETCH_TASKS_BEGIN
});

export const fetchTasksSuccess = (tasks) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: {tasks}
});

export const fetchTasksFailure = error => ({
  type: FETCH_TASKS_FAILURE,
  payload: { error }
});

export function listTasks() {
  //mock call para api
  return dispatch => {
    dispatch(fetchTasksBegin())
    axios.get("https://jsonplaceholder.typicode.com/todos")
                        .then(response => {
                          console.log('====================================');
                          console.log("no action");
                          console.log(response.data)
                          console.log('====================================');
                           return dispatch({
                            type: FETCH_TASKS_SUCCESS,
                            payload: response.data
                          })
                        })
                        .catch(error => {
                            dispatch(fetchTasksFailure(error)) 
                        })
            }

    // return dispatch({
    //             type: FETCH_TASKS_SUCCESS,
    //             payload: [{
    //               "userId": 1,
    //               "id": 1,
    //               "title": "delectus aut autem",
    //               "completed": false
    //             }]
    //     })
    // }

}

