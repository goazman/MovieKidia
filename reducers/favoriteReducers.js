
const initialState = { favoritesFilm: [] };

export default function toggleFavorite(state = initialState, action) {
  var newState;
  // console.log(action + "onPress from filmDetails")
  
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id);
      if(favoriteFilmIndex !== -1) {
        //supprimer un film des favoris
        newState = {...state, favoritesFilm: state.favoritesFilm.filter( (item, index) => index !== favoriteFilmIndex)}
      }
      else {
        //ajouter un film aux favoris
        newState = {...state, favoritesFilm: [...state.favoritesFilm, action.value]}
      }
      return newState || state
  default:
    return state
  }
}