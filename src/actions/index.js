import  axios  from "axios";
//Padrão de declaração de Actions

export const FETCH_TASKS_BEGIN = 'FETCH_TASKS_BEGIN';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE ';

export const fetchTasksBegin = () => ({
  type: FETCH_TASKS_BEGIN
});

export const fetchTasksSuccess = tasks => ({
  type: FETCH_TASKS_SUCCESS,
  payload: [tasks]
});

export const fetchTasksFailure = error => ({
  type: FETCH_TASKS_FAILURE,
  payload: { error }
});

export function listTasks() {

  return dispatch => {
    dispatch(fetchTasksBegin())
    axios.get("https://jsonplaceholder.typicode.com/todos")
                        .then(response => {
                            console.log(response.data)
                           return dispatch(fetchTasksSuccess(response.data))
                        })
                        .catch(error => {
                            // dispatch(fetchTasksFailure(error))
                            console.log(error)
                        })
    // dispatch(fetchTasksBegin());
    // return fetch("https://jsonplaceholder.typicode.com/todos")
    // .then(response => response.json())
    // .then(json => {
    //   dispatch(fetchTasksSuccess(json.Tasks));
    //   console.log('====================================');
    //   console.log(json.Tasks);
    //   console.log('====================================');
    //   return json.Tasks;
    // })
    //   .catch(error => dispatch(fetchTasksFailure(error)));
  };
  }



// function handleErrors(response) {
//   console.log('====================================');
//   console.log("erro: "+ response.statusText);
//   console.log('====================================');
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }