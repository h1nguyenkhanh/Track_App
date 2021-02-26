import 'react-native-gesture-handler';
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Signin from './src/screens/Signin'
import Signup from './src/screens/Signup'
import Account from './src/screens/Account'
import TrackCreate from './src/screens/TrackCreate'
import TrackDetail from './src/screens/TrackDetail'
import TrackList from './src/screens/TrackList'
import { setNavigator } from './src/helper/navigationRef'
import ResolveAuth from './src/screens/ResolveAuth';

import { Context as authContext } from './src/context/authContext'
import { Provider as AuthProvider } from './src/context/authContext'
import { Provider as LocationProvider } from './src/context/locationContext'
import { Provider as TrackProvider } from './src/context/trackContext'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Auth flow
const AuthFlow = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false
        headerTitle: false
      }}
    >
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}

//Track flow
const TrackStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        // headerTransparent: true,
        // headerTitle: false
      }}
    >
      <Stack.Screen name="TrackList" component={TrackList} />
      <Stack.Screen name="TrackDetail" component={TrackDetail} />
    </Stack.Navigator>
  )
}

//Main flow
const MainFlow = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="TrackStack" component={TrackStack} />
      <Tab.Screen name="TrackCreate" component={TrackCreate} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  )
}

//Navigator
const Navigator = () => {
  const { state } = useContext(authContext);
  if (state.isLoading) {
    return <ResolveAuth />
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={(navigator) => setNavigator(navigator)}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          {
            !state.token
              ?
              <Stack.Screen name="AuthFlow" component={AuthFlow} />
              :
              <Stack.Screen name="MainFlow" component={MainFlow} />
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}


//Main flow
const App = () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <Navigator />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>

  )
}



export default App

//End up lecture 215

