import {fetch} from './csrf.js'

const ADD_PROJECT = 'project/ADD_PROJECT'
const GET_PROJECT = 'project/GET_PROJECT'

const addNewProject = project => ({
  type: ADD_PROJECT,
  payload: project
});

const getAllProjects = projectList => ({
  type: GET_PROJECT,
  payload: projectList
})


export const addProject = ({ userId, project_name }) => async (dispatch) => {
  const res = await fetch('/api/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId,
            project_name })
    });
      dispatch(addNewProject(res.data))
    return {type: ADD_PROJECT, payload: res.data}
}

export const getProject = () => async (dispatch) => {
  let res = await fetch(`/api/projects`);
  console.log(res.data)
  dispatch(getAllProjects(res.data))
  return res
}


const initialState = { project: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ADD_PROJECT:
      newState = Object.assign({}, state, { project: action.payload });
      return newState;
    default:
      return state;
    }
}

export default reducer;
