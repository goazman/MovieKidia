import React from 'react';
import Search from "./components/Search";
import HomePage from "./components/Homepage";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack  = createStackNavigator();

function NavStack() {
  return(
    <Stack.Navigator 
    headerMode="screen" 
    initialRouteName="HomePage"
    screenOptions={{
      headerTintColor: '#3c40c6',
      headerStyle: { backgroundColor: '#0fbcf9'},
    }}
    >
      <Stack.Screen name="Search" component={Search} options={{title: "Rechercher des films"}}/>
      <Stack.Screen name="HomePage" component={HomePage} options={{title: "Accueil"}}/>
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


