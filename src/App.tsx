import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home/Home.screen';

LogBox.ignoreAllLogs();

const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'home'} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default App;
