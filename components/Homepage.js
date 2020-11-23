import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

export default function HomePage({navigation}) {
    return (
        <View style={styles.main_container}>
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                <View style={styles.HomeTitle}>
                    <Text h1 h1Style={{color:"#3c40c6",fontWeight:"bold"}}>Entrer</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffdd59"
    },
    HomeTitle: {
        alignItems: "center",
        backgroundColor:"#0fbcf9",
        borderRadius: 9,
        width: 150
    }
  })
