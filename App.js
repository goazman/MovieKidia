import React from 'react';
import Search from "./components/Search";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack  = createStackNavigator();

function NavStack() {
  return(
    <Stack.Navigator 
    headerMode="screen" 
    initialRouteName="Search"
    screenOptions={{
      headerTintColor: '#3c40c6',
      headerStyle: { backgroundColor: '#0fbcf9'},
    }}
    >
      <Stack.Screen name="Search" component={Search} options={{title: "Rechercher des films"}}/>
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


