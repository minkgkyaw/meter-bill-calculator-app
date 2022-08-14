import React, {useEffect} from 'react';
import {LogBox, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

LogBox.ignoreAllLogs();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 750);
  }, []);

  return (
    <View>
      <Text>Hello from react native</Text>
    </View>
  );
};

export default App;
