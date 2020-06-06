import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { setNavigator } from './src/navigationRef';
import { Provider as TrackProvider } from './src/context/TrackContext';

import AccountScreen from './src/screens/Account';
import SigninScreen from './src/screens/Signin';
import SignupScreen from './src/screens/Signup';
import TrackCreateScreen from './src/screens/TrackCreate';
import TrackDetailScreen from './src/screens/TrackDetail';
import TrackListScreen from './src/screens/TrackList';
import ResolveAuthScreen from './src/screens/ResolveAuth';


const switchNavigator = createSwitchNavigator( {
  ResolveAuthScreen: ResolveAuthScreen,
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
    <TrackProvider>
      <LocationProvider>
        <AuthProvider >
          <App ref={ (navigator) => { setNavigator(navigator) }}/>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};





