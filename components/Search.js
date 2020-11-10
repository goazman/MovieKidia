import React, {useState} from 'react';
import { StyleSheet, View, FlatList,  Button, TextInput, Text, ActivityIndicator } from "react-native";
import FilmItem from "../components/filmItem";
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi';

export default function Search() {

    const [dataApi, setDataApi] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState();

    
    var loadFilms = () => {

    setIsLoading(true);

        if (searchText.length > 0) {
            getFilmsFromApiWithSearchedText(searchText).then(data => {
                setDataApi(data.results);
                setIsLoading(false);
            });
        }       
    }

    console.log(isLoading);

    var displayLoading = () => {
        if(isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            )
        }
    }

    var searchTextInput = (text) => {
        setSearchText(text);
    }
    

        return(
            <View style={styles.main_container}>
                <TextInput onSubmitEditing={() => loadFilms()} onChangeText={(text) => searchTextInput(text)} style={styles.textinput} placeholder="Titre du film"/>
                <Button style={{ height: 50}} title="Rechercher" onPress={() => loadFilms()}/>
                <FlatList
                data={dataApi}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem filmProp={item}/>}
                />
            {displayLoading()}
            </View>
        )  
}

const styles = StyleSheet.create({
    main_container:{
        flex: 1,
        marginTop: 40
    },
    textinput :{
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: "#000000",
        borderWidth: 1,
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

