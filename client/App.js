import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Provider as AuthProvider } from './src/context/AuthContext';

import AccountScreen from './src/screens/Account';
import SigninScreen from './src/screens/Signin';
import SignupScreen from './src/screens/Signup';
import TrackCreateScreen from './src/screens/TrackCreate';
import TrackDetailScreen from './src/screens/TrackDetail';
import TrackListScreen from './src/screens/TrackList';

const switchNavigator = createSwitchNavigator( {
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createSwitchNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate:TrackCreateScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <AuthProvider >
      <App />
    </AuthProvider>
  );
};





