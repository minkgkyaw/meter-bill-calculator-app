import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {Caption} from 'react-native-paper';

interface IProps {}

const CalculateMultipleUnitScreen: FC<PropsWithChildren<IProps>> = () => {
  return (
    <View>
      <Caption>Hello from different screen</Caption>
    </View>
  );
};

export default CalculateMultipleUnitScreen;
