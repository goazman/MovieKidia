import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Button, TextInput, ActivityIndicator } from "react-native";
import FilmItem from "./filmItem";
import FilmList from "./filmList";
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi';

import { connect } from 'react-redux';


function Search(props) {

    const [searchText, setSearchText] = useState("");
    const [pages, setPages] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [dataApi, setDataApi] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    var loadFilms = (init) => {
        if (searchText.length > 0) {

            setIsLoading(true);
            
            let numPage = pages+1;

            if(init){numPage = 1;}
            
            getFilmsFromApiWithSearchedText(searchText, numPage).then(data => {
                setPages(data.page);
                setTotalPages(data.total_pages);
                
                if(init===false){
                    setDataApi([...dataApi,...data.results]);
                }
                else {
                    setDataApi(data.results);
                }
            setIsLoading(false);
            });
        }     
    }
    

    var searchTextInput = (text) => {
        setSearchText(text);
    }

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

    // NAVIGATION and idFilm (useRoute hook) to filmDetails
    const navigation = useNavigation();
    var displayDetailForFilm = (idFilm) => {
        navigation.navigate("FilmDetails",{idFilm: idFilm});
    }

   

    return(
        <View style={styles.main_container}>
            <TextInput 
                style={styles.textinput} 
                placeholder="Titre du film"
                onChangeText={(text) => searchTextInput(text)}
                onSubmitEditing={() => loadFilms(true)} 
                clearButtonMode="always"
                />
            <Button color="#3c40c6" title="Rechercher" onPress={() => loadFilms(true)}/>
            <FilmList
                films={dataApi}
                navigation={props.navigation}
                loadFilms={loadFilms()}
                page={pages}
                totalPages={totalPages}
            />
            {displayLoading()}
        </View>
    )  
}



const styles = StyleSheet.create({

    main_container: {
        flex: 1,
        marginTop: 40
    },
    textinput: {
        marginLeft: 10,
        marginRight: 10,
        height: 50,
        borderColor: "#0fbcf9",
        color: "#3c40c6",
        borderWidth: 2,
        borderRadius: 9,
        paddingLeft: 5
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
})

function mapStateToProps(state) {
    return { favoritesFilm: state.favoritesFilm }
}

export default connect(mapStateToProps)(Search);
