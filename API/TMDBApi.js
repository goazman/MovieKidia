const API_TOKEN = "46a54f659eb4c4365d64bb706712b1e4";

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }

  export function getImageFromApi(name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }