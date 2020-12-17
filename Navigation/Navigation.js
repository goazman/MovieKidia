import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from "../components/Homepage";
import Search from "../components/Search";
import FilmDetails from "../components/filmDetails";
import Favorites from "../components/favorites";

import { FontAwesome } from '@expo/vector-icons';


const Stack = createStackNavigator();

function HomeStack() {
  return(
    <Stack.Navigator 
      headerMode="none" 
      initialRouteName="HomePage"
    >
      <Stack.Screen name="HomePage" component={HomePage} options={{title: "Accueil"}}/>
      <Stack.Screen name="Search" component={NavStack} options={{title: "Rechercher des films"}}/>
    </Stack.Navigator>
  );
}

function NavStack() {
  return(
    <Stack.Navigator 
      headerMode="float" 
      screenOptions={{
        headerTintColor: '#3c40c6',
        headerStyle: { backgroundColor: '#0fbcf9'},
      }}
    >
      <Stack.Screen name="Search" component={Search} options={{title: "Rechercher des films"}}/>
      <Stack.Screen name="FilmDetails" component={FilmDetails} options={{title: "Détail du film"}}/>
    </Stack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

 function NavBottomTab() {
   return (
      <Tab.Navigator
      
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'black',
          activeBackgroundColor: "#0fbcf9",
          inactiveBackgroundColor: "white",
          showLabel: true,
          showIcon: true,
          labelStyle: { fontSize: 15 }
        }}
      >
        <Tab.Screen name="Search" component={NavStack} options={{ 
          tabBarIcon: ({ color, size }) => (<FontAwesome name="search" color="#3c40c6" size={21}/>),
          }}/>
        <Tab.Screen name="Favoris" component={Favorites} options={{ 
          tabBarIcon: ({ color, size }) => (<FontAwesome name="heart" color="#3c40c6" size={21}/>),
          tabBarBadge: 3 
          }}/>
      </Tab.Navigator>
   );
 }

export default HomeStack;
