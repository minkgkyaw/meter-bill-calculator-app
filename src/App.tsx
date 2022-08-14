import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {LogBox, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

LogBox.ignoreAllLogs();

const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  }, []);

  return (
    <View>
      <Text>Hello from react native</Text>
    </View>
  );
};

export default App;
