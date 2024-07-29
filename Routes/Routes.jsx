import React from 'react'
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../ecrans/Home/Home';
import TabsMenu from '../ecrans/TabsMenu/TabsMenu';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName='home'
    screenOptions={{headerShown:false}}
        >
      <Stack.Screen name="home" component={TabsMenu} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes