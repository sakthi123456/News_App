/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import NewsList from './pages/News/NewsList';
import News from './pages/News/News';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottomNavigation'>
        <Stack.Screen name='BottomNavigation' component={BottomTabNavigation}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='News' component={News}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='NewsList' component={NewsList}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
