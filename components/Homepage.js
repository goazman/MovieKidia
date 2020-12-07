import React from 'react'
import { StyleSheet, View, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';

export default function HomePage({navigation}) {
    return (
        <View style={{flex:1}}>
            <ImageBackground style={styles.main_container} resizeMode= "stretch" source={require("../assets/homepage.jpg")}>
                <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                    <View style={styles.HomeTitle}>
                        <Text h1 h1Style={{color:"#3c40c6",fontWeight:"bold"}}>Entrance</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffdd59"
    },
    HomeTitle: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 200,
        backgroundColor:"#0fbcf9",
        borderRadius: 15,
        width: 220
    }
  })
