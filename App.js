import React from 'react';
import Search from "./components/Search";
import HomePage from "./components/Homepage";
import FilmDetails from "./components/filmDetails";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack  = createStackNavigator();

function NavStack() {
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
      <Stack.Screen name="FilmDetails" component={FilmDetails} options={{title: "Fiche technique"}}/>
    </Stack.Navigator>
  );
}

export default function App (){
  return (
    <NavigationContainer>
      <NavStack/>
    </NavigationContainer>
  );
}


