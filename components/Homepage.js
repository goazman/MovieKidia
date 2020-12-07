import React from 'react'
import { StyleSheet, View, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';


export default function HomePage({navigation}) {
    return (
        <SafeAreaView style={{flex:1}}>
            <ImageBackground style={styles.main_container} 
                resizeMode= "stretch" 
                source={require("../assets/homepage.jpg")}>
                <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                    <View style={styles.HomeTitle}>
                        <LinearGradient style={styles.button}
                            colors={['#057ea8',"#0fbcf9",'#057ea8']}
                            locations={[0.8, 0.5, 0.8]}>
                            <Text h1 h1Style={{color:"#fff7d9", textAlign:"center"}}>Entrance</Text>
                        </LinearGradient>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
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
    },
    button: {
        borderRadius: 6,
        width: 200,
        textAlign: "center"
    }
  })
