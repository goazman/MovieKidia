import React from 'react'
import { StyleSheet } from 'react-native'
import FilmList from "./filmList";
import { connect } from 'react-redux';

function Favorites (props) {
    
    return(
        <FilmList
            filmsFromSearch={props.favoritesFilm}
            navigation={props.navigation}
            favoriteList={true}
        />
    )
}

const styles = StyleSheet.create({})

function mapStateToProps(state) {
    return { favoritesFilm: state.favoritesFilm }
}

export default connect(mapStateToProps)(Favorites);
