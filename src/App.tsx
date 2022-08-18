import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home/Home.screen';
import AboutUsScreen from './screens/other/AboutUs.screen';
import ShowPricesScreen from './screens/other/Prices.screen';
import CalculateMultipleUnitScreen from './screens/Calculate/MultipleUnits.screen';
import CalculateSingleUnitScreen from './screens/Calculate/SingleUnit.screen';
import {RootStackScreenParamsList} from './types/navigator.types';
import ShowDetailScreen from './screens/detail/Detail.screen';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackScreenParamsList>();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        fullScreenGestureEnabled: true,
        animationTypeForReplace: 'push',
        animation: 'slide_from_left',
        presentation: 'card',
      }}
      initialRouteName={'home'}>
      <Stack.Screen name={'home'} component={HomeScreen} />
      <Stack.Screen name={'singleUnit'} component={CalculateSingleUnitScreen} />
      <Stack.Screen
        name={'multipleUnit'}
        component={CalculateMultipleUnitScreen}
      />
      <Stack.Screen name={'pricesInfo'} component={ShowPricesScreen} />
      <Stack.Screen name={'aboutUs'} component={AboutUsScreen} />
      <Stack.Screen
        name={'detail'}
        component={ShowDetailScreen}
        initialParams={{
          units: 0,
          type: 'Home',
          options: {
            prevUnits: 0,
            currUnits: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default App;
