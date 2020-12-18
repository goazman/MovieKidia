import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, FlatList } from "react-native";

import FilmItem from "./filmItem";
import { connect } from 'react-redux';

function FilmList(props) {

    const [dataApi, setDataApi] = useState([]);

    // NAVIGATION and idFilm (useRoute hook) to filmDetails
    const navigation = useNavigation();
    var displayDetailForFilm = (idFilm) => {
        console.log("Affiche les films" + idFilm)
        navigation.navigate("FilmDetails",{idFilm: idFilm});
    }

    return(
        <FlatList
            style={styles.list}
            data={dataApi}
            extraData={props.favoritesFilm}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <FilmItem 
                                        filmProp={item} 
                                        isThereFavoritesFilm={(props.favoritesFilm.findIndex(film => film.id === item.id) !=-1) ? true : false}
                                        displayDetailForFilm={displayDetailForFilm}/>
                        }
            onEndReachedThreshold={0.5}
            onEndReached={() => {
                if (pages < totalPages) {
                    loadFilms(false)
                }
            }}
        />
    )
}

const styles = StyleSheet.create({

    list: {
        flex: 1,
    }
})

function mapStateToProps(state) {
    return { favoritesFilm: state.favoritesFilm }
}

export default connect(mapStateToProps)(FilmList);