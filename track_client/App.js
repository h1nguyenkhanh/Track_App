import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider as AuthProvider } from './src/context/authContext'
import Signin from './src/screens/Signin'
import Signup from './src/screens/Signup'
import Account from './src/screens/Account'
import TrackCreate from './src/screens/TrackCreate'
import TrackDetail from './src/screens/TrackDetail'
import TrackList from './src/screens/TrackList'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Auth flow
const AuthStack = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Signin" component={Signin} />
  </Stack.Navigator>
  )
}

//Track flow
const TrackStack = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen name="TrackList" component={TrackList} />
    <Stack.Screen name="TrackDetail" component={TrackDetail} />
  </Stack.Navigator>
  )
}

//Home flow
const HomeTab = () => {
  return (
  <Tab.Navigator>
    <Tab.Screen name="TrackStack" component={TrackStack} />
    <Tab.Screen name="TrackCreate" component={TrackCreate} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
  )
}

// watchman watch-del-all
// yarn start --reset-cache

//Main flow
const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="Home" component={HomeTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  )
}

export default App

