import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

export default function filmDetails(props) {
    console.log(props.navigation);

    return(
        <View style={styles.main_container}>
            <Text>Détails du film</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
    }
  })