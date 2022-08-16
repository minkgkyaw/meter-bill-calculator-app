import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackScreenParamsList = {
  home: undefined;
  singleUnit: undefined;
  multipleUnit: undefined;
  pricesInfo: undefined;
  aboutUs: undefined;
  detail: {
    units: number;
    type: 'Home' | 'Factory';
    maintenance: boolean;
    options?: {
      prevUnits: number;
      currUnits: number;
    };
  };
};

export type HomeScreenNavigationType = NativeStackNavigationProp<
  RootStackScreenParamsList,
  'singleUnit' | 'multipleUnit' | 'pricesInfo' | 'aboutUs'
>;

export type DetailScreenProps = NativeStackScreenProps<
  RootStackScreenParamsList,
  'detail'
>;
