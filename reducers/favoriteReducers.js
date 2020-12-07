
const initialState = { favoritesFilm: [] };

export default function toggleFavorite(state = initialState, action) {
  var newState = [];
// console.log(action + "onPress ok")
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
      if(favoriteFilmIndex !== -1) {
        newState = {...state, favoritesFilm: state.favoritesFilm.filter( (item, index) => index !== favoriteFilmIndex)}
      }
      else {
        newState = {...state, favoritesFilm: [...state.favoritesFilm, action.value]}
      }
      return newState || state
  default:
    return state
  }
}