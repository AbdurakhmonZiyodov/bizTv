
import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { BizTvScreen, HomeScreen, ChildTvScreen, BizItemScreen, News2Item, TvShowsScreen, AboutProjectScreen } from './app/screens';

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
      <AppStack.Screen name='ChildTvScreen' component={ChildTvScreen} />
      <AppStack.Screen name='BizItemScreen' component={BizItemScreen} />
      <AppStack.Screen name='News2ItemScreen' component={News2Item} />
      <AppStack.Screen name='TvShowsScreen' component={TvShowsScreen} />
      <AppStack.Screen name='AboutProjectScreen' component={AboutProjectScreen} />


    </AppStack.Navigator>
  </NavigationContainer>
);

export default App;
