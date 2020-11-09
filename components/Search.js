import React, {useState} from 'react';
import { StyleSheet, View, FlatList,  Button, TextInput, Text } from "react-native";
import FilmItem from "../components/filmItem";
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi';

export default function Search() {

    const [dataApi, setDataApi] = useState([]);
    const [searchText, setSearchText] = useState();

    var loadFilms = () => {
        if (searchText.length > 0) {
        getFilmsFromApiWithSearchedText(searchText).then(data => setDataApi(data.results))
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
    }
})

