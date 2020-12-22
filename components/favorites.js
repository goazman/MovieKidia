import React from 'react'
import { StyleSheet, Text } from 'react-native'
import FilmList from "./filmList";
import { connect } from 'react-redux';

function Favorites (props) {
    
    return(
        <FilmList
            films={props.favoritesFilm}
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