import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from "../components/Homepage";
import Search from "../components/Search";
import FilmDetails from "../components/filmDetails";

const Stack = createStackNavigator();

export default function NavStack() {
    return(
      <Stack.Navigator 
        headerMode="float"
        initialRouteName="HomePage"
        screenOptions={{
          headerTintColor: '#3c40c6',
          headerStyle: { backgroundColor: '#0fbcf9'},
      }}
      >
        <Stack.Screen name="HomePage" component={HomePage} options={{title: "Accueil"}} />
        <Stack.Screen name="Search" component={Search} options={{title: "Rechercher des films"}}/>
        <Stack.Screen name="FilmDetails" component={FilmDetails} options={{title: "Détail du film"}}/>
      </Stack.Navigator>
    );
  }