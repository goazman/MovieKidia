import React, {useState} from 'react';
import { StyleSheet, View, FlatList,  Button, TextInput, ActivityIndicator } from "react-native";
import FilmItem from "../components/filmItem";
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi';

export default function Search() {

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
        // console.log(text)
        setSearchText(text);
    }

    
    var displayLoading = () => {
        if(isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            )
        }
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
            <Button style={{ height: 50}} title="Rechercher" 
            onPress={() => loadFilms(true)}/>
            <FlatList
            data={dataApi}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <FilmItem filmProp={item}/>}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
                if (pages < totalPages) {
                    loadFilms(false)
                }
            }}
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

