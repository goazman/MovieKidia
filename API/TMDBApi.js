import API_TOKEN from "../env/env";

export function getFilmsFromApiWithSearchedText (text, page) {
  
    // For Search component
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    // console.log(text + page)
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }

  export function getImageFromApi(name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }

  // For filmDetails component
  export function getFilmsDetailsFromApi (id) {
    // console.log("@@@@@"+id+"@@@@@@")
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr'
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }



  
  