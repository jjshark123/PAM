import React from 'react';

import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';

import Inicio from '../screens/Inicio';
import Resumo from '../screens/Resumo';


const Stack = createNativeStackNavigator();


export default function StackNavigator() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{
            title: 'Planeje sua viagem'
          }}
        />

        <Stack.Screen
          name="Resumo"
          component={Resumo}
          options={{
            title: 'Resumo da viagem'
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );

}