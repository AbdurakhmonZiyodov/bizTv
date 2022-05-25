import React from 'react';
import {RN} from '../components/react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from '../navigation/tab';

const Tab = createBottomTabNavigator();

const Home = () => {
  return <TabBar />;
};

export default Home;
