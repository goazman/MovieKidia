import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { getImageFromApi } from "../API/TMDBApi";

export default function FilmItem(props) {
  
    const movie = props.filmProp;
    const displayDetailForFilm = props.displayDetailForFilm;

    return (
      <TouchableOpacity style={styles.main_container} onPress={() => displayDetailForFilm(movie.id)}>
        <Image
          style={styles.image}
          source={{uri: getImageFromApi(movie.poster_path)}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{movie.title}</Text>
            <Text style={styles.vote_text}>{movie.vote_average}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{movie.overview}</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Sorti le {movie.release_date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray',
    borderRadius: 9
  },
  content_container: {
    flex: 1,
    margin: 9
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

