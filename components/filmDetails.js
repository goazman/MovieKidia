import React, {useState, useEffect} from 'react';
import { StyleSheet, View, ActivityIndicator, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import numeral from 'numeral';
import { FontAwesome } from '@expo/vector-icons';

import { getFilmsDetailsFromApi, getImageFromApi } from "../API/TMDBApi";

import { connect } from 'react-redux';


function FilmDetails({props, route, toggleFavorite, favoritesFilm}) {
    
    //From Search.js Navigation Route to API call
    const filmId = route.params.idFilm;

    const [isLoading, setIsLoading] = useState(true);
    const [dataDetailsFilm, setDataDetailsFilm] = useState();

    useEffect ( () => {
        async function loadDetails() {
            var result = await getFilmsDetailsFromApi(filmId).then(data =>{
                setDataDetailsFilm(data);
                setIsLoading(false);
            });
        }
        loadDetails()
    },[]);


    // Icone d'indication de chargement de la liste
    var displayLoading = () => {

        if(isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large" color="#3c40c6" />
                </View>
            )
        }
    }

    // Modification état Icone favoris
    var displayFavoriteIcon = () =>{

        var favIcon = <FontAwesome name="heart-o" size={32} color="#0fbcf9"/>;

        if (favoritesFilm.findIndex(item => item.id === state.film.id)!== -1) {

            favIcon = <FontAwesome name="heart" size={32} color="#0fbcf9"/>;
        }
        return (favIcon)
    }

    // UI design view
    var displayFilms = () => {
        if(dataDetailsFilm != undefined) {
            return(
                <ScrollView style={styles.scroll_container}>
                    <Image
                        style={styles.image}
                        source={{uri: getImageFromApi(dataDetailsFilm.backdrop_path)}}
                    />
                    <Text style={styles.title}>{dataDetailsFilm.title}</Text>
                    <TouchableOpacity 
                        style={styles.heartIcon} 
                        onPress={() => toggleFavorite()}>
                        {displayFavoriteIcon()}
                    </TouchableOpacity>
                    <Text style={styles.overview}>{dataDetailsFilm.overview}</Text>
                    <Text style={styles.details}>Sorti le : {moment(dataDetailsFilm.release_date).format("DD/MM/YYYY")}</Text>
                    <Text style={styles.details}>Note : {dataDetailsFilm.vote_average} /10</Text>
                    <Text style={styles.details}>Nombre de votes : {dataDetailsFilm.vote_count}</Text>
                    <Text style={styles.details}>Budget : {numeral(dataDetailsFilm.budget).format("0,0[.]00 $")}</Text>
                    <Text style={styles.details}>Genres : {dataDetailsFilm.genres.map(function(genre){return genre.name;}).join(" / ")}</Text>
                    <Text style={styles.details}>Distribution : {dataDetailsFilm.production_companies.map(function(brand){return brand.name;}).join(" / ")}</Text>
                </ScrollView>
            )
        }
    }
    
    //Render view
    return(
        <View style={styles.main_container}>
            {displayLoading()}
            {displayFilms()}
        </View>
    )
}


const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scroll_container: {
        flex: 1,
        width: "100%"
    },
    title: {
        flex: 1,
        fontWeight: "bold",
        fontSize: 35,
        color: "#3c40c6",
        textAlign: "center",
        margin: 10
    },
    image: {
        height: 200,
        margin: 5
      },
    overview: {
        flex: 1,
        fontSize: 16,
        textAlign:"justify",
        lineHeight: 25,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20
    },
    details: {
        flex: 1,
        fontSize: 14,
        fontStyle: "italic",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    heartIcon: {
        flex: 1,
        alignItems: "center",
        marginBottom: 5
    }
  })

//   Parametre state = state global donc dans Props de Filmdetails => accès au state de l'application et donc aux films favoris
  function mapStateToProps(state) {
      console.log(state);
      return {
          favoritesFilm: state.favoritesFilm
        }
      
  }

  function mapDispatchToProps(dispatch) {
    return {
        toggleFavorite: function() { 
          dispatch( {type: 'TOGGLE_FAVORITE'} ) 
      }
    }
  }

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(FilmDetails);