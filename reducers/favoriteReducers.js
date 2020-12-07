
const initialState = { favoritesFilm: [] };

export default function toggleFavorite(state = initialState, action) {
  var newState = [];
console.log(action + "onPress ok")
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return newState
  default:
    return state
  }
}