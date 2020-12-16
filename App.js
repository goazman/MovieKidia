import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import NavStack from "./Navigation/Navigation";

import {Provider} from 'react-redux';
import Store from "./Store/configureStore";


export default function App (){
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <NavStack/>
      </NavigationContainer>
    </Provider>
  );
}


