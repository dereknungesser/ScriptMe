import {fetch} from './csrf.js'

const ADD_PROJECT = 'recipes/ADD_PROJECT'

const addNewProject = project => ({
    type: ADD_PROJECT,
    payload: project
  });


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


const initialState = { user: null };

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
