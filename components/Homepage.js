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
                            <Text h2 h2Style={{color:"#fff7d9", textAlign:"center"}}>Entrance</Text>
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
        marginTop: 180,
        shadowColor: "#3c40c6",
        shadowOpacity: 0.7,
        shadowRadius: 12,
        shadowOffset : { width: 2, height: 6}
    },
    button: {
        borderRadius: 15,
        width: 160,
        height: 55,
        textAlign: "center",
        padding: 3
    }
  })
