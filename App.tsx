import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { BizTvScreen, HomeScreen } from './app/screens';

// App Stack Navigator
const AppStack = createNativeStackNavigator();

// App
const App = () => (
  <NavigationContainer>
    <AppStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="HomeScreen" component={HomeScreen} />
      <AppStack.Screen name="BizTvScreen" component={BizTvScreen} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default App;
