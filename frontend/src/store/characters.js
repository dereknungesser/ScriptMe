import {fetch} from './csrf.js'

const SAVE_CHARACTER = 'characters/SAVE_CHARACTER'
const GET_CHARACTER = 'characters/GET_CHARACTER'

const addNewCharacter = character => ({
  type: SAVE_CHARACTER,
  payload: character
});

const getAllCharacters = characters => ({
  type: GET_CHARACTER,
  payload: characters
})


export const saveCharacters = ({ userId, name, age, location, bio, imageUrl }) => async (dispatch) => {
  const res = await fetch('/api/characters', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId,
            name,
            age,
            location,
            bio,
            imageUrl })
    });
      dispatch(addNewCharacter(res.data))
    return {type: SAVE_CHARACTER, payload: res.data}
}

export const getCharacters = () => async (dispatch) => {
  let res = await fetch(`/api/characters`);
  console.log(res.data)
  dispatch(getAllCharacters(res.data))
  return res
}


const initialState = { character: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SAVE_CHARACTER:
      newState = Object.assign({}, state, { character: action.payload });
      return newState;
    case GET_CHARACTER:
      newState = Object.assign({}, state, { characters: action.payload });
      return newState;
    default:
      return state;
    }
}

export default reducer;
