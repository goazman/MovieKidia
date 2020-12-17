import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Favorites () {
    
    return(
        <View style={styles.Test}>
            <Text style={{fontSize: 32, fontStyle: "italic", fontWeight: "bold"}}>Mes favoris</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Test: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})